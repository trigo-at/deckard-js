import React, {useRef} from 'react';
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
    const dayElement = useRef(null);
    const monthElement = useRef(null);
    const yearElement = useRef(null);
    const {input, meta} = useField(name);
    const domElements = {
        year: yearElement,
        month: monthElement,
        day: dayElement,
    };

    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);

    const {value, onBlur} = input;
    const [year, month, day] = value.split('-');

    const handleChange = idx => e => {
        const domRefs = {...domElements, [idx]: {current: e.target}};
        const allValues = Object.values(domRefs).map(
            domElement => domElement.current.value
        );
        const areAllValuesSet = allValues.every(v => v);
        const inputValue = !areAllValuesSet
            ? undefined
            : [
                  domRefs.year.current.value,
                  padString(domRefs.month.current.value),
                  padString(domRefs.day.current.value),
              ].join('-');

        input.onChange(inputValue);
        if (props.onChange) {
            props.onChange(inputValue);
        }
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
                    ref={dayElement}
                    width={20}
                    maxLength={2}
                    name={`${name}.day`}
                    defaultValue={day}
                    {...props}
                    onChange={handleChange('day')}
                />
                <Input
                    ref={monthElement}
                    width={20}
                    maxLength={2}
                    name={`${name}.month`}
                    defaultValue={month}
                    {...props}
                    onChange={handleChange('month')}
                />
                <Input
                    ref={yearElement}
                    width={40}
                    maxLength={4}
                    onBlur={onBlur}
                    defaultValue={year}
                    name={`${name}.year`}
                    {...props}
                    onChange={handleChange('year')}
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
