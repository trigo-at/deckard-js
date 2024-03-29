/* eslint-disable no-console */
import React from 'react';
import SearchBox from './search-box';
import ProviderDecorator from '../provider-decorator';

export const SearchBoxStory = () => (
    <SearchBox onSearch={(searchterm) => console.log(searchterm)} />
);

SearchBoxStory.storyName = 'default';
export const SearchBoxStory2 = () => (
    <SearchBox onSearch={(searchterm) => console.log(searchterm)} />
);

SearchBoxStory2.storyName = 'loading';

export default {
    title: 'Components/SearchBox',
    component: SearchBox,
    decorators: [ProviderDecorator],
};
