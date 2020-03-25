/* eslint-disable no-console */
import React from 'react';
import Chance from 'chance';

import {Heading} from '@chakra-ui/core';
import ProviderDecorator from '../provider-decorator';
import DataTable from './data-table';

const chance = new Chance();

/*  You have to choose beetwen link or render your values. 
    Chakra UI can't handle both features simultaneously. */

export const DataTableStory = () => (
    <DataTable
        items={[
            {
                id: chance.string({length: 20}),
                columns: [
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                    },
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                    },
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                    },
                ],
            },
            {
                id: chance.string({length: 20}),
                columns: [
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                    },
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                    },
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                    },
                ],
            },
        ]}
        columns={['col1', 'col2', 'col3']}
    />
);

DataTableStory.story = {
    name: 'with-links',
};

export const DataTableStory2 = () => (
    <DataTable
        items={[
            {
                id: chance.string({length: 20}),
                columns: [
                    {
                        value: chance.name(),
                        render: (value) => <Heading>{value}</Heading>,
                    },
                    {
                        value: chance.name(),
                        render: (value) => <Heading>{value}</Heading>,
                    },
                    {
                        value: chance.name(),
                        render: (value) => <Heading>{value}</Heading>,
                    },
                ],
            },
            {
                id: chance.string({length: 20}),
                columns: [
                    {
                        value: chance.name(),
                        render: (value) => <Heading>{value}</Heading>,
                    },
                    {
                        value: chance.name(),
                        render: (value) => <Heading>{value}</Heading>,
                    },
                    {
                        value: chance.name(),
                        render: (value) => <Heading>{value}</Heading>,
                    },
                ],
            },
        ]}
        columns={['col1', 'col2', 'col3']}
    />
);

DataTableStory2.story = {
    name: 'Components holding value',
};

export const DataTableStory3 = () => (
    <DataTable
        items={[
            {
                id: chance.string({length: 20}),
                columns: [
                    {
                        value: chance.name(),
                    },
                ],
            },
            {
                id: chance.string({length: 20}),
                columns: [
                    {
                        value: chance.name(),
                    },
                ],
            },
            {
                id: chance.string({length: 20}),
                columns: [
                    {
                        value: chance.name(),
                    },
                    {
                        value: chance.name(),
                    },
                    {
                        value: chance.name(),
                    },
                    {
                        value: chance.name(),
                    },
                ],
            },
        ]}
        columns={['col1', 'col1']}
    />
);

DataTableStory3.story = {
    name: 'wrong column amount',
};

export default {
    title: 'Components|DataTable',
    component: DataTable,
    decorators: [ProviderDecorator],
};
