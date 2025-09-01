/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        source: ["Cascadia Code"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

