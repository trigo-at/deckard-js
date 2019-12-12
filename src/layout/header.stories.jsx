/* eslint-disable no-console */
import React from 'react';
import ProviderDecorator from '../provider-decorator';
import Header from './header';

export const DefaultStory = () => {
    return (
        <Header
            userName="Max Mustermann"
            onSearch={searchTerm => console.log(searchTerm)}
        />
    );
};

DefaultStory.story = {
    name: 'default',
};

export const LoadingStory = () => {
    return (
        <Header
            userName="Max Mustermann"
            loading
            onSearch={searchTerm => console.log(searchTerm)}
        />
    );
};

LoadingStory.story = {
    name: 'loading',
};

export default {
    title: 'Components|Header',
    component: Header,
    decorators: [ProviderDecorator],
};
