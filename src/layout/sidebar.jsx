import React from 'react';
import {node, string, func} from 'prop-types';
import {Box} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const Sidebar = ({title, version, logo, userName, onLogout, children}) => (
    <div className="flex flex-col h-0 flex-1 bg-gray-800">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="px-4">
                {logo && <img className="h-8 w-auto" src={logo} alt="logo" />}
                <div className="text-lg text-white font-normal leading-6 mt-1">
                    {title}
                </div>
                <div className="text-xs text-gray-400 font-normal">
                    {version}
                </div>
            </div>

            <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
                {children}
            </nav>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <div className="flex items-center  w-full group">
                    <div>
                        <p className="text-sm leading-5 font-medium text-white">
                            {userName}
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                onLogout();
                            }}
                            className="focus:outline-none text-xs leading-4 font-medium text-gray-300 group-hover:text-gray-200 transition ease-in-out duration-150">
                            <FormattedMessage id="common.logout" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Sidebar.propTypes = {
    title: string.isRequired,
    version: string.isRequired,
    logo: string,
    children: node,
    userName: string,
    onLogout: func,
};

Sidebar.defaultProps = {
    children: undefined,
    logo: undefined,
    onLogout: undefined,
    userName: undefined,
};

export default Sidebar;
