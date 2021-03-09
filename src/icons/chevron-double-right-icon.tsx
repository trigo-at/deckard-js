import React from 'react';
import {Icon, forwardRef} from '@chakra-ui/react';

export const ChevronDoubleRightIcon = forwardRef((props, ref) => {
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
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
        </Icon>
    );
});

export default ChevronDoubleRightIcon;
