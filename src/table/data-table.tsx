/* eslint-disable react/no-array-index-key */
import React, {useState, useEffect, FC, ReactElement} from 'react';
import {FormattedMessage} from 'react-intl';
import TertiaryLink from '../components/tertiary-link';
import Table from './table';
import TableHeader from './table-header';
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
            <TertiaryLink to={column.link} isExternal={column.isExternal}>
                {column.format ? (
                    <FormattedMessage id={`${column.format}.${column.value}`} />
                ) : (
                    column.value
                )}
            </TertiaryLink>
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
            <thead>
                <TableRow>
                    {columns.map((column) => (
                        <TableHeader key={column}>
                            <CellContent>
                                <FormattedMessage id={`field.${column}`} />
                            </CellContent>
                        </TableHeader>
                    ))}
                </TableRow>
            </thead>
            <tbody>
                {items.map((item) => (
                    <TableRow
                        key={item.id}
                        entryAnimation={
                            initialIds.length && !initialIds.includes(item.id)
                                ? animateNewRow
                                : false
                        }>
                        {item.columns.map((column, idx) => (
                            <TableCell key={idx}>
                                <DataCell column={column} />
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
};

export default DataTable;
