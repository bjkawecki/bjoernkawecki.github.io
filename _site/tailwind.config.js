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
                'sans': ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "blue2": {
                    '50': '#edfbff',
                    '100': '#d6f3ff',
                    '200': '#b5edff',
                    '300': '#83e4ff',
                    '400': '#48d2ff',
                    '500': '#1eb5ff',
                    '600': '#0698ff',
                    '700': '#0084ff',
                    '800': '#0864c5',
                    '900': '#0d569b',
                    '950': '#0e345d',
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        // ...
    ],
};
