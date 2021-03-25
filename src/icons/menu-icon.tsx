import React from 'react';
import {Icon, forwardRef} from '@chakra-ui/react';

export const MenuIcon = forwardRef((props, ref) => {
    return (
        <Icon
            ref={ref}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            {...props}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
            />
        </Icon>
    );
});

export default MenuIcon;
