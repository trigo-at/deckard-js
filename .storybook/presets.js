/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = [
    {
        name: '@storybook/preset-typescript',
        options: {
            tsDocgenLoaderOptions: {
                tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            },
            include: [path.resolve(__dirname, '../src')],
        },
    },
    '@storybook/addon-docs/preset',
];
