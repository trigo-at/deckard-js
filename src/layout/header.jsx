import React from 'react';
import {string, func, node, bool} from 'prop-types';
import {Flex, Box} from '@chakra-ui/core';
import SearchBox from './search-box';
import UserMenu from './user-menu';

const Header = ({userName, onSearch, onLogout, children, loading}) => {
    return (
        <Flex alignItems="center" justifyContent="space-between" bg="gray.50">
            <Box flexGrow="1" px={6}>
                {onSearch && (
                    <SearchBox loading={loading} onSearch={onSearch} />
                )}
            </Box>
            <Flex
                px={6}
                flexGrow="1"
                justifyContent="flex-end"
                alignItems="center">
                {children && <Box mr={2}>{children}</Box>}
                <UserMenu userName={userName} onLogout={onLogout} />
            </Flex>
        </Flex>
    );
};

Header.propTypes = {
    children: node,
    userName: string,
    onSearch: func,
    onLogout: func,
    loading: bool,
};

Header.defaultProps = {
    children: undefined,
    userName: undefined,
    onSearch: undefined,
    onLogout: undefined,
    loading: undefined,
};

export default Header;
