/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateLoop: {
          '0%': { transform: 'rotate(-45deg)' },
          '50%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(-45deg)' },
        },
      },
      animation: {
        rotateLoop: 'rotateLoop 1s linear infinite',
      },
    },
  },
  plugins: [],
}

