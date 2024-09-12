/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    keyframes: {
      move: {
        '0%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(3px)' },
        '100%': { transform: 'translateY(0px)' },
      },
      startBtn: {
        '0%': { transform: 'translateY(6px)' },
        '50%': { transform: 'translateY(-3px)' },
        '100%': { transform: 'translateY(0px)' },
      }
    },
    animation: {
      move: 'move 0.3s linear 1',
      startBtn:'startBtn 0.3s ease-in 1',
    },
    boxShadow: {
      'inset-lg' : 'inset 6rem 0 30rem 5rem #080a25'
    },
    backgroundImage: {
      sky: "url('./src/assets/5.png')"
    },
  },
  plugins: [],
}

