/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        'great-vibes':["Great Vibes", "cursive"]
      }
    },
   
  },
  plugins: [],
}

