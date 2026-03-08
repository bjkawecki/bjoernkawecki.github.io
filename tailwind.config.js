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
