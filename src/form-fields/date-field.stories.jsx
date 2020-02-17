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
        name="dateField"
        fieldName="testFieldName" // ??
        helperText={{}} // ??
        initialValues={{}}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <DateField name="date" />
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
        initialValues={{}}
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
    name: 'disabled',
};

export default {
    title: 'Components|DateField',
    component: DateField,
    decorators: [ProviderDecorator],
};
