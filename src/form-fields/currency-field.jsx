import React from 'react';
import {string, node, bool} from 'prop-types';
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
    Text,
} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';

const CurrencyField = ({name, helperText, isRequired, ...props}) => {
    const {input, meta} = useField(name);
    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    return (
        <FormControl gridArea={name} isInvalid={isInvalid}>
            <FormLabel htmlFor={name}>
                <FormattedMessage id={`field.${name}`} />
                {!isRequired && <Text as="span">(optional)</Text>}
            </FormLabel>
            <NumberInput {...input} precision={2} step={0.1}>
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
    isRequired: bool,
    helperText: node,
};

CurrencyField.defaultProps = {
    helperText: undefined,
    isRequired: false,
};

export default CurrencyField;