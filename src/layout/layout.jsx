import React from 'react';
import {node, string} from 'prop-types';
import {Grid} from '@chakra-ui/core';

const buildGridTemplateAreas = ({hasAside, hasHeader}) => {
    if (hasAside && !hasHeader) {
        return `'logo content' 'aside content'`;
    }

    if (!hasAside && hasHeader) {
        return `'header' ' content'`;
    }

    return `'logo header' 'aside content'`;
};

const Layout = ({logo, header, aside, children, accent}) => {
    const gridTemplateAreas = buildGridTemplateAreas({
        hasAside: !!aside,
        hasHeader: !!header,
    });

    return (
        <Grid
            gridTemplateAreas={gridTemplateAreas}
            gridTemplateColumns="240px 1fr"
            gridTemplateRows="64px 1fr"
            height="100vh"
            width="100vw">
            <Grid area="logo" bg={`${accent}.800`}>
                {logo}
            </Grid>
            {header && (
                <Grid area="header" bg="white" shadow="md">
                    {header}
                </Grid>
            )}
            {aside && (
                <Grid area="aside" bg={`${accent}.600`}>
                    {aside}
                </Grid>
            )}
            <Grid
                area="content"
                bg="gray.200"
                p={6}
                overflow="hidden"
                overflowY="scroll">
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
