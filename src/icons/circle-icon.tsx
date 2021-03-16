import React from 'react';
import {Icon, forwardRef} from '@chakra-ui/react';

export const CircleIcon = forwardRef((props, ref) => {
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
                d="M 15 10 m 6 2 a 9 9 0 1 1 -18 0 a 9 9 0 0 1 18 0 z"
            />
        </Icon>
    );
});

export default CircleIcon;
