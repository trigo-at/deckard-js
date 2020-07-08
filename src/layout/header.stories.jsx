/* eslint-disable no-console */
import React from 'react';
import Header from './header';

export const DefaultStory = () => {
    return (
        <Header
            onLogout={(event) => console.log('logged out:', event)}
            userName="Max Mustermann"
            onSearch={(searchTerm) => console.log(searchTerm)}
        />
    );
};

DefaultStory.story = {
    name: 'default',
};

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

LoadingStory.story = {
    name: 'loading',
};

export default {
    title: 'Components|Header',
    component: Header,
};
