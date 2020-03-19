import React from 'react';
import {FormattedMessage} from 'react-intl';
import CheckboxGroupField from './checkbox-group-field';

const FormattedCheckboxGroupField = props => {
    return (
        <CheckboxGroupField
            {...props}
            renderOption={({option, fieldName, name}) => (
                <FormattedMessage id={`${fieldName || name}.${option}`} />
            )}
        />
    );
};

FormattedCheckboxGroupField.propTypes = {
    ...CheckboxGroupField.propTypes,
};

FormattedCheckboxGroupField.defaultProps = {
    ...CheckboxGroupField.defaultProps,
};

export default FormattedCheckboxGroupField;
