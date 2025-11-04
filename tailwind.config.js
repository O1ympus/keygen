/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Code', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#8B45A4',
        'primary': '#C778DD',
        'custom-gray': '#ABB2BF',
        'background': '#282C33',
      },
    },
  },
  plugins: [],
};
