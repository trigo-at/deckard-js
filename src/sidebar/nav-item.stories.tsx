/* eslint-disable import/no-unresolved */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Box} from '@chakra-ui/react';
import {NavItem, NavItemProps} from './nav-item';
import ProviderDecorator from '../provider-decorator';
import OutlineHome from '../icons/outline-home';

export default {
    title: 'Navigation/NavItem',
    component: NavItem,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<NavItemProps> = (args) => (
    <Box p={6} w={64}>
        <NavItem
            {...args}
            icon={<OutlineHome />}
            href="https://trigo.at"
            badge="4"
            isExternal>
            Projects
        </NavItem>
    </Box>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';
