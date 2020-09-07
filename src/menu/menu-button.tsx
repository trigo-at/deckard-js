import React, {FC, useContext, useCallback, useRef} from 'react';
import useClickOutside from '../use-click-outside';
import Button from '../components/button';
import {ButtonProps} from '../components/types';
import MenuContext from './menu-context';

const MenuButton: FC<ButtonProps> = ({onClick, ...others}: ButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const {isOpen, closeMenu, toggleMenu} = useContext(MenuContext);
    useClickOutside(ref, closeMenu);

    const handleOnClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            if (onClick) onClick(event);
            toggleMenu();
        },
        [onClick, closeMenu]
    );

    return (
        <Button
            ref={ref}
            variant="tertiary"
            {...others}
            onClick={handleOnClick}
            aria-expanded={isOpen ? 'true' : 'false'}
        />
    );
};

export default MenuButton;
