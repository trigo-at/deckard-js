import React, {forwardRef} from 'react';
import {string, node} from 'prop-types';
import {useField} from 'react-final-form';
import {FormControl, Checkbox, FormHelperText} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';

const CheckboxField = forwardRef(
    ({name, gridArea, fieldName, helperText, ...props}, ref) => {
        const {input, meta} = useField(name, {type: 'checkbox'});
        const isInvalid =
            (!!meta.error && meta.touched) ||
            (!!meta.submitError &&
                !meta.dirtySinceLastSubmit &&
                !meta.submitting);
        return (
            <FormControl gridArea={gridArea || name} isInvalid={isInvalid}>
                <Checkbox {...input} {...props} ref={ref}>
                    <FormattedMessage id={`field.${fieldName || name}`} />
                </Checkbox>
                {helperText && (
                    <FormHelperText>
                        <FormattedMessage id={helperText} />
                    </FormHelperText>
                )}
                <FieldError isInvalid={isInvalid} meta={meta} />
            </FormControl>
        );
    }
);

CheckboxField.propTypes = {
    name: string.isRequired,
    gridArea: string,
    fieldName: string,
    helperText: node,
};

CheckboxField.defaultProps = {
    helperText: undefined,
    gridArea: undefined,
    fieldName: undefined,
};

export default CheckboxField;
