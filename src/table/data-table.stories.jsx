/* eslint-disable no-console */
import React, {useState} from 'react';
import Chance from 'chance';
import {Heading, ButtonGroup} from '@chakra-ui/core';
import DataTable from './data-table';
import ViewSection from '../patterns/view-section';
import SecondaryButton from '../components/secondary-button';

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

const getTableRowData = () => ({
    id: chance.string({length: 20}),
    columns: [
        {value: chance.name()},
        {value: chance.name()},
        {value: chance.name()},
    ],
});

export const DataTableStory4 = () => {
    const [items, setItems] = useState([
        getTableRowData(),
        getTableRowData(),
        getTableRowData(),
    ]);

    const onAddItem = () => {
        setItems((prevItems) => [getTableRowData(), ...prevItems]);
    };

    const onRemoveItem = () => {
        setItems((prevItems) => {
            const [, ...others] = prevItems;
            return others;
        });
    };

    return (
        <ViewSection
            actions={
                <ButtonGroup>
                    <SecondaryButton onClick={onAddItem}>
                        add one
                    </SecondaryButton>
                    <SecondaryButton onClick={onRemoveItem}>
                        remove one
                    </SecondaryButton>
                </ButtonGroup>
            }>
            <DataTable
                animateNewRow
                items={items}
                columns={['col1', 'col2', 'col3']}
            />
        </ViewSection>
    );
};

DataTableStory4.story = {
    name: 'Animated TableRow',
};

export default {
    title: 'Components|DataTable',
    component: DataTable,
};
