import React from 'react';
import {node} from 'prop-types';
import {Box} from '@chakra-ui/core';

const Aside = ({children}) => <Box py={6}>{children}</Box>;

Aside.propTypes = {
    children: node,
};

Aside.defaultProps = {
    children: undefined,
};

export default Aside;
