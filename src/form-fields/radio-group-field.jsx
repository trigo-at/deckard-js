import React from 'react';
import {string, arrayOf, func, object} from 'prop-types';
import {useField} from 'react-final-form';
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormHelperText,
    Grid,
} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';

const RadioGroupField = ({
    name,
    gridArea,
    fieldName,
    options,
    helperText,
    renderOption,
    config,
    ...props
}) => {
    const {input, meta} = useField(name, config);
    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    return (
        <FormControl
            as="fieldset"
            gridArea={gridArea || name}
            isInvalid={isInvalid}
            id={input.name}>
            <FormLabel fontSize="sm" as="legend">
                <FormattedMessage id={`field.${fieldName || name}`} />
            </FormLabel>
            <RadioGroup {...input} {...props} id={name}>
                <Grid
                    gap={4}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                    }}>
                    {options.map((option) => (
                        <Radio key={option} value={option}>
                            {renderOption({option, fieldName, name})}
                        </Radio>
                    ))}
                </Grid>
            </RadioGroup>
            {helperText && (
                <FormHelperText>
                    <FormattedMessage id={helperText} />
                </FormHelperText>
            )}
            <FieldError isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

RadioGroupField.propTypes = {
    name: string.isRequired,
    gridArea: string,
    fieldName: string,
    options: arrayOf(string).isRequired,
    helperText: string,
    renderOption: func,
    config: object,
};

RadioGroupField.defaultProps = {
    gridArea: undefined,
    fieldName: undefined,
    helperText: undefined,
    renderOption: ({option}) => option,
    config: undefined,
};

export default RadioGroupField;
