import React from 'react';
import {Thead, Tr, Th, Tbody, Td} from '@chakra-ui/react';
import Table from './table';
import CellContent from './cell-content';
import SecondaryCellContent from './secondary-cell-content';
import ProviderDecorator from '../provider-decorator';

export const DefaultStory = () => (
    <Table>
        <Thead>
            <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                <Td>
                    <CellContent>inches</CellContent>
                    <SecondaryCellContent>asdfasdf</SecondaryCellContent>
                </Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
            </Tr>
        </Tbody>
    </Table>
);

DefaultStory.storyName = 'default';

export default {
    title: 'Components/Table',
    component: Table,
    decorators: [ProviderDecorator],
};
