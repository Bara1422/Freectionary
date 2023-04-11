/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
      roboto: ['Roboto', 'serif'],
      merriweather: ['Merriweather', 'serif']
    },
    extend: {}
  },
  darkMode: 'class',
  plugins: []
}
