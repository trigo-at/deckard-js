import React from 'react';
import {node} from 'prop-types';
import {Box, Flex} from '@chakra-ui/core';

const TableCell = ({children, ...props}) => (
    <Box
        as="td"
        p={2}
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        {...props}>
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start">
            {children}
        </Flex>
    </Box>
);

TableCell.propTypes = {
    children: node,
};
TableCell.defaultProps = {
    children: undefined,
};

export default TableCell;
