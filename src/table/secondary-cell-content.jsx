import React from 'react';
import {node} from 'prop-types';
import {Text} from '@chakra-ui/core';

const SecondaryCellContent = ({children}) => (
    <Text as="span" fontSize="sm" color="gray.600">
        {children}
    </Text>
);

SecondaryCellContent.propTypes = {
    children: node,
};
SecondaryCellContent.defaultProps = {
    children: undefined,
};

export default SecondaryCellContent;
