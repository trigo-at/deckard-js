import React from 'react';
import {node} from 'prop-types';
import {Box} from '@chakra-ui/core';

const Table = ({children}) => (
    <Box as="table" width="full">
        {children}
    </Box>
);

Table.propTypes = {
    children: node,
};
Table.defaultProps = {
    children: undefined,
};

export default Table;
