import React from 'react';
import {string, func} from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/core';

const UserMenu = ({userName, onLogout}) => {
    if (!onLogout) {
        return <Text>{userName}</Text>;
    }

    return (
        <Menu>
            <MenuButton as={Button} variant="ghost" rightIcon="chevron-down">
                {userName}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={onLogout}>
                    <FormattedMessage id="common.logout" />
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

UserMenu.propTypes = {
    userName: string,
    onLogout: func,
};

UserMenu.defaultProps = {
    userName: undefined,
    onLogout: undefined,
};

export default UserMenu;
