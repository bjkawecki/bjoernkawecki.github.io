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
    "./_posts/**/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          50: "#ebe4dc",
          100: "#e2d9cf",
          200: "#cfc2b4",
          300: "#b5a494",
          400: "#968575",
          500: "#7a6b5d",
          600: "#5c5650",
          700: "#3a4550",
          800: "#252a30",
          900: "#1a1c1b",
          950: "#161918",
        },
        accent: {
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          950: "var(--accent-950)",
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
