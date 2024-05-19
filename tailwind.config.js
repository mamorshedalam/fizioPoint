/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    screens: {
      xs: "479px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'white-20': '#fbfafa',
      'white-50': '#f5fefa',
      'white-100': '#e6fff4',
      'black': '#000000',
      'black-20': '#1b0b03b3',
      'black-80': '#5a5a5a',
      'black-100': '#333333',
      'white-orange': '#fcf8f6',
      'orange-100': '#e6946e',
      'orange-80': '#e9a789',
      'orange-50': '#7c563e',
      'orange-40': '#efcebf',
      'orange-20': '#f2e2da',
      'green-100': '#94ceb3',
      'green-20': '#e2ede8',
      'green-40': '#cee5db',
    }
  },
  plugins: [],
};