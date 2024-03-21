/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        BgBlack: "#101418",
        Primary: "#181C20",
        Primaryb: "#24282C",
        Secondary: "#FFFFFF",
        Ter: "#C8D2DC",
        Ter2: "#96A0AA",
        Ter3: "#646E78",
        Font: "#b4bec8",
      },
      fontFamily: {
        LeagueGothic: ["League Gothic", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        vmd: "930px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
