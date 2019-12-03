import React, {useState} from 'react';
import ProviderDecorator from '../provider-decorator';
import HeaderOrgansim from './header-organism';

export const DefaultStory = () => {
    const [filter, setFilter] = useState('');
    const handleFilterChange = e => setFilter(e.target.value);
    const handleReset = () => setFilter('');
    return (
        <HeaderOrgansim
            userName="Max Mustermann"
            filter={filter}
            onFilterChange={handleFilterChange}
            onReset={handleReset}
        />
    );
};

DefaultStory.story = {
    name: 'default',
};

export const LoadingStory = () => {
    const [filter, setFilter] = useState('');
    const handleFilterChange = e => setFilter(e.target.value);
    const handleReset = () => setFilter('');
    return (
        <HeaderOrgansim
            userName="Max Mustermann"
            loading
            filter={filter}
            onFilterChange={handleFilterChange}
            onReset={handleReset}
        />
    );
};

LoadingStory.story = {
    name: 'loading',
};

export default {
    title: 'Organism|HeaderOrgansim',
    component: HeaderOrgansim,
    decorators: [ProviderDecorator],
};
