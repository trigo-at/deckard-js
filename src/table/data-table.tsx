/* eslint-disable no-nested-ternary */
import React, {useMemo, FC} from 'react';
import {Thead, Tbody, Tr, Th, Td, chakra, Table, Stack} from '@chakra-ui/react';
import {
    useTable,
    useSortBy,
    usePagination,
    Column,
    useGlobalFilter,
} from 'react-table';
import Pagination from './pagination';
import SortDescending from '../icons/sort-descending';
import SortAscending from '../icons/sort-ascending';
import GlobalFilterInput from './global-filter-input';

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
        prepareRow,
        // pagincation
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: {pageIndex, globalFilter},
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns: memoizedColumns,
            data: memoizedData,
            initialState: {pageIndex: 0, pageSize: 20},
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    return (
        <Stack spacing={8}>
            <GlobalFilterInput
                placeholder={`${preGlobalFilteredRows.length} Datensätze...`}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <Table
                variant="striped"
                colorScheme="gray"
                size="sm"
                {...getTableProps()}>
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
                    {page.map((row) => {
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
            <Pagination
                pageIndex={pageIndex}
                pageCount={pageCount}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                gotoPage={gotoPage}
                previousPage={previousPage}
                nextPage={nextPage}
            />
        </Stack>
    );
};

export default DataTable;
