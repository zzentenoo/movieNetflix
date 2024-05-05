/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-text': '#2B0132',
        'custom-bg': '#E4C4F2',
        'custom-primary': '#E53E70',
        'custom-secondary': '#9C3587',
        'custom-accent': '#F89F5B',
        'page-bg': '#E4C4F2',
      },
      boxShadow: {
        'custom': '0 4px 6px 5px rgba(156, 53, 135, 0.3), 0 2px 4px 1px rgba(156, 53, 135, 0.3)'
      },
      fontFamily: {
        'anek': ['Anek Bangla', 'sans-serif']
      }
    },
  },
  plugins: [],
}

