const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
    stories: ['../src/**/*.stories.@(tsx|mdx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-a11y',
    ],
    typescript: {
        reactDocgen: 'react-docgen-typescript'
    },
    webpackFinal: async (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    '@emotion/core': toPath('node_modules/@emotion/react'),
                    'emotion-theming': toPath('node_modules/@emotion/react'),
                },
            },
        };
    },
};
