module.exports = {
  purge: ["./public/*.html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "dark-night": "#1a1b26",
        "background-dark": "#16161E",
        "background-med-dark": "#070a1b",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
      animation: {
        blob: "blob 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
