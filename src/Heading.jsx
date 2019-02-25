import React from 'react';
import {oneOf} from 'prop-types';
import cx from 'classnames';

const Heading = ({size, as, ...props}) => {
    const Component = as;
    return (
        <Component
            className={cx('tracking-wide font-normal leading-loose', {
                'text-4xl': size === 'xl',
                'text-2xl': size === 'l',
                'text-xl': size === 'm',
                'text-lg': size === 's',
            })}
            {...props}
        />
    );
};

Heading.propTypes = {
    as: oneOf(['h1', 'h2', 'h3', 'h4']),
    size: oneOf(['xl', 'l', 'm', 's']),
};

Heading.defaultProps = {
    as: 'h1',
    size: 'xl',
};

export default Heading;
