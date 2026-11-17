/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050814',
          900: '#090E24',
          850: '#0D1536',
          800: '#131E47',
          750: '#182457',
          700: '#1E2D69',
        },
        electric: {
          blue: '#2563EB',
          sky: '#38BDF8',
          cyan: '#06B6D4',
          indigo: '#6366F1',
          violet: '#8B5CF6',
        },
        slate: {
          850: '#151F33',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(37, 99, 235, 0.15), transparent 70%)',
        'card-glow': 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.12), transparent 40%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(56, 189, 248, 0.25)',
        'glow-md': '0 0 25px -5px rgba(56, 189, 248, 0.35)',
        'glow-lg': '0 0 40px -10px rgba(37, 99, 235, 0.45)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.4)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
