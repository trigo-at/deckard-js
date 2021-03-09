/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Box} from '@chakra-ui/react';
import {ConfirmButton, ConfirmButtonProps} from './confirm-button';
import ProviderDecorator from '../provider-decorator';
import TrashIcon from '../icons/trash-icon';

export default {
    title: 'Pattern/ConfirmButton',
    component: ConfirmButton,
    decorators: [ProviderDecorator],
    argTypes: {onConfirm: {action: 'confirmed'}},
} as Meta;

export const Template: Story<ConfirmButtonProps> = (args) => (
    <Box bg="gray.50" p={40} h="full">
        <ConfirmButton
            {...args}
            confirmMessageId="common.actions.delete.confirmation.confirm"
            closeMessageId="common.actions.delete.confirmation.close"
            headerMessageId="asdfasdf"
            questionMessageId="asdfasdf"
            messageId="asdfasdf"
        />
    </Box>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';

export const DeleteStory = Template.bind({});
DeleteStory.args = {
    colorScheme: 'red',
    leftIcon: <TrashIcon />,
};
DeleteStory.storyName = 'Delete';
