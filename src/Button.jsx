/* eslint react/button-has-type: 0 */

import React from 'react';
import {string, bool} from 'prop-types';
import cx from 'classnames';

const Button = ({type, outline, ...props}) => {
    return (
        <button
            type={type}
            className={cx('font-semibold tracking-wide py-2 px-4 rounded-full', {
                'bg-transparent hover:bg-blue text-blue-dark hover:text-white border border-blue hover:border-transparent': outline,
                'bg-blue hover:bg-blue-dark text-white': !outline,
            })}
            {...props}
        />
    );
};

Button.propTypes = {
    type: string,
    outline: bool,
};

Button.defaultProps = {
    type: 'button',
    outline: false,
};

export default Button;
