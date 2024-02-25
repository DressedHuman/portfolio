/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", 'cursive'],
        open_sans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

