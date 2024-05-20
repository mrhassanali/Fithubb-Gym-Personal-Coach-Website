/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily:{
      "fira-sans":["Fira Sans", "sans-serif"]
    },
    extend: {
      colors:{
        red:{
          550:"#FE0010"
        }
      },
      screens: {
        xs: "0px",
        small: "400px",
        xmd: "700px",
        large: "800px",
        xlarge: "1000px",
        xxlarge: "1250px",
        fullhd: "1440px",
      }
    },
  },
  plugins: [],
};
