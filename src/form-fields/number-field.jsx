import React from 'react';
import {string, node, bool, object} from 'prop-types';
import {useField} from 'react-final-form';
import {
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormHelperText,
} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';
import Optional from './optional';

const NumberField = ({
    name,
    gridArea,
    fieldName,
    helperText,
    isRequired,
    config,
    ...props
}) => {
    const {input, meta} = useField(name, config);
    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    return (
        <FormControl gridArea={gridArea || name} isInvalid={isInvalid}>
            <FormLabel
                fontSize="sm"
                htmlFor={name}
                display="flex"
                pr={0}
                justifyContent="space-between"
                alignItems="flex-end">
                <FormattedMessage id={`field.${fieldName || name}`} />
                {!isRequired && <Optional />}
            </FormLabel>
            <NumberInput {...input} precision={0} step={1}>
                <NumberInputField {...props} />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            {helperText && (
                <FormHelperText>
                    <FormattedMessage id={helperText} />
                </FormHelperText>
            )}
            <FieldError isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

NumberField.propTypes = {
    name: string.isRequired,
    gridArea: string,
    fieldName: string,
    isRequired: bool,
    helperText: node,
    config: object,
};

NumberField.defaultProps = {
    helperText: undefined,
    gridArea: undefined,
    fieldName: undefined,
    isRequired: false,
    config: undefined,
};

export default NumberField;
