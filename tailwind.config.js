/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Code', 'sans-serif'],
      },
      colors: {
        'primary': '#C778DD',
        'custom-gray': '#ABB2BF',
      },
    },
  },
  plugins: [],
};
