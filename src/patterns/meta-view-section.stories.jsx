import React from 'react';
import MetaViewSection from './meta-view-section';
import ProviderDecorator from '../provider-decorator';

export const MetaViewSectionStory = () => (
    <MetaViewSection
        entity={{
            createdAt: '2002-12-28',
            createdBy: '2002-12-28',
            updatedAt: '2002-12-28',
            updatedBy: '2002-12-28',
        }}
    />
);

MetaViewSectionStory.story = {
    name: 'default',
};

export const MetaViewSectionStory2 = () => <MetaViewSection />;

MetaViewSectionStory2.story = {
    name: 'empty values',
};

export default {
    title: 'Patterns|MetaviewSection',
    component: MetaViewSection,
    decorators: [ProviderDecorator],
};
