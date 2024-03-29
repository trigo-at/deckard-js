/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {PageHeader, PageHeaderProps} from './page-header';
import ProviderDecorator from '../provider-decorator';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';
import TertiaryButton from '../buttons/tertiary-button';
import LocationMarkerIcon from '../icons/location-marker-icon';
import CalendarIcon from '../icons/calendar-icon';
import PageHeaderMetaItem from './page-header-meta-item';

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

export const MetaStory = Template.bind({});
MetaStory.args = {
    actions: (
        <>
            <TertiaryButton>Publish</TertiaryButton>
            <SecondaryButton>Edit</SecondaryButton>
            <PrimaryButton>Publish</PrimaryButton>
        </>
    ),
    meta: (
        <>
            <PageHeaderMetaItem icon={<LocationMarkerIcon />}>
                Heiligenstädter Straße 28/3, 1190 Wien
            </PageHeaderMetaItem>
            <PageHeaderMetaItem icon={<CalendarIcon />}>
                Full-time
            </PageHeaderMetaItem>
        </>
    ),
};
MetaStory.storyName = 'Meta';
