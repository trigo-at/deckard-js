import React from 'react';
import {node} from 'prop-types';
import {Grid} from '@chakra-ui/core';

const Layout = ({logo, header, aside, children}) => {
    return (
        <Grid
            gridTemplateAreas="'logo header' 'aside content'"
            gridTemplateColumns="240px 1fr"
            gridTemplateRows="64px 1fr"
            minHeight="100vh">
            <Grid area="logo" bg="gray.800">
                {logo}
            </Grid>
            <Grid area="header" bg="white" shadow="md">
                {header}
            </Grid>
            <Grid area="aside" bg="gray.600">
                {aside}
            </Grid>
            <Grid area="content" bg="gray.200" p={6}>
                {children}
            </Grid>
        </Grid>
    );
};

Layout.propTypes = {
    logo: node,
    header: node,
    aside: node,
    children: node,
};

Layout.defaultProps = {
    logo: undefined,
    header: undefined,
    aside: undefined,
    children: undefined,
};

export default Layout;
