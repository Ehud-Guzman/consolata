/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Color — Soft Navy Blue
        navy: {
          primary: '#1F3A5F',
          secondary: '#2E4A6F'
        },
        // Secondary Color — Warm Gold
        gold: {
          accent: '#D4A017'
        },
        // Backgrounds — Clean Light Neutrals
        background: {
          light: '#F6F8FB',
          card: '#EEF2F7'
        },
        // Text Colors (No pure black)
        text: {
          heading: '#0F172A',
          body: '#334155',
          muted: '#64748B'
        },
        // Status / Utility
        status: {
          success: '#2E7D32',
          link: '#2563EB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}