import React from 'react';
import {bool, object} from 'prop-types';
import {FormErrorMessage} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';

const FieldError = ({isInvalid, meta}) => {
    if (!isInvalid) {
        return null;
    }
    return (
        <FormErrorMessage>
            <FormattedMessage id={meta.submitError || meta.error} />
        </FormErrorMessage>
    );
};

FieldError.propTypes = {
    isInvalid: bool,
    meta: object.isRequired,
};

FieldError.defaultProps = {
    isInvalid: false,
};

export default FieldError;
