import React from 'react';
import {node} from 'prop-types';
import {Box} from '@chakra-ui/core';
import NavHeader from './nav-header';

const NavSection = ({header, children}) => (
    <>
        <NavHeader>{header}</NavHeader>
        <Box pt={2} pb={10}>
            {children}
        </Box>
    </>
);

NavSection.propTypes = {
    header: node,
    children: node,
};

NavSection.defaultProps = {
    header: undefined,
    children: undefined,
};

export default NavSection;
