/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edf7ff',
          100: '#d6edff',
          200: '#b5e0ff',
          300: '#83cfff',
          400: '#48b6ff',
          500: '#1e9bff',
          600: '#1772CC',
          700: '#0e5aa3',
          800: '#0f4a85',
          900: '#113f6b',
          950: '#0b2643',
        },
      }
    },
  },
  plugins: [],
}
