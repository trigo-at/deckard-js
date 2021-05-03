import React, {forwardRef} from 'react';
import {string, node, object} from 'prop-types';
import {useField} from 'react-final-form';
import {FormControl, Checkbox, FormHelperText} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';

const CheckboxField = forwardRef(
    (
        {
            name,
            gridArea,
            fieldName,
            helperText,
            label,
            formattedName,
            formattedPrefix,
            ...props
        },
        ref
    ) => {
        if (fieldName) {
            console.warn(
                'The property "fieldName" is deprecated. Use "formattedName" instead. "fieldName" will be removed in future versions.'
            );
        }
        const {input, meta} = useField(name, {type: 'checkbox'});
        const isInvalid =
            (!!meta.error && meta.touched) ||
            (!!meta.submitError &&
                !meta.dirtySinceLastSubmit &&
                !meta.submitting);
        return (
            <FormControl
                gridArea={gridArea || name}
                isInvalid={isInvalid}
                id={input.name}>
                <Checkbox
                    {...input}
                    {...props}
                    ref={ref}
                    isChecked={input.checked}>
                    {label || (
                        <FormattedMessage
                            id={`${formattedPrefix}.${
                                formattedName || fieldName || name
                            }`}
                        />
                    )}
                </Checkbox>
                {helperText && (
                    <FormHelperText>
                        <FormattedMessage id={helperText} />
                    </FormHelperText>
                )}
                <FieldError isInvalid={isInvalid} meta={meta} />
            </FormControl>
        );
    }
);

CheckboxField.propTypes = {
    name: string.isRequired,
    gridArea: string,
    fieldName: string,
    helperText: node,
    config: object,
    label: string,
    formattedName: string,
    formattedPrefix: string,
};

CheckboxField.defaultProps = {
    helperText: undefined,
    gridArea: undefined,
    fieldName: undefined,
    config: undefined,
    label: undefined,
    formattedName: undefined,
    formattedPrefix: 'field',
};

export default CheckboxField;
