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
        fontFamily: {
            'sans': ["Arial", 'ui-sans-serif', 'system-ui',],
            'serif': ["Cambria", 'ui-serif',],
            'mono': ['ui-monospace', 'SFMono-Regular',],
            'display': ['Oswald',],
            'body': ['"Open Sans"',],
        },
        extend: {},
    },
    plugins: []
};