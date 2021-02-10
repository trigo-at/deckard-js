/* eslint-disable no-console */
import React, {useState} from 'react';
import Chance from 'chance';
import {Stack} from '@chakra-ui/react';
import DataTable from './data-table';
import ViewSection from '../patterns/view-section';
import TertiaryButton from '../components/tertiary-button';

const chance = new Chance();

const getTableRowData = () => ({
    id: chance.string({length: 20}),
    columns: [
        {value: chance.name()},
        {value: chance.email()},
        {value: chance.integer({min: 10000000, max: 99999999})},
    ],
});

export const DataTableWithEntryAnimation = () => {
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
                <Stack isInline spacing={2} shouldWrapChildren>
                    <TertiaryButton onClick={onAddItem} size="sm">
                        add one
                    </TertiaryButton>
                    <TertiaryButton onClick={onRemoveItem} size="sm">
                        remove one
                    </TertiaryButton>
                </Stack>
            }>
            <DataTable
                animateNewRow
                items={items}
                columns={['name', 'email', 'customerNumber']}
            />
        </ViewSection>
    );
};
