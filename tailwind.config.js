module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        75: "1 1 75%",
        16.67: "0 0 16.6666666667%",
        33.33: "0 0 33.3333333333%",
      },
      maxWidth: {
        "3/4": "75%",
        16.67: "16.6666666667%",
        33.33: "33.3333333333%",
      },
      boxShadow: {
        cool: "1px 5px 15px #CCC",
      },
      colors: {
        cool: "#EEE5E9",
        cool2: "#92DCE5",
      },
    },
  },
  variants: {
    extend: {
      translate: ["active"],
    },
  },
  plugins: [],
};
