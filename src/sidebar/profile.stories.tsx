/* eslint-disable import/no-unresolved */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Box} from '@chakra-ui/react';
import {Profile, ProfileProps} from './profile';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Navigation/Profile',
    component: Profile,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<ProfileProps> = (args) => (
    <Box p={6}>
        <Profile
            {...args}
            href="https://trigo.at"
            isExternal
            username="Maxima Musterfrau"
            avatar="/img/TRIGO-logo-humanface-rgb.png"
        />
    </Box>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';
