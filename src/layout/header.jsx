import React, {useCallback, useState, useEffect} from 'react';
import {string, func} from 'prop-types';
import useDebounce from './use-debounce';
import HeaderOrganism from './header-organism';

const Header = ({
    userName,
    avatarSrc,
    useSearch,
    onLogout,
    searchResultRenderer,
}) => {
    const [filter, setFilter] = useState('');
    const [search, {loading, result}] = useSearch();

    const debouncedsFilter = useDebounce(filter, 300);

    useEffect(() => {
        if (debouncedsFilter && debouncedsFilter.length >= 3) {
            search(debouncedsFilter);
        }
    }, [debouncedsFilter]);

    const handleFilterChange = useCallback(e => {
        setFilter(e.target.value);
    }, []);

    const handleReset = useCallback(() => {
        setFilter('');
    }, []);

    return (
        <HeaderOrganism
            userName={userName}
            avatarSrc={avatarSrc}
            searchResult={result}
            searchResultRenderer={searchResultRenderer}
            loading={loading}
            filter={filter}
            onFilterChange={handleFilterChange}
            onReset={handleReset}
            onLogout={onLogout}
        />
    );
};

Header.propTypes = {
    userName: string,
    avatarSrc: string,
    useSearch: func.isRequired,
    searchResultRenderer: func.isRequired,
    onLogout: func,
};

Header.defaultProps = {
    userName: undefined,
    avatarSrc: undefined,
    onLogout: undefined,
};

export default Header;
