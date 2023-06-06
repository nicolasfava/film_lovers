/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        light: '#ffffff',
        text_dark: '#111111',
        text_light: '#ffffff',
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlack: "rgba(0, 0, 0, 0.7)",
        red: '#ff0000'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "320px",
      ss: "375px",
      s: "425px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
    },
  },
  plugins: [],
}

