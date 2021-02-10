import React from 'react';
import {string, node, bool, arrayOf, shape, object} from 'prop-types';
import {useField} from 'react-final-form';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Text,
    Select,
} from '@chakra-ui/react';
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
    config,
    ...props
}) => {
    const {input, meta} = useField(name, config);
    const intl = useIntl();
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
            <Select {...input} {...props} id={input.name}>
                {hasPlaceholder && (
                    <Text as="option" value="">
                        {intl.formatMessage({id: `placeholder.${name}`})}
                    </Text>
                )}
                {options.map((option) => (
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
    config: object,
};

SelectField.defaultProps = {
    gridArea: undefined,
    fieldName: undefined,
    helperText: undefined,
    isRequired: false,
    hasPlaceholder: false,
    config: undefined,
};

export default SelectField;
