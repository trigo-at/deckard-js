import React from 'react';
import {IntlProvider} from 'react-intl';
import ThemeProvider from './theme-provider';

export default (story) => (
    <ThemeProvider>
        <IntlProvider
            locale="de"
            messages={{
                'common.optional': 'optional',
                'string.translation1':
                    'Diplom-Tierarzt / Diplom-Tierärztin Mag. med. vet.',
                'fullpagealert.title': 'Bacon is life!',
                'fullpagealert.description':
                    'Bacon ipsum dolor amet tail venison hamburger buffalo. Pastrami brisket capicola, chislic beef shankle t-bone chuck boudin meatloaf pig turkey sirloin swine. Ham hock kevin shankle kielbasa landjaeger.',
                'common.pagesection.title': 'Pagesection Details',
                'common.viewsection.title': 'Viewsection Details',
                'common.meta': 'Metadaten',
                'common.actions.showDetails': 'Details einsehen',
                'field.createdAt': 'angelegt am',
                'field.createdBy': 'angelegt von',
                'field.updatedAt': 'bearbeitet am',
                'field.updatedBy': 'bearbeitet von',
                'field.name': 'Name',
                'field.customerNumber': 'Kundennummer',
                'field.birthday': 'Geburtstag',
                'field.action': 'Aktion',
            }}>
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
