/* eslint-disable no-nested-ternary */
import React, {useMemo, FC} from 'react';
import {Thead, Tbody, Tr, Th, Td, chakra} from '@chakra-ui/react';
import {useTable, useSortBy, Column} from 'react-table';
import SortDescending from '../icons/sort-descending';
import SortAscending from '../icons/sort-ascending';
import Table from './table';

export type DataTableProps = {
    columns: Array<Column>;
    data: Array<any>;
};

export const DataTable: FC<DataTableProps> = ({columns, data}) => {
    const memoizedData = useMemo(() => data, [data]);
    const memoizedColumns = useMemo(() => columns, [columns]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns: memoizedColumns, data: memoizedData}, useSortBy);

    return (
        <Table {...getTableProps()}>
            <Thead>
                {headerGroups.map((headerGroup) => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <Th
                                {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                )}
                                isNumeric={column.isNumeric}>
                                {column.render('Header')}
                                <chakra.span pl="4">
                                    {column.isSorted ? (
                                        column.isSortedDesc ? (
                                            <SortDescending aria-label="sorted descending" />
                                        ) : (
                                            <SortAscending aria-label="sorted ascending" />
                                        )
                                    ) : null}
                                </chakra.span>
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <Tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <Td
                                    {...cell.getCellProps()}
                                    isNumeric={cell.column.isNumeric}>
                                    {cell.render('Cell')}
                                </Td>
                            ))}
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
};

export default DataTable;
