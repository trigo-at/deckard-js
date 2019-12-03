import React from 'react';
import {node} from 'prop-types';
import {Text} from '@chakra-ui/core';

const CellContent = ({children, ...props}) => (
    <Text as="span" color="gray.900" {...props}>
        {children}
    </Text>
);

CellContent.propTypes = {
    children: node,
};
CellContent.defaultProps = {
    children: undefined,
};

export default CellContent;
