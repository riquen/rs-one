/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        'md': '16rem 1fr'
      }
    },
  },
  plugins: [],
}

