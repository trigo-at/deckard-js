/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Box} from '@chakra-ui/react';
import {MetaViewSection, MetaViewSectionProps} from './meta-view-section';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Pattern/MetaViewSection',
    component: MetaViewSection,
    decorators: [ProviderDecorator],
    argTypes: {onConfirm: {action: 'confirmed'}},
} as Meta;

export const Template: Story<MetaViewSectionProps> = (args) => (
    <Box bg="gray.50" p={40} h="full">
        <MetaViewSection
            {...args}
            entity={{
                createdAt: '2021-03-03',
                createdBy: 'Mad Max',
                updatedAt: '2021-03-06',
                updatedBy: 'Gandalf',
            }}
        />
    </Box>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';
