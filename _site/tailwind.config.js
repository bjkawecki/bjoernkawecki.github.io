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
        azure: {
          50: "#eff5ff",
          100: "#dbe8fe",
          200: "#bfd7fe",
          300: "#93bbfd",
          400: "#609afa",
          500: "#3b82f6",
          600: "#2570eb",
          700: "#1d64d8",
          800: "#1e55af",
          900: "#1e478a",
          950: "#172e54",
        },

        purple: {
          50: "#faf4ff",
          100: "#f3e6ff",
          200: "#ead2ff",
          300: "#d9aeff",
          400: "#c27bff",
          500: "#ab49ff",
          600: "#9825f8",
          700: "#8315db",
          800: "#6f17b2",
          900: "#5b148f",
          950: "#4b0082",
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
