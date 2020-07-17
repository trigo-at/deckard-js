/* eslint-disable react/prop-types */
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
                'common.pagesection.title': 'Pagesection',
                'common.viewsection.title': 'Viewsection',
                'common.formsection.title': 'FormSection',
                'common.meta': 'Metadaten',
                'common.actions.showDetails': 'Show Details',
                'common.next': 'OK',
                'field.createdAt': 'created am',
                'field.createdBy': 'created von',
                'field.updatedAt': 'modified am',
                'field.updatedBy': 'modified von',
                'field.name': 'Name',
                'field.email': 'E-Mail',
                'field.website': 'Website',
                'field.customerNumber': 'Customernumber',
                'field.birthday': 'Birthday',
                'field.skillLevel': 'Skilllevel',
                'field.link': 'Link',
                'field.externalLink': 'External Link',
                'field.action': 'Action',
                'validation.required': 'This field is required',
            }}>
            {story()}
        </IntlProvider>
    </ThemeProvider>
);
