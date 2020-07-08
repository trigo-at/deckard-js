/* eslint-disable global-require */
const purgecss = require('@fullhuman/postcss-purgecss');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        require('tailwindcss')('./config/tailwind.config.js'),
        require('autoprefixer'),
        ...(isProduction
            ? [purgecss({content: ['./**/*.ts', './**/*.tsx']})]
            : []),
    ],
};
