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
import Optional from './optional';

const SelectField = ({
    name,
    gridArea,
    fieldName,
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
        <FormControl gridArea={gridArea || name} isInvalid={isInvalid}>
            <FormLabel htmlFor={name}>
                <FormattedMessage id={`field.${fieldName || name}`} />{' '}
                {!isRequired && <Optional />}
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
    gridArea: string,
    fieldName: string,
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
    gridArea: undefined,
    fieldName: undefined,
    helperText: undefined,
    isRequired: false,
    hasPlaceholder: false,
};

export default SelectField;
