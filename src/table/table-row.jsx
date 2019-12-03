import React from 'react';
import {node} from 'prop-types';
import {Box} from '@chakra-ui/core';

const TableRow = ({children}) => <Box as="tr">{children}</Box>;

TableRow.propTypes = {
    children: node,
};
TableRow.defaultProps = {
    children: undefined,
};

export default TableRow;
