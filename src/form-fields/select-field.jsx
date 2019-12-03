import React from 'react';
import {string, node, bool, arrayOf, shape} from 'prop-types';
import {useField} from 'react-final-form';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Text,
    Select,
} from '@chakra-ui/core';
import {FormattedMessage, useIntl} from 'react-intl';
import FieldError from './field-error';

const SelectField = ({
    name,
    options,
    hasPlaceholder,
    helperText,
    isRequired,
    ...props
}) => {
    const {input, meta} = useField(name);
    const intl = useIntl();
    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    return (
        <FormControl gridArea={name} isInvalid={isInvalid}>
            <FormLabel htmlFor={name}>
                <FormattedMessage id={`field.${name}`} />{' '}
                {!isRequired && <Text as="span">(optional)</Text>}
            </FormLabel>
            <Select {...input} {...props}>
                {hasPlaceholder && (
                    <Text as="option" value="">
                        {intl.formatMessage({id: `placeholder.${name}`})}
                    </Text>
                )}
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
            {helperText && (
                <FormHelperText>
                    <FormattedMessage id={helperText} />
                </FormHelperText>
            )}
            <FieldError isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

SelectField.propTypes = {
    name: string.isRequired,
    options: arrayOf(
        shape({
            value: string.isRequired,
            label: string,
        })
    ).isRequired,
    isRequired: bool,
    helperText: node,
    hasPlaceholder: bool,
};

SelectField.defaultProps = {
    helperText: undefined,
    isRequired: false,
    hasPlaceholder: bool,
};

export default SelectField;
