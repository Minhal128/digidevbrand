/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', "class"],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			dark: {
  				background: '#0a0a0a',
  				foreground: '#f5f5f5',
  				card: '#1a1a1a',
  				'card-foreground': '#f5f5f5',
  				muted: '#262626',
  				'muted-foreground': '#a3a3a3',
  				border: '#333333'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			serif: [
  				'Playfair Display',
  				'Georgia',
  				'serif'
  			],
  			arabic: [
  				'Noto Sans Arabic',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: '1rem'
  		},
  		animation: {
  			'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
  			float: 'float 3s ease-in-out infinite',
  			marquee: 'marquee 30s linear infinite',
  			scrollImage: 'scrollImage 8s ease-in-out infinite alternate',
  			bounceBack: 'bounceBack 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
  		},
  		keyframes: {
  			'pulse-ring': {
  				'0%': {
  					transform: 'scale(0.8)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(1.5)',
  					opacity: '0'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			scrollImage: {
  				'0%': {
  					'object-position': 'top'
  				},
  				'100%': {
  					'object-position': 'bottom'
  				}
  			},
  			bounceBack: {
  				'0%': {
  					transform: 'translateY(-60%)'
  				},
  				'45%': {
  					transform: 'translateY(4%)'
  				},
  				'65%': {
  					transform: 'translateY(-2%)'
  				},
  				'80%': {
  					transform: 'translateY(1%)'
  				},
  				'100%': {
  					transform: 'translateY(0%)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
