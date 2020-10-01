import React, {useState} from 'react';
import {string, node} from 'prop-types';
import {Link} from '@reach/router';
import Icon from '../components/icon';
import cx from '../utils/cx';

const NavSecondaryMenu = ({icon, header, children}) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className="pt-6">
            <h3
                className="px-3 py-2 text-xs leading-4 font-semibold text-white uppercase tracking-wider"
                id="secondary-nav-headline">
                {header}
            </h3>
            <div
                className="mt-1 space-y-1"
                role="group"
                aria-labelledby="secondary-nav-headline">
                {children}
            </div>
        </div>
    );
};

NavSecondaryMenu.propTypes = {
    children: node.isRequired,
};

export default NavSecondaryMenu;
