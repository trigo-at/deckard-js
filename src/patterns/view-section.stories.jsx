/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import Chance from 'chance';
import {Box, Stack, Button, ListItem, List} from '@chakra-ui/core';
import {Link} from '@reach/router';
import LinkTo from '@storybook/addon-links/react';
import {FormattedMessage} from 'react-intl';
import ViewSection from './view-section';
import DataList from './data-list';
import toDateString from '../to-date-string';
import SecondaryButton from '../components/secondary-button';
import PrimaryButton from '../components/primary-button';
import TertiaryButton from '../components/tertiary-button';
import MetaViewSectionComponent from './meta-view-section';
import DataTable from '../table/data-table';
import TrigoStoryWrapper from '../../.storybook/trigo-story-wrapper';
import {InlineCode} from '../../.storybook/code';

const chance = new Chance();

export const Description = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            A <InlineCode>ViewSection</InlineCode> is used to group relevant
            information. Typically it is used to render a{' '}
            <InlineCode>DataList</InlineCode> or{' '}
            <InlineCode>DataTable</InlineCode> Component. Some examples can be
            found here:
            <List m={5} styleType="disc">
                <ListItem>
                    <LinkTo story="detail-view-section">
                        Simple DataList Example
                    </LinkTo>
                </ListItem>
                <ListItem>
                    <LinkTo story="detail-view-section-with-actions">
                        DataList Example with actions
                    </LinkTo>
                </ListItem>
                <ListItem>
                    <LinkTo story="detail-view-section-with-footer">
                        DataList Example with footer
                    </LinkTo>
                </ListItem>
                <ListItem>
                    <LinkTo story="list-view-section">
                        Simple DataTable Example
                    </LinkTo>
                </ListItem>
                <ListItem>
                    <LinkTo story="list-view-section-with-actions">
                        DataTable Example with actions
                    </LinkTo>
                </ListItem>
                <ListItem>
                    <LinkTo story="list-view-section-with-footer">
                        DataTable Example with footer
                    </LinkTo>
                </ListItem>
                <ListItem>
                    <LinkTo story="meta-view-section">
                        Example MetaViewSection
                    </LinkTo>
                </ListItem>
            </List>
        </Box>
    </TrigoStoryWrapper>
);

Description.story = {
    name: 'description',
};

export const DetailViewSection = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            <ViewSection title="common.viewsection.title">
                <DataList
                    values={[
                        {
                            field: 'name',
                            value: chance.name(),
                        },
                        {
                            field: 'customerNumber',
                            value: chance.integer({min: 100000, max: 99999999}),
                        },
                        {
                            field: 'birthday',
                            value: toDateString(chance.date().toISOString()),
                        },
                    ]}
                />
            </ViewSection>
        </Box>
    </TrigoStoryWrapper>
);

DetailViewSection.story = {
    name: 'detail-view-section',
};

export const DetailViewSectionWithActions = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            <ViewSection
                title="common.viewsection.title"
                actions={
                    <Stack isInline>
                        <PrimaryButton size="sm">Primary</PrimaryButton>
                        <SecondaryButton size="sm">Secondary</SecondaryButton>
                        <TertiaryButton size="sm">Tertiary</TertiaryButton>
                    </Stack>
                }>
                <DataList
                    values={[
                        {
                            field: 'name',
                            value: chance.name(),
                        },
                        {
                            field: 'customerNumber',
                            value: chance.integer({
                                min: 100000,
                                max: 99999999,
                            }),
                        },
                        {
                            field: 'birthday',
                            value: toDateString(chance.date().toISOString()),
                        },
                    ]}
                />
            </ViewSection>
        </Box>
    </TrigoStoryWrapper>
);

DetailViewSectionWithActions.story = {
    name: 'detail-view-section-with-actions',
};

