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
                d="M 15 13 m 0 13 a 9 9 0 1 1 0 -18 a 9 9 0 0 1 0 18 z"
            />
        </Icon>
    );
});

export default CircleIcon;
