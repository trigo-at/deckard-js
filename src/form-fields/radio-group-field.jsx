import React from 'react';
import {string, arrayOf} from 'prop-types';
import {useField} from 'react-final-form';
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormHelperText,
} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';

const RadioGroupField = ({name, options, helperText, ...props}) => {
    const {input, meta} = useField(name);
    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    return (
        <FormControl as="fieldset" gridArea={name} isInvalid={isInvalid}>
            <FormLabel as="legend">
                <FormattedMessage id={`field.${name}`} />
            </FormLabel>
            <RadioGroup {...input} {...props} id={name}>
                {options.map(option => (
                    <Radio key={option} value={option}>
                        <FormattedMessage id={`${name}.${option}`} />
                    </Radio>
                ))}
            </RadioGroup>
            {helperText && (
                <FormHelperText>
                    <FormattedMessage id={helperText} />
                </FormHelperText>
            )}
            <FieldError isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

RadioGroupField.propTypes = {
    name: string.isRequired,
    options: arrayOf(string).isRequired,
    helperText: string,
};

RadioGroupField.defaultProps = {
    helperText: undefined,
};

export default RadioGroupField;
