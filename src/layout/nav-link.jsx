import React from 'react';
import {string, node} from 'prop-types';
import {Link, Match} from '@reach/router';
import Icon from '../components/icon';
import cx from '../utils/cx';

const NavLink = ({to, icon, children}) => (
    <Match path={to}>
        {({match}) => (
            <Link
                className={cx(
                    'group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150',
                    {
                        'text-white bg-gray-900': match,
                        'text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white': !match,
                    }
                )}
                to={to}>
                <Icon
                    className={cx(
                        'mr-4 h-6 w-6 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150',
                        {
                            'text-gray-300': match,
                            'text-gray-400': !match,
                        }
                    )}
                    icon={icon}
                />
                {children}
            </Link>
        )}
    </Match>
);

NavLink.propTypes = {
    to: string.isRequired,
    children: node.isRequired,
};

export default NavLink;
