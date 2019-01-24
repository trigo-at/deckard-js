import React from 'react';
import {string} from 'prop-types';

const Input = ({id, ...props}) => (
    <input
        id={id}
        name={id}
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
        {...props}
    />
);

Input.propTypes = {
    id: string,
};

Input.defaultProps = {
    id: undefined,
};

export default Input;
