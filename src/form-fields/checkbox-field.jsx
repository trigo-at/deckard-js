import React from 'react';
import {string, node} from 'prop-types';
import {useField} from 'react-final-form';
import {FormControl, Checkbox, FormHelperText} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';

const CheckboxField = ({name, helperText, ...props}) => {
    const {input, meta} = useField(name, {type: 'checkbox'});
    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    return (
        <FormControl gridArea={name} isInvalid={isInvalid}>
            <Checkbox {...input} {...props}>
                <FormattedMessage id={`field.${name}`} />
            </Checkbox>
            {helperText && (
                <FormHelperText>
                    <FormattedMessage id={helperText} />
                </FormHelperText>
            )}
            <FieldError isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

CheckboxField.propTypes = {
    name: string.isRequired,
    helperText: node,
};

CheckboxField.defaultProps = {
    helperText: undefined,
};

export default CheckboxField;
