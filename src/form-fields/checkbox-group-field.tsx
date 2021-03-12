/* eslint-disable react/no-array-index-key */
import React, {ReactNode} from 'react';
import {useField} from 'react-final-form';
import {
    FormControl,
    FormLabel,
    CheckboxGroup,
    Checkbox,
    FormHelperText,
    Grid,
} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';

export type CheckboxGroupFieldProps = {
    name: string;
    gridArea?: string;
    fieldName?: string;
    options: string[];
    helperText?: string;
    renderOption: (option) => ReactNode;
    config: any;
};

export const CheckboxGroupField = ({
    name,
    gridArea,
    fieldName,
    options,
    helperText,
    renderOption,
    config,
}: CheckboxGroupFieldProps) => {
    const {input, meta} = useField(name, config);

    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    return (
        <FormControl
            id={name}
            as="fieldset"
            gridArea={gridArea || name}
            isInvalid={isInvalid}>
            <FormLabel fontSize="sm" as="legend">
                <FormattedMessage id={`field.${fieldName || name}`} />
            </FormLabel>
            <CheckboxGroup {...input}>
                <Grid
                    gap={4}
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                    }}>
                    {options.map((option, idx) => (
                        <Checkbox key={idx} value={option}>
                            {renderOption({option, fieldName, name})}
                        </Checkbox>
                    ))}
                </Grid>
            </CheckboxGroup>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
            <FieldError isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

CheckboxGroupField.defaultProps = {
    gridArea: undefined,
    fieldName: undefined,
    helperText: undefined,
    renderOption: ({option}) => option,
    config: undefined,
};

export default CheckboxGroupField;
