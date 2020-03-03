/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {parseISO, isValid} from 'date-fns';
import {Button} from '@chakra-ui/core';
import DateField from './date-field';
import ProviderDecorator from '../provider-decorator';

const validate = values => {
    const errors = {};
    if (!isValid(parseISO(values.date))) {
        errors.date = 'validation.invalid';
        console.log(values.date);
    }
};

const onSubmit = values => console.log(values);

export const DateFieldStory = () => (
    <Form
        initialValues={{
            dateWithValue: '2000-01-01',
        }}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <DateField
                    name="dateDisabled"
                    isDisabled
                    onChange={value => console.log(value)}
                />
                <DateField
                    name="dateEnabled"
                    onChange={value => console.log(value)}
                />
                <DateField
                    name="dateWithValue"
                    onChange={value => console.log(value)}
                />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

DateFieldStory.story = {
    name: 'default',
};
export const DateFieldStory2 = () => (
    <Form
        name="dateField"
        fieldName="testFieldName" // ??
        helperText={{}} // ??
        initialValues={{date: '2002-12-28'}}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <DateField name="date" isDisabled />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

DateFieldStory2.story = {
    name: 'disabled-with-initial-value',
};

export default {
    title: 'Components|DateField',
    component: DateField,
    decorators: [ProviderDecorator],
};
