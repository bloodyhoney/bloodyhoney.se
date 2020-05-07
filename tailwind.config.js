// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  corePlugins: {
    // ...
    fontFamily: false,
  },
  theme: {
    extend: {
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
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
