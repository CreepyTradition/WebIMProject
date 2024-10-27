/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      red: "var(--color-red)",
      blue: "var(--color-blue)",
      regular: "var(--color-regular)",
      border: "var(--color-border)",
    }
  },
  plugins: [],
}