import React, {forwardRef, Ref, FC, ReactNode, useContext} from 'react';
import {Link as RouterLink} from '@reach/router';
import MenuContext from './menu-context';

type Props = {
    to: string;
    isExternal?: boolean;
    isDisabled?: boolean;
    children: ReactNode;
};

// ensures that the onClick Event works correctly when there is a global mouseDown eventListener (useClickOutside)
// https://stackoverflow.com/questions/41017117/how-does-one-stop-propagation-of-event-to-a-global-listener-in-a-react-component
const onMouseDown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
    e.nativeEvent.stopImmediatePropagation();

const MenuItemLink: FC<Props> = forwardRef(
    ({to, isExternal, isDisabled, children}: Props, ref: Ref<any>) => {
        const {closeMenu} = useContext(MenuContext);

        return isExternal ? (
            <a
                target="_blank"
                rel="noopener noreferrer"
                ref={ref}
                aria-disabled={isDisabled}
                href={to}
                onClick={closeMenu}
                onMouseDown={onMouseDown}
                className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                {children}
            </a>
        ) : (
            <RouterLink
                to={to}
                ref={ref}
                onClick={closeMenu}
                onMouseDown={onMouseDown}
                className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                {children}
            </RouterLink>
        );
    }
);

export default MenuItemLink;