export const DetailViewSectionWithFooter = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            <ViewSection
                title="common.viewsection.title"
                actions={
                    <Stack isInline>
                        <PrimaryButton size="sm">Primary</PrimaryButton>
                        <SecondaryButton size="sm">Secondary</SecondaryButton>
                        <TertiaryButton size="sm">Tertiary</TertiaryButton>
                    </Stack>
                }
                footer={
                    <Stack isInline>
                        <TertiaryButton size="sm">Action 1</TertiaryButton>
                        <TertiaryButton size="sm">Action 2</TertiaryButton>
                        <TertiaryButton size="sm">Action 3</TertiaryButton>
                    </Stack>
                }>
                <DataList
                    values={[
                        {
                            field: 'name',
                            value: chance.name(),
                        },
                        {
                            field: 'customerNumber',
                            value: chance.integer({
                                min: 100000,
                                max: 99999999,
                            }),
                        },
                        {
                            field: 'birthday',
                            value: toDateString(chance.date().toISOString()),
                        },
                    ]}
                />
            </ViewSection>
        </Box>
    </TrigoStoryWrapper>
);

DetailViewSectionWithFooter.story = {
    name: 'detail-view-section-with-footer',
};

const getColumnData = () => [
    {
        field: 'name',
        value: chance.name(),
    },
    {
        field: 'customerNumber',
        value: chance.integer({
            min: 100000,
            max: 99999999,
        }),
    },
    {
        field: 'birthday',
        value: toDateString(chance.date().toISOString()),
    },
    {
        value: chance.string(),
        render: () => (
            <Button size="sm" as={Link} to="/">
                <FormattedMessage id="common.actions.showDetails" />
            </Button>
        ),
    },
];

export const ListViewSection = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            <ViewSection title="common.viewsection.title">
                <DataTable
                    columns={['name', 'customerNumber', 'birthday', 'action']}
                    items={[
                        {
                            id: chance.string(),
                            columns: getColumnData(),
                        },
                        {
                            id: chance.string(),
                            columns: getColumnData(),
                        },
                        {
                            id: chance.string(),
                            columns: getColumnData(),
                        },
                    ]}
                />
            </ViewSection>
        </Box>
    </TrigoStoryWrapper>
);

ListViewSection.story = {
    name: 'list-view-section',
};

export const ListViewSectionWithActions = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            <ViewSection
                title="common.viewsection.title"
                actions={
                    <Stack isInline>
                        <PrimaryButton size="sm">Primary</PrimaryButton>
                        <SecondaryButton size="sm">Secondary</SecondaryButton>
                        <TertiaryButton size="sm">Tertiary</TertiaryButton>
                    </Stack>
                }>
                <DataTable
                    columns={['name', 'customerNumber', 'birthday', 'action']}
                    items={[
                        {
                            id: chance.string(),
                            columns: getColumnData(),
                        },
                        {
                            id: chance.string(),
                            columns: getColumnData(),
                        },
                        {
                            id: chance.string(),
                            columns: getColumnData(),
                        },
                    ]}
                />
            </ViewSection>
        </Box>
    </TrigoStoryWrapper>
);

ListViewSectionWithActions.story = {
    name: 'list-view-section-with-actions',
};

export const ListViewSectionWithFooter = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            <ViewSection
                title="common.viewsection.title"
                actions={
                    <Stack isInline>
                        <PrimaryButton size="sm">Primary</PrimaryButton>
                        <SecondaryButton size="sm">Secondary</SecondaryButton>
                        <TertiaryButton size="sm">Tertiary</TertiaryButton>
                    </Stack>
                }
                footer={
                    <Stack isInline>
                        <TertiaryButton size="sm">Action 1</TertiaryButton>
                        <TertiaryButton size="sm">Action 2</TertiaryButton>
                        <TertiaryButton size="sm">Action 3</TertiaryButton>
                    </Stack>
                }>
                <DataTable
                    columns={['name', 'customerNumber', 'birthday', 'action']}
                    items={[
                        {
                            id: chance.string(),
                            columns: getColumnData(),
                        },
                        {
                            id: chance.string(),
                            columns: getColumnData(),
                        },
                        {
                            id: chance.string(),
                            columns: getColumnData(),
                        },
                    ]}
                />
            </ViewSection>
        </Box>
    </TrigoStoryWrapper>
);

ListViewSectionWithFooter.story = {
    name: 'list-view-section-with-footer',
};

export const MetaViewSection = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            <MetaViewSectionComponent
                entity={{
                    createdAt: '2002-12-28',
                    createdBy: '2002-12-28',
                    updatedAt: '2002-12-28',
                    updatedBy: '2002-12-28',
                }}
            />
        </Box>
    </TrigoStoryWrapper>
);

MetaViewSection.story = {
    name: 'meta-view-section',
};

export default {
    title: 'Patterns|ViewSection',
    component: ViewSection,
};
