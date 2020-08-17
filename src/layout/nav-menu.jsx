import React, {useState} from 'react';
import {string, node} from 'prop-types';
import {Link} from '@reach/router';
import Icon from '../components/icon';
import cx from '../utils/cx';

const NavMenu = ({icon, header, children}) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <button
                type="button"
                onClick={() => setCollapsed(!collapsed)}
                className="mt-1 group w-full flex items-center pl-2 pr-1 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
                <Icon
                    icon={icon}
                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150"
                />
                {header}
                <svg
                    className={`${
                        collapsed ? 'text-gray-300' : 'text-gray-400 rotate-90'
                    } ml-auto h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150`}
                    viewBox="0 0 20 20">
                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                </svg>
            </button>
            {!collapsed && <div className="mt-1 space-y-1">{children}</div>}
        </div>
    );
};

NavMenu.propTypes = {
    children: node.isRequired,
};

export default NavMenu;
