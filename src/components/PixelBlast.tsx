// Component inspired by github.com/zavalit/bayer-dithering-webgl-demo

import React, { useEffect, useRef, memo } from 'react';
import * as THREE from 'three';
import { EffectComposer, EffectPass, RenderPass, Effect } from 'postprocessing';

type PixelBlastVariant = 'square' | 'circle' | 'triangle' | 'diamond';

interface TouchPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  force: number;
  age: number;
}

interface TouchTexture {
  canvas: HTMLCanvasElement;
  texture: THREE.Texture;
  addTouch: (norm: { x: number; y: number }) => void;
  update: () => void;
  radiusScale: number;
  size: number;
}

interface ReinitConfig {
  antialias: boolean;
  liquid: boolean;
  noiseAmount: number;
}

type PixelBlastProps = {
  variant?: PixelBlastVariant;
  pixelSize?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  antialias?: boolean;
  patternScale?: number;
  patternDensity?: number;
  liquid?: boolean;
  liquidStrength?: number;
  liquidRadius?: number;
  pixelSizeJitter?: number;
  enableRipples?: boolean;
  rippleIntensityScale?: number;
  rippleThickness?: number;
  rippleSpeed?: number;
  liquidWobbleSpeed?: number;
  autoPauseOffscreen?: boolean;
  speed?: number;
  transparent?: boolean;
  edgeFade?: number;
  noiseAmount?: number;
};

const SHAPE_MAP: Record<PixelBlastVariant, number> = {
  square: 0,
  circle: 1,
  triangle: 2,
  diamond: 3,
};

const MAX_CLICKS = 10;

const VERTEX_SRC = `void main() { gl_Position = vec4(position, 1.0); }`;

const FRAGMENT_SRC = `
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;
uniform int   uShapeType;

const int SHAPE_SQUARE = 0;
const int SHAPE_CIRCLE = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND = 3;
const int MAX_CLICKS = 10;

uniform vec2  uClickPos[MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2.0 + a.y * a.y * 0.75);
}
#define Bayer4(a) (Bayer2(0.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(0.5*(a))*0.25 + Bayer2(a))

float hash11(float n) { return fract(sin(n) * 43758.5453); }

float vnoise(vec3 p) {
  vec3 ip = floor(p), fp = fract(p);
  float n000 = hash11(dot(ip, vec3(1.0, 57.0, 113.0)));
  float n100 = hash11(dot(ip + vec3(1.0, 0.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n010 = hash11(dot(ip + vec3(0.0, 1.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n110 = hash11(dot(ip + vec3(1.0, 1.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n001 = hash11(dot(ip + vec3(0.0, 0.0, 1.0), vec3(1.0, 57.0, 113.0)));
  float n101 = hash11(dot(ip + vec3(1.0, 0.0, 1.0), vec3(1.0, 57.0, 113.0)));
  float n011 = hash11(dot(ip + vec3(0.0, 1.0, 1.0), vec3(1.0, 57.0, 113.0)));
  float n111 = hash11(dot(ip + vec3(1.0, 1.0, 1.0), vec3(1.0, 57.0, 113.0)));
  vec3 w = fp * fp * fp * (fp * (fp * 6.0 - 15.0) + 10.0);
  return mix(mix(mix(n000, n100, w.x), mix(n010, n110, w.x), w.y),
             mix(mix(n001, n101, w.x), mix(n011, n111, w.x), w.y), w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t) {
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0, freq = 1.0, sum = 1.0;
  for (int i = 0; i < 5; ++i) {
    sum += amp * vnoise(p * freq);
    freq *= 1.25;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov) {
  float r = sqrt(cov) * 0.25;
  float d = length(p - 0.5) - r;
  return cov * (1.0 - smoothstep(-0.5 * fwidth(d), 0.5 * fwidth(d), d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov) {
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d = p.y - r * (1.0 - p.x);
  return cov * clamp(0.5 - d / fwidth(d), 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov) {
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy - uResolution * 0.5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / uPixelSize);
  vec2 pixelUV = fract(fragCoord / uPixelSize);

  float cellPixelSize = 8.0 * uPixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 uv = cellId * cellPixelSize / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05) * 0.5 - 0.65;
  float feed = base + (uDensity - 0.5) * 0.3;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i) {
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      vec2 cuv = ((pos - uResolution * 0.5 - cellPixelSize * 0.5) / uResolution) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float ring = exp(-pow((r - uRippleSpeed * t) / uRippleThickness, 2.0));
      feed = max(feed, ring * exp(-t) * exp(-10.0 * r) * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(pixelId, vec2(127.1, 311.7))) * 43758.5453);
  float coverage = bw * (1.0 + (h - 0.5) * uPixelJitter);
  
  float M;
  if (uShapeType == SHAPE_CIRCLE) M = maskCircle(pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND) M = maskDiamond(pixelUV, coverage);
  else M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    M *= smoothstep(0.0, uEdgeFade, edge);
  }

  fragColor = vec4(uColor, M);
}
`;

