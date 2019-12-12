import React from 'react';
import {string, func} from 'prop-types';
import {Flex, Box, Avatar} from '@chakra-ui/core';
import SearchBox from './search-box';
import UserMenu from './user-menu';

const Header = ({userName, avatarSrc, onSearch, onLogout}) => {
    return (
        <Flex alignItems="center" justifyContent="space-between" bg="gray.50">
            <Box flexGrow="1" px={6}>
                {onSearch && <SearchBox onSearch={onSearch} />}
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

Header.propTypes = {
    userName: string,
    avatarSrc: string,
    onSearch: func,
    onLogout: func,
};

Header.defaultProps = {
    userName: undefined,
    avatarSrc: undefined,
    onSearch: undefined,
    onLogout: undefined,
};

export default Header;
