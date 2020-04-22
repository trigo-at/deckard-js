import React from 'react';
import {string, node, bool} from 'prop-types';
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
    ...props
}) => {
    const {input, meta} = useField(name);
    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    return (
        <FormControl gridArea={gridArea || name} isInvalid={isInvalid}>
            <FormLabel
                pr={0}
                fontSize="sm"
                htmlFor={name}
                display="flex"
                justifyContent="space-between"
                alignItems="flex-end">
                <FormattedMessage id={`field.${fieldName || name}`} />
                {!isRequired && <Optional />}
            </FormLabel>
            <Input
                {...input}
                type={type}
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
};

InputField.defaultProps = {
    helperText: undefined,
    gridArea: undefined,
    fieldName: undefined,
    isRequired: false,
    type: 'text',
};

export default InputField;
