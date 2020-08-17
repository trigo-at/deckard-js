import React from 'react';
import {string, node} from 'prop-types';
import {Link, Match} from '@reach/router';
import Icon from '../components/icon';
import cx from '../utils/cx';

const NavLink = ({to, icon, children}) => (
    <div>
        <Match path={to}>
            {({match}) => (
                <Link
                    className={cx(
                        'group w-full flex items-center pl-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150',
                        {
                            'text-gray-900 hover:text-gray-900 hover:bg-gray-100 bg-gray-100 focus:bg-gray-200': match,
                            'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50': !match,
                        }
                    )}
                    to={to}>
                    <Icon
                        className={cx(
                            'mr-3 h-6 w-6 transition ease-in-out duration-150',
                            {
                                'text-gray-600 ': match,
                                'text-gray-400': !match,
                            }
                        )}
                        icon={icon}
                    />
                    {children}
                </Link>
            )}
        </Match>
    </div>
);

NavLink.propTypes = {
    to: string.isRequired,
    children: node.isRequired,
};

export default NavLink;
