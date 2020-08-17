import React, {useState} from 'react';
import {string, func} from 'prop-types';
import {FormattedMessage} from 'react-intl';

const UserMenu = ({userName, onLogout}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="relative">
            <div>
                <button
                    type="button"
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
                    id="user-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="User menu"
                    aria-haspopup="true">
                    {userName}
                </button>
            </div>

            {menuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                    <div
                        className="py-1 rounded-md bg-white shadow-xs"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu">
                        <button
                            type="button"
                            onClick={() => {
                                setMenuOpen(false);
                                onLogout();
                            }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150 w-full text-left"
                            role="menuitem">
                            <FormattedMessage id="common.logout" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

UserMenu.propTypes = {
    userName: string,
    onLogout: func,
};

UserMenu.defaultProps = {
    userName: undefined,
    onLogout: undefined,
};

export default UserMenu;
