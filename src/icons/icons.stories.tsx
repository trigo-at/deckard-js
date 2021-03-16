/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Box} from '@chakra-ui/react';
import {CircleIcon} from './circle-icon';
import {CheckCircleIcon} from './check-circle-icon';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Icons',
    component: CircleIcon,
    decorators: [ProviderDecorator],
} as Meta;

const Template = () => (
    <Box bg="gray.100" p={10}>
        <Box as="span" bg="white">
            <CircleIcon />
        </Box>

        <Box ml={4} as="span" bg="white">
            <CheckCircleIcon />
        </Box>
    </Box>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';
