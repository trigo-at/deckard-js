/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {PageHeader, PageHeaderProps} from './page-header';
import ProviderDecorator from '../provider-decorator';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

export default {
    title: 'Headings/PageHeader',
    component: PageHeader,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<PageHeaderProps> = (args) => (
    <PageHeader {...args} heading="Back End Developer" />
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';

export const ActionsStory = Template.bind({});
ActionsStory.args = {
    actions: (
        <>
            <SecondaryButton>Edit</SecondaryButton>
            <PrimaryButton>Publish</PrimaryButton>
        </>
    ),
};
ActionsStory.storyName = 'Actions';
