import React, {useState} from 'react';
import {string, node, bool} from 'prop-types';
import {Link} from '@reach/router';
import Icon from '../components/icon';
import cx from '../utils/cx';

const NavMenu = ({icon, header, children, initiallyCollapsed}) => {
    const [collapsed, setCollapsed] = useState(initiallyCollapsed);

    return (
        <div>
            <button
                type="button"
                onClick={() => setCollapsed(!collapsed)}
                className="w-full group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white focus:outline-none focus:bg-gray-700 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150">
                <Icon
                    icon={icon}
                    className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
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
    initiallyCollapsed: bool,
};

NavMenu.defaultProps = {
    initiallyCollapsed: true,
};

export default NavMenu;
