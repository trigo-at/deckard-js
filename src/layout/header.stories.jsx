/* eslint-disable no-console */
import React from 'react';
import Header from './header';
import ProviderDecorator from '../provider-decorator';

export const DefaultStory = () => {
    return (
        <Header
            onLogout={(event) => console.log('logged out:', event)}
            userName="Max Mustermann"
            onSearch={(searchTerm) => console.log(searchTerm)}
        />
    );
};

DefaultStory.storyName = 'default';

export const LoadingStory = () => {
    return (
        <Header
            onLogout={(event) => console.log('logged out:', event)}
            userName="Max Mustermann"
            isLoading
            onSearch={(searchTerm) => console.log(searchTerm)}
        />
    );
};

LoadingStory.storyName = 'loading';

export default {
    title: 'Components/Header',
    component: Header,
    decorators: [ProviderDecorator],
};
