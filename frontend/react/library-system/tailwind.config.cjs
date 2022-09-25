/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      boxShadow: {
        "3xl": "10px 5px 5px #bdc3c7",
      },
      borderRadius: {
        "1xl": "0px 0px 10px 10px",
        "2xl": "0px 20px 20px 0px",
      },
      backgroundColor: {
        "white-container": "#f9e9e8",
      },
    },
  },
  plugins: [],
};
