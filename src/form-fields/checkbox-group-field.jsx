import React from 'react';
import {string, arrayOf} from 'prop-types';
import {useField} from 'react-final-form';
import {
    FormControl,
    FormLabel,
    CheckboxGroup,
    Checkbox,
    FormHelperText,
} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';

const CheckboxGroupField = ({
    name,
    gridArea,
    fieldName,
    options,
    helperText,
}) => {
    const {input, meta} = useField(name);

    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    return (
        <FormControl
            as="fieldset"
            gridArea={gridArea || name}
            isInvalid={isInvalid}>
            <FormLabel as="legend">
                <FormattedMessage id={`field.${fieldName || name}`} />
            </FormLabel>
            <CheckboxGroup id={name} {...input}>
                {options.map((option, idx) => (
                    <Checkbox key={idx} value={option}>
                        {option}
                    </Checkbox>
                ))}
            </CheckboxGroup>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
            <FieldError isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

CheckboxGroupField.propTypes = {
    name: string.isRequired,
    gridArea: string,
    fieldName: string,
    options: arrayOf(string).isRequired,
    helperText: string,
};

CheckboxGroupField.defaultProps = {
    gridArea: undefined,
    fieldName: undefined,
    helperText: undefined,
};

export default CheckboxGroupField;