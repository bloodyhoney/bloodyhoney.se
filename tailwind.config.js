// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  corePlugins: {
    // ...
    fontFamily: false,
  },
  theme: {
    extend: {
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen-80": "80vh",
        "screen-90": "90vh",
      }),
      colors: {
        grass: `#1a8642`,
      },
      transitionProperty: {
        display: "display",
        height: "height",
        none: "none",
        hidden: "hidden",

        all: "all",
      },
    },
  },
  variants: {
    display: ["responsive", "hover", "focus", "group-hover"],
    transitionProperty: ["responsive", "hover", "group-hover", "focus"],
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "group-hover",
      "odd",
      "even",
    ],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
