module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray01: "#F1F1F6",
      gray02: "#E0E0E5",
      gray03: "#C6C6CC",
      gray04: "#AAAAB3",
      gray05: "#898993",
      gray06: "#6E6E76",
      gray07: "#56565D",
      gray08: "#37373E",
      gray09: "#28282D",
      gray10: "#19191C",
      gray11: "#141416",
      yellow: "#FECA00",
    },
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
