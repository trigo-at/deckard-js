import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import {injectGlobal} from 'styled-components';
import ThemeProvider from '../src/ThemeProvider';
import Box from '../src/atoms/Box';

setOptions({
    name: 'trigo Design System',
    url: 'https://www.trigo.at',
});

// eslint-disable-next-line
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:400,700');
`;

addDecorator(story => <ThemeProvider><Box p={3}>{story()}</Box></ThemeProvider>);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.jsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
