import React, {useState, useEffect} from 'react';
import {string, node, bool, func} from 'prop-types';
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

const padString = value => `0${value}`.slice(-2);

const DateField = ({
    name,
    gridArea,
    fieldName,
    helperText,
    isRequired,
    isDisabled,
    ...props
}) => {
    const {input, meta} = useField(name);

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
        const areAllValuesSet = [year, month, day].every(v => v);
        const inputValue = !areAllValuesSet
            ? undefined
            : [year, padString(month), padString(day)].join('-');

        input.onChange(inputValue);
        if (props.onChange) {
            props.onChange(inputValue);
        }
    }, [year, month, day]);

    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);

    const handleChange = set => e => {
        set(e.target.value);
    };

    return (
        <FormControl
            as="fieldset"
            gridArea={gridArea || name}
            isInvalid={isInvalid}
            isDisabled={isDisabled}>
            <FormLabel as="legend" htmlFor={name}>
                <FormattedMessage id={`field.${fieldName || name}`} />{' '}
                {!isRequired && <Optional />}
            </FormLabel>
            <Stack isInline spacing={4}>
                <Input
                    width={20}
                    maxLength={2}
                    name={`${name}.day`}
                    value={day || ''}
                    onChange={handleChange(setDay)}
                />
                <Input
                    width={20}
                    maxLength={2}
                    name={`${name}.month`}
                    value={month || ''}
                    onChange={handleChange(setMonth)}
                />
                <Input
                    width={40}
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
};

DateField.defaultProps = {
    gridArea: undefined,
    fieldName: undefined,
    helperText: undefined,
    isRequired: false,
    isDisabled: false,
    onChange: undefined,
};

export default DateField;
