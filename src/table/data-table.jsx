import React from 'react';
import {arrayOf, shape, string, any, node} from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Link} from '@reach/router';
import {Link as ChakraLink} from '@chakra-ui/core';
import Table from './table';
import TableHeader from './table-header';
import TableRow from './table-row';
import TableCell from './table-cell';
import CellContent from './cell-content';

const DataCell = ({column}) => {
    if (column.link) {
        return (
            <ChakraLink as={Link} to={column.link}>
                {column.format ? (
                    <FormattedMessage id={`${column.format}.${column.value}`} />
                ) : (
                    column.value
                )}
            </ChakraLink>
        );
    }
    if (column.format) {
        return (
            <CellContent>
                <FormattedMessage id={`${column.format}.${column.value}`} />
            </CellContent>
        );
    }
    if (column.Component) {
        return (
            <CellContent>
                <column.Component>{column.value}</column.Component>
            </CellContent>
        );
    }
    return <CellContent>{column.value}</CellContent>;
};

DataCell.propTypes = {
    column: shape({
        value: any,
        link: string,
        format: string,
        Component: node,
    }).isRequired,
};

const DataTable = ({columns, items}) => {
    return (
        <Table>
            <thead>
                <TableRow>
                    {columns.map(column => (
                        <TableHeader key={column}>
                            <CellContent>
                                <FormattedMessage id={`field.${column}`} />
                            </CellContent>
                        </TableHeader>
                    ))}
                </TableRow>
            </thead>
            <tbody>
                {items.map(item => (
                    <TableRow key={item.id}>
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

DataTable.propTypes = {
    columns: arrayOf(string),
    items: arrayOf(
        shape({
            id: string.isRequired,
            columns: arrayOf(
                shape({
                    value: any,
                    link: string,
                    format: string,
                })
            ).isRequired,
        })
    ),
};

DataTable.defaultProps = {
    columns: [],
    items: [],
};

export default DataTable;
