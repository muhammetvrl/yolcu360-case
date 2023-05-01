/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ffa900",
        secondary: "#0e568c"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      }
    },
  },
  plugins: [],
}

