import React from 'react';
import {useField} from 'react-final-form';
import {FormControl, FormLabel, Input, FormHelperText} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';
import Optional from './optional';

export type InputFieldProps = {
    name: string;
    gridArea?: string;
    fieldName?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    helperText?: string;
    type?: string;
    config?: any;
    label?: string;
    formattedName?: string;
    formattedPrefix?: string;
};

export const InputField = ({
    name,
    gridArea,
    fieldName,
    helperText,
    isRequired = false,
    isDisabled = false,
    isReadOnly = false,
    type = 'text',
    config,
    label,
    formattedName,
    formattedPrefix = 'field',
    ...props
}: InputFieldProps) => {
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
        <FormControl
            gridArea={gridArea || name}
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            id={input.name}>
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

export default InputField;
