/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Tu fuente base si usas otra
        tech: ['"Audiowide"', 'cursive'], // Fuente tech personalizada
        comic: ['"Comic Neue"', 'cursive'], // La fuente que ya usabas
      },
    },
  },
  plugins: [],
};
