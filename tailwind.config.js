// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 60s linear infinite',
        'marquee-slow': 'marquee 80s linear infinite',
        'marquee-fast': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' }, // Move by 1/3 since we have 3 duplicates
        },
      },
      gap: {
        '12': '3rem',
        '16': '4rem', 
        '24': '6rem',
      }
    },
  },
  plugins: [],
};