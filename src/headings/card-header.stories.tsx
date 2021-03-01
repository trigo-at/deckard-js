/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {ButtonGroup, Switch} from '@chakra-ui/react';
import {CardHeader, CardHeaderProps} from './card-header';
import ProviderDecorator from '../provider-decorator';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

export default {
    title: 'Headings/CardHeader',
    component: CardHeader,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<CardHeaderProps> = (args) => (
    <CardHeader
        {...args}
        heading="Job Postings"
        description="Checkout and Payments Team"
    />
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';

export const ActionsStory = Template.bind({});
ActionsStory.args = {
    actions: (
        <ButtonGroup size="sm" spacing="3">
            <SecondaryButton>Share</SecondaryButton>
            <PrimaryButton>Create</PrimaryButton>
        </ButtonGroup>
    ),
};
ActionsStory.storyName = 'Actions';

export const SwitchStory = Template.bind({});
SwitchStory.args = {
    actions: <Switch size="lg" />,
};
SwitchStory.storyName = 'Switch';
