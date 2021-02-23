/* eslint-disable import/no-unresolved */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Box} from '@chakra-ui/react';
import {SecondaryNavItem, SecondaryNavItemProps} from './secondary-nav-item';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Navigation/SecondaryNavItem',
    component: SecondaryNavItem,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<SecondaryNavItemProps> = (args) => (
    <Box p={6} w={64}>
        <SecondaryNavItem {...args} href="https://trigo.at" isExternal>
            Projects
        </SecondaryNavItem>
    </Box>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';
