const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Open Sans",
                    'Roboto',
                    'BlinkMacSystemFont',
                    'system-ui',
                    'sans-serif',
                    '"Noto Sans"',
                    '-apple-system',
                    '"Segoe UI"',
                    '"Helvetica Neue"',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                    'Arial',
                ],
            }
        }
    },
    plugins: []
};
