import React from 'react';
import {string, node} from 'prop-types';
import {Link} from '@reach/router';
import cx from '../utils/cx';

const NavSecondaryMenuItem = ({to, children}) => (
    <Link
        className="group flex items-center px-3 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
        to={to}>
        <span className="truncate">{children}</span>
    </Link>
);

NavSecondaryMenuItem.propTypes = {
    children: node.isRequired,
};

export default NavSecondaryMenuItem;
