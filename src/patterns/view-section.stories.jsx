/* eslint-disable no-console */
import React from 'react';
import Chance from 'chance';
import {Box, Stack, Button} from '@chakra-ui/core';
import {Link} from '@reach/router';
import {FormattedMessage} from 'react-intl';
import ViewSection from './view-section';
import DataList from './data-list';
import toDateString from '../to-date-string';
import ProviderDecorator from '../provider-decorator';
import SecondaryButton from '../components/secondary-button';
import PrimaryButton from '../components/primary-button';
import TertiaryButton from '../components/tertiary-button';
import MetaViewSection from './meta-view-section';
import DataTable from '../table/data-table';

const chance = new Chance();

export const DetailViewSection = () => (
    <Box bg="gray.200" p={5} w="100vw" h="100vh">
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
    </Box>
);

DetailViewSection.story = {
    name: 'Detail Viewsection',
};

export const DetailViewSectionWithActions = () => (
    <Box bg="gray.200" p={5} w="100vw" h="100vh">
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
    </Box>
);

DetailViewSectionWithActions.story = {
    name: 'Detail Viewsection with Actions',
};

export const DetailViewSectionWithFooter = () => (
    <Box bg="gray.200" p={5} w="100vw" h="100vh">
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
    </Box>
);

DetailViewSectionWithFooter.story = {
    name: 'Detail Viewsection with Footer',
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
    <Box bg="gray.200" p={5} w="100vw" h="100vh">
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
    </Box>
);

ListViewSection.story = {
    name: 'List Viewsection',
};

export const ListViewSectionWithActions = () => (
    <Box bg="gray.200" p={5} w="100vw" h="100vh">
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
    </Box>
);

ListViewSectionWithActions.story = {
    name: 'List Viewsection with Actions',
};

export const ListViewSectionWithFooter = () => (
    <Box bg="gray.200" p={5} w="100vw" h="100vh">
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
    </Box>
);

ListViewSectionWithFooter.story = {
    name: 'List Viewsection with Footer',
};

export const MetaViewSectionStory = () => (
    <Box bg="gray.200" p={5} w="100vw" h="100vh">
        <Box bg="white" p={5}>
            <MetaViewSection
                entity={{
                    createdAt: '2002-12-28',
                    createdBy: '2002-12-28',
                    updatedAt: '2002-12-28',
                    updatedBy: '2002-12-28',
                }}
            />
        </Box>
    </Box>
);

MetaViewSectionStory.story = {
    name: 'Meta Viewsection',
};

export default {
    title: 'Patterns|ViewSection',
    component: ViewSection,
    decorators: [ProviderDecorator],
};
