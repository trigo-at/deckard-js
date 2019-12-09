/* eslint-disable no-console */
import React from 'react';
import PageSection from './page-section';
import ProviderDecorator from '../provider-decorator';

export const DefaultStory = () => (
    <PageSection title="common.title">
        <div>asdfasdf</div>
    </PageSection>
);

DefaultStory.story = {
    name: 'default',
};

export const IsPrimaryStory = () => (
    <PageSection title="common.title" isPrimary>
        <div>asdfasdf</div>
    </PageSection>
);

IsPrimaryStory.story = {
    name: 'is-primary',
};

export const WithActionsStory = () => (
    <PageSection title="common.title" actions={<div>actions</div>}>
        <div>asdfasdf</div>
    </PageSection>
);

WithActionsStory.story = {
    name: 'with-actions',
};

export default {
    title: 'Patterns|PageSection',
    component: PageSection,
    decorators: [ProviderDecorator],
};
