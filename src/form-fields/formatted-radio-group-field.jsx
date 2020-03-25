import React from 'react';
import {FormattedMessage} from 'react-intl';
import RadioGroupField from './radio-group-field';

const FormattedRadioGroupField = (props) => {
    return (
        <RadioGroupField
            {...props}
            renderOption={({option, fieldName, name}) => (
                <FormattedMessage id={`${fieldName || name}.${option}`} />
            )}
        />
    );
};

FormattedRadioGroupField.propTypes = {
    ...RadioGroupField.propTypes,
};

FormattedRadioGroupField.defaultProps = {
    ...RadioGroupField.defaultProps,
};

export default FormattedRadioGroupField;
