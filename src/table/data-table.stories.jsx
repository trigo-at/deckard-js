/* eslint-disable no-console */
import React from 'react';
import Chance from 'chance';

import {Button} from '@chakra-ui/core';
import ProviderDecorator from '../provider-decorator';
import DataTable from './data-table';

const chance = new Chance();

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
                        render: value => <Button>{value}</Button>,
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
                        render: value => <Button>{value}</Button>,
                    },
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                        render: value => <Button>{value}</Button>,
                    },
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                        render: value => <Button>{value}</Button>,
                    },
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                        render: value => <Button>{value}</Button>,
                    },
                ],
            },
        ]}
        columns={['spalte1', 'spalte2', 'spalte3', 'spalte4']}
    />
);

DataTableStory.story = {
    name: 'default', // links doesn't work here
};

export const DataTableStory2 = () => (
    <DataTable
        items={[
            {
                id: chance.string({length: 20}),
                columns: [
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                        render: value => <Button>{value}</Button>,
                    },
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                        render: value => <Button>{value}</Button>,
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
                        render: value => <Button>{value}</Button>,
                    },
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                        render: value => <Button>{value}</Button>,
                    },
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                        render: value => <Button>{value}</Button>,
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
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                    },
                ],
            },
        ]}
        columns={['spalte1', 'spalte2', 'spalte3', 'spalte4']}
    />
);

DataTableStory2.story = {
    name: 'mixed',
};

export const DataTableStory3 = () => (
    <DataTable
        items={[
            {
                id: chance.string({length: 20}),
                columns: [
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                        render: value => <Button>{value}</Button>,
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
                        render: value => <Button>{value}</Button>,
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
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                    },
                ],
            },
        ]}
        columns={['spalte1', 'spalte2']}
    />
);

DataTableStory3.story = {
    name: 'wrong column amount',
};

export const DataTableStory4 = () => (
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
                    {
                        value: chance.name(),
                        link: 'https://chakra-ui.com/getting-started',
                        isExternal: true,
                    },
                ],
            },
        ]}
        columns={['spalte1', 'spalte2', 'spalte3', 'spalte4']}
    />
);

DataTableStory4.story = {
    name: 'long list without render component', // links work here
};

export default {
    title: 'Components|DataTable',
    component: DataTable,
    decorators: [ProviderDecorator],
};
