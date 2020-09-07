/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
    forwardRef,
    Ref,
    FC,
    ReactNode,
    useContext,
    useCallback,
} from 'react';
import {Link as RouterLink} from '@reach/router';
import MenuContext from './menu-context';
import cx from '../utils/cx';

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

// by default a HTMLAnchorElement is only triggered via the Enter key. In this context we will also trigger it with the Space key.
// So all MenuItem and  MenuItemLink behave the same way.
const onKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.keyCode === 32) {
        e.preventDefault();
        (e.target as HTMLAnchorElement).click();
    }
};

const MenuItemLink: FC<Props> = forwardRef(
    ({to, isExternal, isDisabled, children}: Props, ref: Ref<any>) => {
        const {closeMenu} = useContext(MenuContext);

        const handleOnClick = useCallback(() => {
            if (!isDisabled) closeMenu();
        }, [closeMenu, isDisabled]);

        const classNames = cx(
            'block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
            {
                'cursor-not-allowed': isDisabled,
                'opacity-50': isDisabled,
                'focus:outline-none': isDisabled,
            }
        );

        return isExternal ? (
            <a
                target="_blank"
                rel="noopener noreferrer"
                ref={ref}
                role="menuitem"
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? 0 : undefined}
                href={isDisabled ? undefined : to}
                onClick={handleOnClick}
                onMouseDown={onMouseDown}
                onKeyDown={onKeyDown}
                className={classNames}>
                {children}
            </a>
        ) : (
            <RouterLink
                to={to}
                ref={ref}
                role="menuitem"
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? 0 : undefined}
                onClick={onClick}
                onMouseDown={onMouseDown}
                onKeyDown={onKeyDown}
                className={className}>
                {children}
            </RouterLink>
        );
    }
);

export default MenuItemLink;
