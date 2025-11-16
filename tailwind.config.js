// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Importamos el tema por defecto

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Aquí definimos la nueva fuente
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // ESTA ES LA PARTE QUE FALTA:
      colors: {
        'emcotic-blue': '#002D62', // Un azul marino ejecutivo
        'emcotic-cyan': '#00b5e2', // Un cian vibrante para acentos
      }
    },
  },
  plugins: [],
}
