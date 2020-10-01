import React from 'react';
import {string, node} from 'prop-types';
import {Link, Match} from '@reach/router';

const NavMenuItem = ({to, children}) => (
    <Match path={to}>
        {({match}) => (
            <Link
                className="group w-full flex items-center pl-12 pr-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                to={to}>
                {children}
            </Link>
        )}
    </Match>
);

NavMenuItem.propTypes = {
    children: node.isRequired,
};

export default NavMenuItem;
