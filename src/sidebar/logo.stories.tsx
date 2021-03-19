/* eslint-disable import/no-unresolved */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Box} from '@chakra-ui/react';
import {Logo, LogoProps} from './logo';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Navigation/Logo',
    component: Logo,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<LogoProps> = (args) => (
    <Box p={6}>
        <Logo src="/img/TRIGO-logo-human-rgb.png" {...args} />
    </Box>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';
