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

const Layout = ({logo, header, aside, children, accent, fixedAside}) => {
    const gridTemplateAreas = buildGridTemplateAreas({
        hasAside: !!aside,
        hasHeader: !!header,
    });

    const contentProps = fixedAside
        ? {fixedoverflow: 'hidden', overflowY: 'auto'}
        : {};

    return (
        <>
            {fixedAside && (
                <Global
                    styles={css`
                        body {
                            overflow: hidden;
                        }
                    `}
                />
            )}
            <Grid
                gridTemplateAreas={gridTemplateAreas}
                gridTemplateColumns="240px 1fr"
                gridTemplateRows="64px 1fr"
                height={fixedAside ? '100vh' : undefined}
                width={fixedAside ? '100vw' : undefined}
                minHeight="100vh">
                <Grid area="logo" bg={`${accent}.800`}>
                    {logo}
                </Grid>
                {header && (
                    <Grid area="header" bg="white" shadow="md">
                        {header}
                    </Grid>
                )}
                {aside && (
                    <Grid area="aside" bg={`${accent}.600`} {...contentProps}>
                        {aside}
                    </Grid>
                )}
                <Grid area="content" bg="gray.200" p={6} {...contentProps}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

Layout.propTypes = {
    logo: node,
    header: node,
    aside: node,
    children: node,
    accent: string,
    fixedAside: bool,
};

Layout.defaultProps = {
    logo: undefined,
    header: undefined,
    aside: undefined,
    children: undefined,
    accent: 'gray',
    fixedAside: false,
};

export default Layout;
