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
