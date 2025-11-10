/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F9F8F4",
          100: "#EDE6D6",
          200: "#E3C264",
          300: "#7AB078",
          400: "#4B4742",
        },
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Open Sans", "sans-serif"],
        cta: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
