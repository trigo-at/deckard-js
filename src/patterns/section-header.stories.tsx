/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {SectionHeader, SectionHeaderProps} from './section-header';
import ProviderDecorator from '../provider-decorator';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

export default {
    title: 'Headings/SectionHeader',
    component: SectionHeader,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<SectionHeaderProps> = (args) => (
    <SectionHeader
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
        <>
            <SecondaryButton>Share</SecondaryButton>
            <PrimaryButton>Create</PrimaryButton>
        </>
    ),
};
ActionsStory.storyName = 'Actions';
