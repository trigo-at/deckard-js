module.exports = {
    stories: ['../src/**/*.stories.tsx', '../src/**/*.stories.jsx'],
    addons: [
      '@storybook/addon-actions',
      '@storybook/addon-links',
      '@storybook/addon-a11y',
      '@storybook/addon-docs',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
            },
        });

        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                  loader: "postcss-loader",
                  options: {
                    ident: "postcss",
                    plugins: [
                      require("postcss-import"),
                      require("tailwindcss"),
                      require("autoprefixer")
                    ]
                  }
                }
              ],
        });

        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};