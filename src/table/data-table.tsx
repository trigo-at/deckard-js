/* eslint-disable react/no-array-index-key */
import React, {useState, useEffect, FC, ReactElement} from 'react';
import {FormattedMessage} from 'react-intl';
import TableLink from './table-link';
import Table from './table';
import TableHead from './table-head';
import TableHeaderCell from './table-header-cell';
import TableBody from './table-body';
import TableRow from './table-row';
import TableCell from './table-cell';
import CellContent from './cell-content';

type Column = {
    value?: any;
    link?: string;
    isExternal?: boolean;
    format?: string;
    Component?: React.FC<any>;
    render?: (value: string) => ReactElement;
};

type DataCellProps = {
    column: Column;
};

const DataCell: FC<DataCellProps> = ({column}: DataCellProps) => {
    if (column.render) {
        return column.render(column.value);
    }
    if (column.Component) {
        return (
            <CellContent>
                <column.Component>{column.value}</column.Component>
            </CellContent>
        );
    }
    if (column.link) {
        return (
            <TableLink to={column.link} isExternal={column.isExternal}>
                {column.format ? (
                    <FormattedMessage id={`${column.format}.${column.value}`} />
                ) : (
                    column.value
                )}
            </TableLink>
        );
    }
    if (column.format) {
        return (
            <CellContent>
                <FormattedMessage id={`${column.format}.${column.value}`} />
            </CellContent>
        );
    }
    return <CellContent>{column.value}</CellContent>;
};

type DataTableProps = {
    animateNewRow?: boolean;
    columns: Array<string>;
    items: Array<{
        id: string;
        columns: Column[];
    }>;
};

const DataTable: FC<DataTableProps> = ({
    columns,
    items,
    animateNewRow,
}: DataTableProps) => {
    const [initialIds, setInitialIds] = useState<Array<string>>([]);

    useEffect(() => {
        if (Array.isArray(items)) setInitialIds(items.map((item) => item.id));
    }, []);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableHeaderCell key={column}>
                            <FormattedMessage id={`field.${column}`} />
                        </TableHeaderCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((item, idx) => (
                    <TableRow
                        key={item.id}
                        stripedType={(idx + 1) % 2 === 0 ? 'even' : 'odd'}
                        entryAnimation={
                            initialIds.length && !initialIds.includes(item.id)
                                ? animateNewRow
                                : false
                        }>
                        {item.columns.map((column, colIdx) => (
                            <TableCell key={colIdx}>
                                <DataCell column={column} />
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DataTable;
