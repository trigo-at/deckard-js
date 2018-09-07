import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import {injectGlobal} from 'styled-components';
import ThemeProvider from '../src/ThemeProvider';
import Box from '../src/Box';

setOptions({
    name: 'trigo Design System',
    url: 'https://www.trigo.at',
});

addDecorator(story => <ThemeProvider><Box p={3}>{story()}</Box></ThemeProvider>);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.jsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
