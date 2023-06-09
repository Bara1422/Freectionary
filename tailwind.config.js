/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
      monospace: ['Space Mono', 'monospace', 'serif'],
      roboto: ['Roboto'],
      merriweather: ['Merriweather', 'serif'],
      oswald: ['Oswald', 'sans-serif']
    },
    extend: {}
  },
  darkMode: 'class',
  plugins: []
}
