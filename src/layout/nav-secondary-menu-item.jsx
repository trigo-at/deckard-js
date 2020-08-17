import React from 'react';
import {string, node} from 'prop-types';
import {Link} from '@reach/router';
import cx from '../utils/cx';

const NavSecondaryMenuItem = ({to, children}) => (
    <Link
        className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
        to={to}>
        <span className="truncate">{children}</span>
    </Link>
);

NavSecondaryMenuItem.propTypes = {
    children: node.isRequired,
};

export default NavSecondaryMenuItem;
