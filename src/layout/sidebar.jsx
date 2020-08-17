import React from 'react';
import {node, string} from 'prop-types';
import {Box} from '@chakra-ui/core';

const Sidebar = ({title, version, logo, children}) => (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
            <img className="h-8 w-auto" src={logo} alt="logo" />
            <div className="ml-3">
                <div className="text-lg font-normal leading-6">{title}</div>
                <div className="text-xs text-gray-400 font-normal">
                    {version}
                </div>
            </div>
        </div>
        <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 bg-white">{children}</nav>
        </div>
    </div>
);

Sidebar.propTypes = {
    title: string.isRequired,
    version: string.isRequired,
    logo: string,
    children: node,
};

Sidebar.defaultProps = {
    children: undefined,
    logo: undefined,
};

export default Sidebar;
