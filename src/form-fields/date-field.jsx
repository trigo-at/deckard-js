import React from 'react';
import {string, node, bool} from 'prop-types';
import {useField} from 'react-final-form';
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Stack,
} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';
import Optional from './optional';

const DateField = ({
    name,
    gridArea,
    fieldName,
    helperText,
    isRequired,
    ...props
}) => {
    const {input, meta} = useField(name);
    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    const {value, onBlur} = input;
    const [year, month, day] = value.split('-');

    const handleDayChange = e => {
        input.onChange(`${year || ''}-${month || ''}-${e.target.value || ''}`);
    };
    const handleMonthChange = e => {
        input.onChange(`${year || ''}-${e.target.value || ''}-${day || ''}`);
    };
    const handleYearChange = e => {
        input.onChange(`${e.target.value || ''}-${month || ''}-${day || ''}`);
    };
    return (
        <FormControl
            as="fieldset"
            gridArea={gridArea || name}
            isInvalid={isInvalid}>
            <FormLabel as="legend" htmlFor={name}>
                <FormattedMessage id={`field.${fieldName || name}`} />{' '}
                {!isRequired && <Optional />}
            </FormLabel>
            <Stack isInline spacing={4}>
                <Input
                    width={20}
                    maxLength={2}
                    onChange={handleDayChange}
                    onBlur={onBlur}
                    value={day || ''}
                    name={`${name}.day`}
                    {...props}
                />
                <Input
                    width={20}
                    maxLength={2}
                    onChange={handleMonthChange}
                    onBlur={onBlur}
                    value={month || ''}
                    name={`${name}.month`}
                    {...props}
                />
                <Input
                    width={40}
                    maxLength={4}
                    onChange={handleYearChange}
                    onBlur={onBlur}
                    value={year || ''}
                    name={`${name}.year`}
                    {...props}
                />
            </Stack>
            {helperText && (
                <FormHelperText>
                    <FormattedMessage id={helperText} />
                </FormHelperText>
            )}
            <FieldError isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

DateField.propTypes = {
    name: string.isRequired,
    gridArea: string,
    fieldName: string,
    isRequired: bool,
    helperText: node,
};

DateField.defaultProps = {
    gridArea: undefined,
    fieldName: undefined,
    helperText: undefined,
    isRequired: false,
};

export default DateField;
