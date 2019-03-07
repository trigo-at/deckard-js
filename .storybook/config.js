import React from 'react';
import {configure, addParameters, addDecorator} from '@storybook/react';
import {create} from '@storybook/theming';
import {withInfo} from '@storybook/addon-info';
import ThemeProvider from '../src/ThemeProvider';
import Box from '../src/Box';

import logo from '../src/logo.png';

addParameters({
    options: {
        theme: create({
            base: 'light',
            brandTitle: 'trigo Design System',
            brandUrl: 'https://www.trigo.at',
            brandImage: logo,
        }),
    },
});

addDecorator(withInfo);
addDecorator(story => (
    <ThemeProvider>
        <Box p={3}>{story()}</Box>
    </ThemeProvider>
));

// automatically import all files ending in *.stories.jsx
const req = require.context('../stories', true, /.stories.jsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
