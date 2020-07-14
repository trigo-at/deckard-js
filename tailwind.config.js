/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcssui = require('@tailwindcss/ui');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'trigo-yellow': '#F7CA10',
                'trigo-green': '#7FBD42',
                'trigo-blue': '#3AB2D2',
                'trigo-dark': '#1A202C',
            },
        },
    },
    variants: {},
    plugins: [tailwindcssui],
};
