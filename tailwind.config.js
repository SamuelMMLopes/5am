/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Inter", sans-serif',
        chakra: '"Chakra Petch", sans- serif'
      },
      colors: {
        background: "#01080E",
        card: "#021017"
      }
    },
  },
  plugins: [],
}

