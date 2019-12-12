import React from 'react';
import {node} from 'prop-types';
import {Box, Flex} from '@chakra-ui/core';

const TableHeader = ({children, ...props}) => (
    <Box
        as="th"
        p={2}
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        borderTop="1px solid"
        borderTopColor="gray.200"
        bg="gray.100"
        {...props}>
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start">
            {children}
        </Flex>
    </Box>
);

TableHeader.propTypes = {
    children: node,
};
TableHeader.defaultProps = {
    children: undefined,
};

export default TableHeader;
