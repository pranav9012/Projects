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
        fade: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '50%' },
        },
        fadeOut: {
          '0%': { opacity: '50%' },
          '100%': { opacity: '0%' },
        }
      },
      animation: {
        rotateLoop: 'rotateLoop 1s linear infinite',
        fade: 'fade 200ms ease-in-out 1',
        fadeOut: 'fadeOut 200ms ease-in-out 1'
      },
    },
  },
  plugins: [],
}


