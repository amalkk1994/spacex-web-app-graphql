/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: { max: "960px" },
      sm: { max: "620px" },
    },
    extend: {},
  },
  plugins: [],
}
