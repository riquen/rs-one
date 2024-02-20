/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        'layout': '16rem 1fr'
      }
    },
  },
  plugins: [],
}

