/* eslint jsx-a11y/label-has-associated-control:0 jsx-a11y/label-has-for:0 */
import React from 'react';
import {string} from 'prop-types';

const Label = ({htmlFor, ...props}) => (
    <label
        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        htmlFor={htmlFor}
        {...props}
    />
);

Label.propTypes = {
    htmlFor: string,
};

Label.defaultProps = {
    htmlFor: undefined,
};

export default Label;
