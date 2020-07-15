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

                'teal-50': '#E6FFFA',
                'teal-100': '#B2F5EA',
                'teal-200': '#81E6D9',
                'teal-300': '#4FD1C5',
                'teal-400': '#38B2AC',
                'teal-500': '#319795',
                'teal-600': '#2C7A7B',
                'teal-700': '#285E61',
                'teal-800': '#234E52',
                'teal-900': '#1D4044',
            },
            minWidth: {
                button: '5rem',
            },
        },
    },
    variants: {},
    plugins: [tailwindcssui],
};
