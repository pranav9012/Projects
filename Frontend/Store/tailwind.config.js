/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card':' 15px 15px 50px',
        'size':' 0px 0px 1px 2px inset'
      }
    },
  },
  plugins: [],
}

