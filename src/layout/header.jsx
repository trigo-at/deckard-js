import React from 'react';
import {string, func, node, bool} from 'prop-types';
import {Flex, Box} from '@chakra-ui/core';
import SearchBox from './search-box';
import UserMenu from './user-menu';

const Header = ({userName, onSearch, onLogout, children, isLoading}) => {
    return (
        <Flex
            flexShrink={0}
            bg="white"
            shadow="sm"
            height={16}
            position="relative"
            zIndex="docked">
            <Flex flex="1 1 0%" px={4} justifyContent="space-between">
                <Flex flex="1 1 0%">
                    {onSearch && (
                        <SearchBox isLoading={isLoading} onSearch={onSearch} />
                    )}
                </Flex>
                <Flex alignItems="center" ml={[4, 6]}>
                    <UserMenu userName={userName} onLogout={onLogout} />
                </Flex>
            </Flex>
        </Flex>
    );
};

Header.propTypes = {
    children: node,
    userName: string,
    onSearch: func,
    onLogout: func,
    isLoading: bool,
};

Header.defaultProps = {
    children: undefined,
    userName: undefined,
    onSearch: undefined,
    onLogout: undefined,
    isLoading: undefined,
};

export default Header;
