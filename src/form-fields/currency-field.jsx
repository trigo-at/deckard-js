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

const CurrencyField = ({
    name,
    gridArea,
    fieldName,
    helperText,
    isRequired,
    isDisabled,
    config,
    label,
    formattedName,
    formattedPrefix,
    ...props
}) => {
    if (fieldName) {
        console.warn(
            'The property "fieldName" is deprecated. Use "formattedName" instead. "fieldName" will be removed in future versions.'
        );
    }
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
                {label || (
                    <FormattedMessage
                        id={`${formattedPrefix}.${
                            formattedName || fieldName || name
                        }`}
                    />
                )}
                {!isRequired && <Optional />}
            </FormLabel>
            <NumberInput
                {...input}
                precision={2}
                step={0.1}
                isDisabled={isDisabled}>
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

CurrencyField.propTypes = {
    name: string.isRequired,
    gridArea: string,
    fieldName: string,
    isRequired: bool,
    isDisabled: bool,
    helperText: node,
    config: object,
    label: string,
    formattedName: string,
    formattedPrefix: string,
};

CurrencyField.defaultProps = {
    helperText: undefined,
    gridArea: undefined,
    fieldName: undefined,
    isRequired: false,
    isDisabled: false,
    config: undefined,
    label: undefined,
    formattedName: undefined,
    formattedPrefix: 'field',
};

export default CurrencyField;
