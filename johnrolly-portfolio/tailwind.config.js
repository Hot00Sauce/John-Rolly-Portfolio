/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'Roboto', 'sans-serif'],
        roboto: ['Roboto', 'Montserrat', 'sans-serif'],
      },
      keyframes: {
        highlight: {
          '0%': { backgroundColor: '#1ABC9C33' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      animation: {
        highlight: 'highlight 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
