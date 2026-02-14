module.exports = {
  plugins: [
    ...(process.env.JEKYLL_ENV === "production"
      ? [require("cssnano")({ preset: "default" })]
      : []),
  ],
};