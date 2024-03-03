/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white-color": " hsl(0, 0%, 100%)",
        "Light-gray": "hsl(212, 45%, 89%)",
        "Grayish-blue": "hsl(220, 15%, 55%)",
        "Dark-blue": "hsl(218, 44%, 22%)"
      },
      fontFamily: {
        "principal": ["Outfit", "san-serif"]
      },
      boxShadow: {
        "shadow-low": "rgb(38, 57, 77) 0px 20px 30px -10px;",
        "shadow-apple": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      },
      screens: {
        "mobile-smart": "320px"
      }
    },
  },
  plugins: [],
}

