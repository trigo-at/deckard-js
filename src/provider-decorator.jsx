import React from 'react';
import {IntlProvider} from 'react-intl';
import ThemeProvider from './theme-provider';

export default story => (
    <ThemeProvider>
        <IntlProvider locale="de" messages={{}}>
            {story()}
        </IntlProvider>
    </ThemeProvider>
);

// Disables react-intl console errors for missing translations:
// eslint-disable-next-line
const consoleError = console.error.bind(console);
// eslint-disable-next-line
console.error = (message, ...args) => {
    if (typeof message === 'string' && message.startsWith('[React Intl]')) {
        return;
    }
    consoleError(message, ...args);
};
