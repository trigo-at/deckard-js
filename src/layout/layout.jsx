import React from 'react';
import {node, string} from 'prop-types';
import {Grid} from '@chakra-ui/core';

const Layout = ({logo, header, aside, children, accent}) => {
    const gridTemplateAreas = aside
        ? "'logo header' 'aside content'"
        : "'logo header' 'content content'";

    return (
        <Grid
            gridTemplateAreas={gridTemplateAreas}
            gridTemplateColumns="240px 1fr"
            gridTemplateRows="64px 1fr"
            minHeight="100vh">
            <Grid area="logo" bg={`${accent}.800`}>
                {logo}
            </Grid>
            <Grid area="header" bg="white" shadow="md">
                {header}
            </Grid>
            {aside && (
                <Grid area="aside" bg={`${accent}.600`}>
                    {aside}
                </Grid>
            )}
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
    accent: string,
};

Layout.defaultProps = {
    logo: undefined,
    header: undefined,
    aside: undefined,
    children: undefined,
    accent: 'gray',
};

export default Layout;