const createTouchTexture = (): TouchTexture => {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.Texture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  const trail: TouchPoint[] = [];
  let last: { x: number; y: number } | null = null;
  const maxAge = 64;
  let radius = 0.1 * size;

  const clear = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, size, size);
  };

  const drawPoint = (p: TouchPoint) => {
    const pos = { x: p.x * size, y: (1 - p.y) * size };
    const easeOutSine = (t: number) => Math.sin((t * Math.PI) / 2);
    const easeOutQuad = (t: number) => -t * (t - 2);
    let intensity = p.age < maxAge * 0.3 
      ? easeOutSine(p.age / (maxAge * 0.3)) 
      : easeOutQuad(1 - (p.age - maxAge * 0.3) / (maxAge * 0.7)) || 0;
    intensity *= p.force;

    const color = `${((p.vx + 1) / 2) * 255}, ${((p.vy + 1) / 2) * 255}, ${intensity * 255}`;
    const offset = size * 5;
    ctx.shadowOffsetX = offset;
    ctx.shadowOffsetY = offset;
    ctx.shadowBlur = radius;
    ctx.shadowColor = `rgba(${color},${0.22 * intensity})`;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,1)';
    ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
    ctx.fill();
  };

  return {
    canvas,
    texture,
    addTouch: (norm: { x: number; y: number }) => {
      let force = 0, vx = 0, vy = 0;
      if (last) {
        const dx = norm.x - last.x, dy = norm.y - last.y;
        if (dx === 0 && dy === 0) return;
        const d = Math.sqrt(dx * dx + dy * dy);
        vx = dx / (d || 1);
        vy = dy / (d || 1);
        force = Math.min((dx * dx + dy * dy) * 10000, 1);
      }
      last = { x: norm.x, y: norm.y };
      trail.push({ x: norm.x, y: norm.y, age: 0, force, vx, vy });
    },
    update: () => {
      clear();
      const speed = 1 / maxAge;
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        const f = p.force * speed * (1 - p.age / maxAge);
        p.x += p.vx * f;
        p.y += p.vy * f;
        if (++p.age > maxAge) trail.splice(i, 1);
      }
      trail.forEach(drawPoint);
      texture.needsUpdate = true;
    },
    set radiusScale(v: number) { radius = 0.1 * size * v; },
    get radiusScale() { return radius / (0.1 * size); },
    size,
  };
};

const createLiquidEffect = (texture: THREE.Texture, strength = 0.025, freq = 4.5) => {
  return new Effect('LiquidEffect', `
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;
    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float intensity = tex.b;
      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);
      uv += vec2(tex.r * 2.0 - 1.0, tex.g * 2.0 - 1.0) * uStrength * intensity * wave;
    }
  `, {
    uniforms: new Map<string, THREE.Uniform>([
      ['uTexture', new THREE.Uniform(texture)],
      ['uStrength', new THREE.Uniform(strength)],
      ['uTime', new THREE.Uniform(0)],
      ['uFreq', new THREE.Uniform(freq)],
    ]),
  });
};

