import React from 'react';
import {string, bool, func, array} from 'prop-types';
import {Flex, Box, Avatar} from '@chakra-ui/core';
import SearchBox from './search-box';
import UserMenu from './user-menu';

const HeaderOrganism = ({
    userName,
    avatarSrc,
    searchResult,
    searchResultRenderer,
    loading,
    filter,
    onFilterChange,
    onReset,
    onLogout,
}) => {
    return (
        <Flex alignItems="center" justifyContent="space-between" bg="gray.50">
            <Box flexGrow="1" px={6}>
                <SearchBox
                    searchResult={searchResult}
                    searchResultRenderer={searchResultRenderer}
                    loading={loading}
                    filter={filter}
                    onFilterChange={onFilterChange}
                    onReset={onReset}
                />
            </Box>
            <Flex
                px={6}
                flexGrow="1"
                justifyContent="flex-end"
                alignItems="center">
                <Avatar mx={2} name={userName} src={avatarSrc} />
                <UserMenu userName={userName} onLogout={onLogout} />
            </Flex>
        </Flex>
    );
};

HeaderOrganism.propTypes = {
    userName: string,
    avatarSrc: string,
    searchResult: array,
    searchResultRenderer: func.isRequired,
    loading: bool,
    filter: string,
    onFilterChange: func,
    onReset: func,
    onLogout: func,
};

HeaderOrganism.defaultProps = {
    userName: undefined,
    avatarSrc: undefined,
    searchResult: [],
    loading: false,
    filter: '',
    onFilterChange: undefined,
    onReset: undefined,
    onLogout: undefined,
};

export default HeaderOrganism;
