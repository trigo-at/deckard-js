import React, {useState, useEffect} from 'react';
import {string, node, bool, func, object, any} from 'prop-types';
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

const padString = (value) => `0${value}`.slice(-2);

const DateField = ({
    name,
    gridArea,
    fieldName,
    helperText,
    isRequired,
    isDisabled,
    config,
    emptyValue,
    ...props
}) => {
    const {input, meta} = useField(name, config);

    const {value, onBlur} = input;
    const [y, m, d] = value.split('-');

    const [year, setYear] = useState(y);
    const [month, setMonth] = useState(m);
    const [day, setDay] = useState(d);

    useEffect(() => {
        if (!value) {
            setYear('');
            setMonth('');
            setDay('');
        }
    }, [value]);

    useEffect(() => {
        const areAllValuesSet = [year, month, day].every((v) => v);
        const inputValue = !areAllValuesSet
            ? emptyValue
            : [year, padString(month), padString(day)].join('-');

        input.onChange(inputValue);
        if (props.onChange) {
            props.onChange(inputValue);
        }
    }, [year, month, day]);

    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);

    const handleChange = (set) => (e) => {
        set(e.target.value);
    };

    return (
        <FormControl
            as="fieldset"
            gridArea={gridArea || name}
            isInvalid={isInvalid}
            isDisabled={isDisabled}>
            <FormLabel
                fontSize="sm"
                as="legend"
                htmlFor={name}
                display="flex"
                pr={0}
                width="full"
                justifyContent="space-between"
                alignItems="flex-end">
                <FormattedMessage id={`field.${fieldName || name}`} />
                {!isRequired && <Optional />}
            </FormLabel>
            <Stack isInline spacing={4}>
                <Input
                    width="25%"
                    maxLength={2}
                    name={`${name}.day`}
                    value={day || ''}
                    onChange={handleChange(setDay)}
                />
                <Input
                    width="25%"
                    maxLength={2}
                    name={`${name}.month`}
                    value={month || ''}
                    onChange={handleChange(setMonth)}
                />
                <Input
                    width="50%"
                    maxLength={4}
                    onBlur={onBlur}
                    value={year || ''}
                    name={`${name}.year`}
                    onChange={handleChange(setYear)}
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
    isDisabled: bool,
    helperText: node,
    onChange: func,
    config: object,
    emptyValue: any,
};

DateField.defaultProps = {
    gridArea: undefined,
    fieldName: undefined,
    helperText: undefined,
    isRequired: false,
    isDisabled: false,
    onChange: undefined,
    config: undefined,
    emptyValue: undefined,
};

export default DateField;
