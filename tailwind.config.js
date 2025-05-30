const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "selector",
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_projects/*.md",
    "./_pages/*.md",
    "./_pages/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          50: "#eff5ff",
          100: "#dae8ff",
          200: "#bdd6ff",
          300: "#91beff",
          400: "#5e9bfc",
          500: "#3874f9",
          600: "#2255ee",
          700: "#1a40db",
          800: "#1c35b1",
          900: "#1c328c",
          950: "#162055",
        },

        fuchsia: {
          50: "#f9f6fe",
          100: "#f1eafd",
          200: "#e5d8fc",
          300: "#d1b9f9",
          400: "#b58df3",
          500: "#9961eb",
          600: "#8749de",
          700: "#6d2fc1",
          800: "#5e2b9e",
          900: "#4d247f",
          950: "#310e5d",
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
