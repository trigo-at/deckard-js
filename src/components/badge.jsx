import React from 'react';
import {node, oneOf, string} from 'prop-types';

const DEFAULT_CLASSES =
    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5';

const getVariantClasses = (variant) => {
    switch (variant) {
        case 'red':
            return 'bg-red-100 text-red-800';
        case 'orange':
            return 'bg-orange-100 text-orange-800';
        case 'yellow':
            return 'bg-yellow-100 text-yellow-800';
        case 'green':
            return 'bg-green-100 text-green-800';
        case 'teal':
            return 'bg-teal-100 text-teal-800';
        case 'blue':
            return 'bg-blue-100 text-blue-800';
        case 'indigo':
            return 'bg-indigo-100 text-indigo-800';
        case 'purple':
            return 'bg-green-100 text-purple-800';
        case 'pink':
            return 'bg-pink-100 text-pink-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

export const Badge = ({children, variant, className}) => {
    return (
        <span
            className={`${DEFAULT_CLASSES} ${getVariantClasses(
                variant
            )} ${className}`}>
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: node,
    variant: oneOf([
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'indigo',
        'purple',
        'pink',
    ]),
    className: string,
};

Badge.defaultProps = {
    variant: 'gray',
    className: '',
};

export default Badge;
