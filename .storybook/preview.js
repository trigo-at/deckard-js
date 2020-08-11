import {addParameters} from '@storybook/react';

import '../src/index.css';

const headers = ['Documentation', 'Patterns', 'Components', 'Experimental'];

const storySort = (a, b) => {
    const aHeader = a[1].kind.substr(0, a[1].kind.indexOf('|'));
    const bHeader = b[1].kind.substr(0, b[1].kind.indexOf('|'));

    if (aHeader !== bHeader) {
        const aHeaderIndex = headers.findIndex((h) => h === aHeader);
        const bHeaderIndex = headers.findIndex((h) => h === bHeader);
        return aHeaderIndex - bHeaderIndex;
    }

    return 0;
};

export const parameters = {options: {storySort}};
