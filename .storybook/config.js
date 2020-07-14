import {configure, addDecorator, addParameters} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs} from '@storybook/addon-knobs';

import '../src/index.css';

const headers = [
    'Documentation',
    'Patterns',
    'Components',
    'Experimental',
];

const storySort = (a, b) => {
    const aHeader = a[1].kind.substr(0, a[1].kind.indexOf('|'));
    const bHeader = b[1].kind.substr(0, b[1].kind.indexOf('|'));

    if (aHeader !== bHeader) {
        const aHeaderIndex = headers.findIndex(h => h === aHeader);
        const bHeaderIndex = headers.findIndex(h => h === bHeader);
        return aHeaderIndex - bHeaderIndex;
    }

    return 0;
};

addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({options: {storySort}});

configure(require.context('../src', true, /\.stories\.(jsx|tsx|mdx)$/), module);

