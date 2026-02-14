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
      width: {
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
      },
    },
  },
};
