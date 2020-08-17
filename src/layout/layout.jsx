/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import {node, string, bool} from 'prop-types';
import {Grid, Box, Flex} from '@chakra-ui/core';
import {Global, css} from '@emotion/core';

const Layout = ({header, sidebar, children}) => {
    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
            <div className="flex flex-shrink-0">
                <div className="flex flex-col w-64">{sidebar}</div>
            </div>
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                {header}

                <main
                    className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
                    tabIndex="0">
                    <div className="pt-2 pb-6 md:py-6">
                        <div className="mx-auto px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Dashboard
                            </h1>
                        </div>
                        <div className="mx-auto px-4 sm:px-6 md:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
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
