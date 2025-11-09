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
        brand: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#0b111a",
        },
        accent: {
          50: "#fff5f3",
          100: "#ffe3dd",
          200: "#ffcabf",
          300: "#ff9c8c",
          400: "#ff7666",
          500: "#ff5447",
          600: "#e63b32",
          700: "#b72927",
          800: "#8f1f22",
          900: "#6d191d",
          950: "#3f0b10",
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
