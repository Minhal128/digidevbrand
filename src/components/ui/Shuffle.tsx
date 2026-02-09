"use client";

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export interface ShuffleProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
    shuffleDirection?: 'left' | 'right';
    duration?: number;
    maxDelay?: number;
    ease?: string | ((t: number) => number);
    threshold?: number;
    rootMargin?: string;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    textAlign?: React.CSSProperties['textAlign'];
    onShuffleComplete?: () => void;
    shuffleTimes?: number;
    animationMode?: 'random' | 'evenodd';
    loop?: boolean;
    loopDelay?: number;
    stagger?: number;
    scrambleCharset?: string;
    colorFrom?: string;
    colorTo?: string;
    triggerOnce?: boolean;
    respectReducedMotion?: boolean;
    triggerOnHover?: boolean;
}

const Shuffle: React.FC<ShuffleProps> = ({
    text,
    className = '',
    style = {},
    shuffleDirection = 'right',
    duration = 0.35,
    maxDelay = 0,
    ease = 'power3.out',
    threshold = 0.1,
    rootMargin = '-100px',
    tag = 'p',
    textAlign = 'center',
    onShuffleComplete,
    animationMode = 'evenodd',
    stagger = 0.03,
    colorFrom,
    colorTo,
    triggerOnce = true,
    respectReducedMotion = true,
    triggerOnHover = true
}) => {
    const ref = useRef<HTMLElement>(null);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [ready, setReady] = useState(false);
    const charsRef = useRef<HTMLSpanElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const playingRef = useRef(false);

    useEffect(() => {
        if ('fonts' in document) {
            if (document.fonts.status === 'loaded') setFontsLoaded(true);
            else document.fonts.ready.then(() => setFontsLoaded(true));
        } else setFontsLoaded(true);
    }, []);

    const scrollTriggerStart = useMemo(() => {
        const startPct = (1 - threshold) * 100;
        const mm = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin || '');
        const mv = mm ? parseFloat(mm[1]) : 0;
        const mu = mm ? mm[2] || 'px' : 'px';
        const sign = mv === 0 ? '' : mv < 0 ? `-=${Math.abs(mv)}${mu}` : `+=${mv}${mu}`;
        return `top ${startPct}%${sign}`;
    }, [threshold, rootMargin]);

    useGSAP(
        () => {
            if (!ref.current || !text || !fontsLoaded) return;
            if (respectReducedMotion && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                setReady(true);
                onShuffleComplete?.();
                return;
            }

            const el = ref.current as HTMLElement;
            const chars = charsRef.current;

            const play = () => {
                if (playingRef.current) return;
                playingRef.current = true;

                const tl = gsap.timeline({
                    onComplete: () => {
                        playingRef.current = false;
                        onShuffleComplete?.();
                    }
                });

                chars.forEach((char, i) => {
                    const delay = animationMode === 'evenodd'
                        ? (i % 2 === 0 ? 0 : stagger * chars.length * 0.5) + (Math.floor(i / 2) * stagger)
                        : Math.random() * maxDelay;

                    tl.fromTo(
                        char,
                        {
                            opacity: 0,
                            y: shuffleDirection === 'right' ? 20 : -20,
                            rotateX: shuffleDirection === 'right' ? -90 : 90,
                            color: colorFrom || 'inherit'
                        },
                        {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            color: colorTo || 'inherit',
                            duration,
                            ease,
                        },
                        delay
                    );
                });

                tlRef.current = tl;
                setReady(true);
            };

            const st = ScrollTrigger.create({
                trigger: el,
                start: scrollTriggerStart,
                once: triggerOnce,
                onEnter: play
            });

            if (triggerOnHover) {
                el.addEventListener('mouseenter', () => {
                    if (!playingRef.current && ready) {
                        gsap.set(chars, { opacity: 0, y: 20, rotateX: -90 });
                        play();
                    }
                });
            }

            return () => {
                st.kill();
                tlRef.current?.kill();
            };
        },
        {
            dependencies: [text, duration, ease, scrollTriggerStart, fontsLoaded, shuffleDirection, animationMode, stagger, colorFrom, colorTo, triggerOnce, respectReducedMotion, triggerOnHover, onShuffleComplete, ready, maxDelay],
            scope: ref
        }
    );

    const chars = text.split('');
    const Tag = tag as keyof React.JSX.IntrinsicElements;

    const commonStyle: React.CSSProperties = useMemo(() => ({
        textAlign,
        perspective: '1000px',
        ...style
    }), [textAlign, style]);

    return React.createElement(
        Tag,
        {
            ref: ref as React.RefObject<HTMLParagraphElement>,
            className: `inline-block ${className}`.trim(),
            style: commonStyle
        },
        chars.map((char, i) => (
            <span
                key={i}
                ref={(el) => { if (el) charsRef.current[i] = el; }}
                className="inline-block"
                style={{
                    opacity: ready ? 1 : 0,
                    transformStyle: 'preserve-3d',
                    display: char === ' ' ? 'inline' : 'inline-block',
                    width: char === ' ' ? '0.3em' : 'auto'
                }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))
    );
};

export default Shuffle;
