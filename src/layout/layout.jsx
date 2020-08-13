import React from 'react';
import {node, string, bool} from 'prop-types';
import {Grid} from '@chakra-ui/core';
import {Global, css} from '@emotion/core';

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
            gridTemplateColumns="280px 1fr"
            gridTemplateRows="64px 1fr"
            position="fixed"
            top="0px"
            left="0px"
            width="100vw"
            height="100vh"
            overflow="hidden">
            <Grid area="logo" bg={`${accent}.800`}>
                {logo}
            </Grid>
            {header && (
                <Grid area="header" bg="white" shadow="md">
                    {header}
                </Grid>
            )}
            {aside && (
                <Grid
                    area="aside"
                    bg={`${accent}.600`}
                    overflowX="hidden"
                    overflowY="auto">
                    {aside}
                </Grid>
            )}
            <Grid
                area="content"
                bg="gray.200"
                p={6}
                overflowX="hidden"
                overflowY="auto">
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
