/* eslint-disable import/no-unresolved */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Box} from '@chakra-ui/react';
import {DataTable, DataTableProps} from './data-table';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Components/DataTable',
    component: DataTable,
    decorators: [ProviderDecorator],
} as Meta;

const data = [
    {
        fromUnit: 'inches',
        toUnit: 'millimetres (mm)',
        factor: 25.4,
    },
    {
        fromUnit: 'feet',
        toUnit: 'centimetres (cm)',
        factor: 30.48,
    },
    {
        fromUnit: 'yards',
        toUnit: 'metres (m)',
        factor: 0.91444,
    },
];

const columns = [
    {
        Header: 'To convert',
        accessor: 'fromUnit',
    },
    {
        Header: 'Into',
        accessor: 'toUnit',
    },
    {
        Header: 'Multiply by',
        accessor: 'factor',
        isNumeric: true,
    },
];

const Template: Story<DataTableProps> = (args) => (
    <Box p={6}>
        <DataTable {...args} />
    </Box>
);

export const BaseStory = Template.bind({});
BaseStory.args = {
    data,
    columns,
};
BaseStory.storyName = 'Base';
