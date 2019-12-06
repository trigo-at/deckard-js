import React from 'react';
import {node} from 'prop-types';
import {Heading} from '@chakra-ui/core';

const NavHeader = ({children}) => (
    <Heading
        px={6}
        textTransform="uppercase"
        color="gray.400"
        size="sm"
        letterSpacing="wide">
        {children}
    </Heading>
);

NavHeader.propTypes = {
    children: node,
};

NavHeader.defaultProps = {
    children: undefined,
};

export default NavHeader;