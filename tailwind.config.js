/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-1': '#093E2C',
        'green-2': '#00905F',
        'green-3': '#7AC56B',
        'green-4': '#B3D5AC',
        'green-5': '#E6EBE1',

      },
      fontFamily: {
        'laren': ['McLaren', 'cursive'],
        'lato': ['Lato', 'sans-serif'],
        'hind': ['Hind Siliguri', 'sans-serif'],
      },
      backgroundImage: {
        'bigblob': "url('./assets/bigblob.png')",
        'back': "url('./assets/back.jpg')",
      }
    },
  },
  plugins: [],
}