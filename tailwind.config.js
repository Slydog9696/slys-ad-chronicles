/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm Earth Tones (Analog)
        'farm-gold': '#D4AF37',
        'hay-yellow': '#F4D03F',
        'barn-red': '#C0392B',
        'soil-brown': '#8B4513',
        'pasture-green': '#27AE60',
        'sunset-orange': '#E67E22',
        
        // Cool Tech Blues (Digital)
        'tech-blue': '#3498DB',
        'electric-blue': '#2980B9',
        'cyber-teal': '#1ABC9C',
        'midnight-blue': '#2C3E50',
        'neon-blue': '#00BFFF',
        'steel-blue': '#4682B4',
        
        // Accent Colors
        'glow-blue': '#00D4FF',
        'glow-orange': '#FF6B35',
        'neutral-gray': '#34495E',
        'light-gray': '#ECF0F1',
      },
      fontFamily: {
        'tech': ['Orbitron', 'monospace'],
        'farm': ['Georgia', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'circuit-pattern': "url('/images/circuit-pattern.png')",
        'farm-pattern': "url('/images/farm-pattern.png')",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00D4FF' },
          '100%': { boxShadow: '0 0 20px #00D4FF, 0 0 30px #00D4FF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

