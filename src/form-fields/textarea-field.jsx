import React from 'react';
import {string, node, bool, object} from 'prop-types';
import {useField} from 'react-final-form';
import {
    FormControl,
    FormLabel,
    Textarea,
    FormHelperText,
} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';
import Optional from './optional';

const TextareaField = ({
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
        <FormControl
            gridArea={gridArea || name}
            isInvalid={isInvalid}
            id={input.name}>
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
            <Textarea {...input} {...props} />
            {helperText && (
                <FormHelperText fontSize="sm">
                    <FormattedMessage id={helperText} />
                </FormHelperText>
            )}
            <FieldError fontSize="sm" isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

TextareaField.propTypes = {
    name: string.isRequired,
    gridArea: string,
    fieldName: string,
    isRequired: bool,
    helperText: node,
    config: object,
};

TextareaField.defaultProps = {
    gridArea: undefined,
    fieldName: undefined,
    helperText: undefined,
    isRequired: false,
    config: undefined,
};

export default TextareaField;
