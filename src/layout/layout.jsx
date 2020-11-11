/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import {node, string, bool} from 'prop-types';
import {Grid, Box, Flex} from '@chakra-ui/core';
import {Global, css} from '@emotion/core';

const Layout = ({header, sidebar, children}) => {
    return (
        <Flex bg="gray.100" overflow="hidden" height="100vh">
            <Flex flexShrink={0}>
                <Flex width={64} flexDirection="column">
                    {sidebar}
                </Flex>
            </Flex>
            <Flex
                flexDirection="column"
                flex="1 1 0%"
                overflow="hidden"
                width={0}>
                {header}

                <Flex
                    as="main"
                    flex="1 1 0%"
                    position="relative"
                    overflowY="auto"
                    zIndex={0}
                    tabIndex="0">
                    <Box pb={6} pt={2} py={[0, header ? 6 : 0]}>
                        <Box mx="auto" px={[6, 8]}>
                            {children}
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

Layout.propTypes = {
    header: node,
    sidebar: node,
    children: node,
};

Layout.defaultProps = {
    header: undefined,
    sidebar: undefined,
    children: undefined,
};

export default Layout;
