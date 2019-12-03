import React from 'react';
import ProviderDecorator from './provider-decorator';

export const PatternsStory = () => <div />;

PatternsStory.story = {
    name: 'Patterns',
};

export const PagesStory = () => <div />;

PagesStory.story = {
    name: 'Pages',
};

export default {
    title: 'Patterns',
    decorators: [ProviderDecorator],
};
