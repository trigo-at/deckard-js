import React from 'react';
import {MenuDivider} from '@chakra-ui/core';
import Menu from './menu';
import MenuButton from './menu-button';
import MenuList from './menu-list';
import MenuItem from './menu-item';
import MenuItemLink from './menu-item-link';
import ProviderDecorator from '../provider-decorator';

export const DefaultStory = () => (
    <div className="flex justify-center space-y-4 h-48">
        <Menu>
            <MenuButton rightIcon="chevron-down">Show more options</MenuButton>
            <MenuList>
                <MenuItem onClick={() => console.log('hallo')}>
                    Im a MenuItem
                </MenuItem>
                <MenuItemLink isExternal to="https://www.google.com/">
                    Im a MenuItemLink
                </MenuItemLink>
            </MenuList>
        </Menu>
    </div>
);

DefaultStory.storyName = 'default';

export const OtherStory = () => (
    <div className="flex justify-center space-y-4 h-48">
        <Menu>
            <MenuButton rightIcon="chevron-down" variant="primary">
                Show more options
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => console.log('hallo')}>
                    Im a MenuButton
                </MenuItem>
                <MenuItemLink isExternal to="https://www.google.com/">
                    Im a MenuItemLink
                </MenuItemLink>
            </MenuList>
        </Menu>
    </div>
);

OtherStory.storyName = 'other';

export const WithDivider = () => (
    <div className="flex justify-center space-y-4 h-48">
        <Menu>
            <MenuButton rightIcon="chevron-down" variant="primary">
                Show more options
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => console.log('hallo')}>
                    Im a MenuButton
                </MenuItem>
                <MenuDivider />
                <MenuItemLink isExternal to="https://www.google.com/">
                    Im a MenuItemLink
                </MenuItemLink>
            </MenuList>
        </Menu>
    </div>
);

WithDivider.storyName = 'divider';

export default {
    title: 'Components/Menu',
    component: Menu,
    decorators: [ProviderDecorator],
};