const PixelBlast: React.FC<PixelBlastProps> = ({
  variant = 'square',
  pixelSize = 3,
  color = '#B19EEF',
  className,
  style,
  antialias = true,
  patternScale = 2,
  patternDensity = 1,
  liquid = false,
  liquidStrength = 0.1,
  liquidRadius = 1,
  pixelSizeJitter = 0,
  enableRipples = true,
  rippleIntensityScale = 1,
  rippleThickness = 0.1,
  rippleSpeed = 0.3,
  liquidWobbleSpeed = 4.5,
  autoPauseOffscreen = true,
  speed = 0.5,
  transparent = true,
  edgeFade = 0.5,
  noiseAmount = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visibilityRef = useRef({ visible: true });
  const speedRef = useRef(speed);
  const threeRef = useRef<{
    renderer: THREE.WebGLRenderer;
    material: THREE.ShaderMaterial;
    clock: THREE.Clock;
    clickIx: number;
    uniforms: Record<string, { value: unknown }>;
    resizeObserver?: ResizeObserver;
    raf?: number;
    composer?: EffectComposer;
    touch?: TouchTexture;
    liquidEffect?: Effect;
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    quad: THREE.Mesh;
  } | null>(null);
  const prevConfigRef = useRef<ReinitConfig | null>(null);

  useEffect(() => { speedRef.current = speed; }, [speed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cfg: ReinitConfig = { antialias, liquid, noiseAmount };
    const mustReinit = !threeRef.current || 
      !prevConfigRef.current ||
      prevConfigRef.current.antialias !== cfg.antialias ||
      prevConfigRef.current.liquid !== cfg.liquid ||
      prevConfigRef.current.noiseAmount !== cfg.noiseAmount;

    if (mustReinit) {
      // Cleanup existing
      if (threeRef.current) {
        const t = threeRef.current;
        t.resizeObserver?.disconnect();
        cancelAnimationFrame(t.raf!);
        t.quad.geometry.dispose();
        t.material.dispose();
        t.composer?.dispose();
        t.renderer.dispose();
        container.removeChild(t.renderer.domElement);
        threeRef.current = null;
      }

      const renderer = new THREE.WebGLRenderer({ antialias, alpha: true, powerPreference: 'high-performance' });
      renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
      renderer.setClearAlpha(transparent ? 0 : 1);

      const uniforms = {
        uResolution: { value: new THREE.Vector2() },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uClickPos: { value: Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-1, -1)) },
        uClickTimes: { value: new Float32Array(MAX_CLICKS) },
        uShapeType: { value: SHAPE_MAP[variant] },
        uPixelSize: { value: pixelSize * renderer.getPixelRatio() },
        uScale: { value: patternScale },
        uDensity: { value: patternDensity },
        uPixelJitter: { value: pixelSizeJitter },
        uEnableRipples: { value: enableRipples ? 1 : 0 },
        uRippleSpeed: { value: rippleSpeed },
        uRippleThickness: { value: rippleThickness },
        uRippleIntensity: { value: rippleIntensityScale },
        uEdgeFade: { value: edgeFade },
      };

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX_SRC,
        fragmentShader: FRAGMENT_SRC,
        uniforms,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        glslVersion: THREE.GLSL3,
      });
      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(quad);

      const clock = new THREE.Clock();
      const timeOffset = Math.random() * 1000;

      const setSize = () => {
        const w = container.clientWidth || 1;
        const h = container.clientHeight || 1;
        renderer.setSize(w, h, false);
        uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height);
        uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio();
        threeRef.current?.composer?.setSize(renderer.domElement.width, renderer.domElement.height);
      };
      setSize();

      const ro = new ResizeObserver(setSize);
      ro.observe(container);

      let composer: EffectComposer | undefined;
      let touch: TouchTexture | undefined;
      let liquidEffect: Effect | undefined;

      if (liquid) {
        touch = createTouchTexture();
        touch.radiusScale = liquidRadius;
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        liquidEffect = createLiquidEffect(touch.texture, liquidStrength, liquidWobbleSpeed);
        const effectPass = new EffectPass(camera, liquidEffect);
        effectPass.renderToScreen = true;
        composer.addPass(effectPass);
      }

      if (noiseAmount > 0) {
        if (!composer) {
          composer = new EffectComposer(renderer);
          composer.addPass(new RenderPass(scene, camera));
        }
        const noiseEffect = new Effect('NoiseEffect',
          `uniform float uTime; uniform float uAmount;
           float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);}
           void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
             float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0));
             outputColor=inputColor+vec4(vec3((n-0.5)*uAmount),0.0);
           }`,
          { uniforms: new Map([['uTime', new THREE.Uniform(0)], ['uAmount', new THREE.Uniform(noiseAmount)]]) }
        );
        const noisePass = new EffectPass(camera, noiseEffect);
        noisePass.renderToScreen = true;
        composer.passes.forEach((p: { renderToScreen?: boolean }) => { p.renderToScreen = false; });
        composer.addPass(noisePass);
      }

      composer?.setSize(renderer.domElement.width, renderer.domElement.height);

      const mapToPixels = (e: PointerEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        return {
          fx: (e.clientX - rect.left) * renderer.domElement.width / rect.width,
          fy: (rect.height - (e.clientY - rect.top)) * renderer.domElement.height / rect.height,
          w: renderer.domElement.width,
          h: renderer.domElement.height,
        };
      };

      const onPointerDown = (e: PointerEvent) => {
        const { fx, fy } = mapToPixels(e);
        const ix = threeRef.current?.clickIx ?? 0;
        (uniforms.uClickPos.value as THREE.Vector2[])[ix].set(fx, fy);
        (uniforms.uClickTimes.value as Float32Array)[ix] = uniforms.uTime.value as number;
        if (threeRef.current) threeRef.current.clickIx = (ix + 1) % MAX_CLICKS;
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!touch) return;
        const { fx, fy, w, h } = mapToPixels(e);
        touch.addTouch({ x: fx / w, y: fy / h });
      };

      renderer.domElement.addEventListener('pointerdown', onPointerDown, { passive: true });
      renderer.domElement.addEventListener('pointermove', onPointerMove, { passive: true });

      let raf = 0;
      const animate = () => {
        raf = requestAnimationFrame(animate);
        if (autoPauseOffscreen && !visibilityRef.current.visible) return;

        uniforms.uTime.value = timeOffset + clock.getElapsedTime() * speedRef.current;

        if (liquidEffect) {
          const liq = liquidEffect as Effect & { uniforms: Map<string, THREE.Uniform> };
          liq.uniforms.get('uTime')!.value = uniforms.uTime.value;
        }

        if (composer) {
          touch?.update();
          composer.render();
        } else {
          renderer.render(scene, camera);
        }
      };
      raf = requestAnimationFrame(animate);

      threeRef.current = {
        renderer, scene, camera, material, clock, clickIx: 0, uniforms,
        resizeObserver: ro, raf, quad, composer, touch, liquidEffect,
      };
    } else {
      // Update uniforms without reinit
      const t = threeRef.current!;
      t.uniforms.uShapeType.value = SHAPE_MAP[variant];
      t.uniforms.uPixelSize.value = pixelSize * t.renderer.getPixelRatio();
      (t.uniforms.uColor.value as THREE.Color).set(color);
      t.uniforms.uScale.value = patternScale;
      t.uniforms.uDensity.value = patternDensity;
      t.uniforms.uPixelJitter.value = pixelSizeJitter;
      t.uniforms.uEnableRipples.value = enableRipples ? 1 : 0;
      t.uniforms.uRippleIntensity.value = rippleIntensityScale;
      t.uniforms.uRippleThickness.value = rippleThickness;
      t.uniforms.uRippleSpeed.value = rippleSpeed;
      t.uniforms.uEdgeFade.value = edgeFade;
      t.renderer.setClearAlpha(transparent ? 0 : 1);

      if (t.liquidEffect) {
        const liq = t.liquidEffect as Effect & { uniforms: Map<string, THREE.Uniform> };
        liq.uniforms.get('uStrength')!.value = liquidStrength;
        liq.uniforms.get('uFreq')!.value = liquidWobbleSpeed;
      }
      if (t.touch) t.touch.radiusScale = liquidRadius;
    }

    prevConfigRef.current = cfg;

    return () => {
      if (!threeRef.current) return;
      const t = threeRef.current;
      t.resizeObserver?.disconnect();
      cancelAnimationFrame(t.raf!);
      t.quad.geometry.dispose();
      t.material.dispose();
      t.composer?.dispose();
      t.renderer.dispose();
      if (t.renderer.domElement.parentElement === container) {
        container.removeChild(t.renderer.domElement);
      }
      threeRef.current = null;
    };
  }, [
    antialias, liquid, noiseAmount, pixelSize, patternScale, patternDensity,
    enableRipples, rippleIntensityScale, rippleThickness, rippleSpeed,
    pixelSizeJitter, edgeFade, transparent, liquidStrength, liquidRadius,
    liquidWobbleSpeed, autoPauseOffscreen, variant, color,
  ]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden ${className ?? ''}`}
      style={style}
      aria-label="PixelBlast interactive background"
    />
  );
};

export default memo(PixelBlast)