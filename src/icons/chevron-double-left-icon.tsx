import React from 'react';
import {Icon, forwardRef} from '@chakra-ui/react';

export const ChevronDoubleLeftIcon = forwardRef((props, ref) => {
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
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
        </Icon>
    );
});

export default ChevronDoubleLeftIcon;
