import {configure} from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
    name: 'trigo Design System',
    url: 'https://www.trigo.at'
})

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.jsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
