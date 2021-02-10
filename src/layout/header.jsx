import React from 'react';
import {string, func, node, bool} from 'prop-types';
import {Flex, Box} from '@chakra-ui/react';
import SearchBox from './search-box';
import UserMenu from './user-menu';

const Header = ({userName, onSearch, onLogout, children, isLoading}) => {
    return (
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex">
                    {onSearch && (
                        <SearchBox isLoading={isLoading} onSearch={onSearch} />
                    )}
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                    <UserMenu userName={userName} onLogout={onLogout} />
                </div>
            </div>
        </div>
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
