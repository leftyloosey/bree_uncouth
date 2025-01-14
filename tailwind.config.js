/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        cinzel: ['Cinzel', 'sans-serif'],
        grotesk: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
        // grotesk: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        kyiv_buildings:
          "url('/Users/davidhardin/sandbox/bree_uncouth/bree_uncouth_milosz/bree_uncouth/src/assets/images/kyiv_buildings.png')",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 0s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
