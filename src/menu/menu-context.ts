/* eslint-disable no-console */
import {createContext} from 'react';

const MenuContext = createContext({
    isOpen: false,
    toggleMenu: () => {
        console.error(
            'MenuContext "toggleMenu" method not initialized correctly'
        );
    },
    closeMenu: () => {
        console.error(
            'MenuContext "closeMenu" method not initialized correctly'
        );
    },
});

export default MenuContext;
