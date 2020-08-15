import React from 'react';
import {string, node, bool, object} from 'prop-types';
import {useField} from 'react-final-form';
import {FormControl, FormLabel, Input, FormHelperText} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';
import Optional from './optional';

const InputField = ({
    name,
    gridArea,
    fieldName,
    helperText,
    isRequired,
    type,
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
            <Input
                {...input}
                id={input.name}
                type={type || 'text'}
                value={type === 'file' ? undefined : input.value}
                onChange={
                    type === 'file'
                        ? ({target}) => input.onChange(target.files)
                        : input.onChange
                }
                {...props}
            />
            {helperText && (
                <FormHelperText>
                    <FormattedMessage id={helperText} />
                </FormHelperText>
            )}
            <FieldError isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

InputField.propTypes = {
    name: string.isRequired,
    gridArea: string,
    fieldName: string,
    isRequired: bool,
    helperText: node,
    type: string,
    config: object,
    label: string,
    formattedName: string,
    formattedPrefix: string,
};

InputField.defaultProps = {
    helperText: undefined,
    gridArea: undefined,
    fieldName: undefined,
    isRequired: false,
    type: 'text',
    config: undefined,
    label: undefined,
    formattedName: undefined,
    formattedPrefix: 'field',
};

export default InputField;
