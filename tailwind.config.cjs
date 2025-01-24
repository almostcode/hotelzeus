/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors:{

        "naranja": "#bf522a",
        "negroclaro": "#262422",
        "amarilloveige": "#d99349",

      },
      backgroundImage: {
        "hotel-hero": "url('/public/img/hotel-zeus.png')",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
});
