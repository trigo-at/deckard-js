import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import {withInfo} from '@storybook/addon-info';
// import ThemeProvider from '../src/ThemeProvider';
// import Box from '../src/Box';

import '../src/styles.css';

setOptions({
    name: 'trigo Design System',
    url: 'https://www.trigo.at',
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
});


addDecorator(withInfo);
addDecorator(story => <div className="font-sans p-6">{story()}</div>);

// automatically import all files ending in *.stories.jsx
const req = require.context('../stories', true, /.stories.jsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
