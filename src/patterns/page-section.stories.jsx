/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import Chance from 'chance';
import {Button, Stack, List, ListItem} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import {Link} from '@reach/router';
import LinkTo from '@storybook/addon-links/dist/react';
import PageSection from './page-section';
import ViewSection from './view-section';
import DataList from './data-list';
import toDateString from '../to-date-string';
import TrigoStoryWrapper from '../../.storybook/trigo-story-wrapper';
import PrimaryButton from '../components/primary-button';
import SecondaryButton from '../components/secondary-button';
import TertiaryButton from '../components/tertiary-button';
import DataTable from '../table/data-table';
import {InlineCode} from '../../.storybook/code';

const chance = new Chance();

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

export const Description = () => (
    <TrigoStoryWrapper>
        <PageSection title="common.pagesection.title">
            A <InlineCode>PageSection</InlineCode> is the main Entrypoint to any
            client-side-route. It typically renders one or more{' '}
            <InlineCode>ViewSection</InlineCode> Components
            <List m={5} styleType="disc">
                <ListItem>
                    <LinkTo story="simple-page-section">
                        Simple PageSection Example
                    </LinkTo>
                </ListItem>
                <ListItem>
                    <LinkTo story="primary-page-section">
                        Primary PageSection Example
                    </LinkTo>
                </ListItem>
                <ListItem>
                    <LinkTo story="page-section-with-actions">
                        PageSection Example with Actions
                    </LinkTo>
                </ListItem>
            </List>
        </PageSection>
    </TrigoStoryWrapper>
);

Description.story = {
    name: 'description',
};

export const SimplePageSection = () => (
    <TrigoStoryWrapper>
        <PageSection title="common.pagesection.title">
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
        </PageSection>
    </TrigoStoryWrapper>
);

SimplePageSection.story = {
    name: 'simple-page-section',
};

export const PrimaryPageSection = () => (
    <TrigoStoryWrapper>
        <PageSection title="common.pagesection.title" isPrimary>
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
        </PageSection>
    </TrigoStoryWrapper>
);

PrimaryPageSection.story = {
    name: 'primary-page-section',
};

export const PageSectionWithActions = () => (
    <TrigoStoryWrapper>
        <PageSection
            title="common.pagesection.title"
            isPrimary
            actions={
                <Stack isInline>
                    <TertiaryButton>Tertiary</TertiaryButton>
                    <SecondaryButton>Secondary</SecondaryButton>
                    <PrimaryButton>Primary</PrimaryButton>
                </Stack>
            }>
            <ViewSection title="common.viewsection.title">
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
        </PageSection>
    </TrigoStoryWrapper>
);

PageSectionWithActions.story = {
    name: 'page-section-with-actions',
};

export default {
    title: 'Patterns|PageSection',
    component: PageSection,
};
