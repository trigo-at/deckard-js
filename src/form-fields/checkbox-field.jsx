import React, {forwardRef} from 'react';
import {string, node, object} from 'prop-types';
import {useField} from 'react-final-form';
import {FormControl, Checkbox, FormHelperText} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';

const CheckboxField = forwardRef(
    ({name, gridArea, fieldName, helperText, config, ...props}, ref) => {
        const {input, meta} = useField(name, {type: 'checkbox'});
        const isInvalid =
            (!!meta.error && meta.touched) ||
            (!!meta.submitError &&
                !meta.dirtySinceLastSubmit &&
                !meta.submitting);
        return (
            <FormControl gridArea={gridArea || name} isInvalid={isInvalid}>
                <Checkbox
                    {...input}
                    {...props}
                    ref={ref}
                    isChecked={input.checked}>
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
    config: object,
};

CheckboxField.defaultProps = {
    helperText: undefined,
    gridArea: undefined,
    fieldName: undefined,
    config: undefined,
};

export default CheckboxField;
