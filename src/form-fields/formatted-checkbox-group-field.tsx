import React from 'react';
import {FormattedMessage} from 'react-intl';
import {
    CheckboxGroupField,
    CheckboxGroupFieldProps,
} from './checkbox-group-field';

export const FormattedCheckboxGroupField = (props: CheckboxGroupFieldProps) => {
    return (
        <CheckboxGroupField
            {...props}
            renderOption={({option, fieldName, name}) => (
                <FormattedMessage id={`${fieldName || name}.${option}`} />
            )}
        />
    );
};

FormattedCheckboxGroupField.defaultProps = {
    ...CheckboxGroupField.defaultProps,
};

export default FormattedCheckboxGroupField;
