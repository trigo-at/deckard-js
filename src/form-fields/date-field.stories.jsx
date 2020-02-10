/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {parseISO, isValid} from 'date-fns';
import DateField from './date-field';
import ProviderDecorator from '../provider-decorator';

const validate = values => {
    const errors = {};
    if (!isValid(parseISO(values.date))) {
        errors.date = 'validation.invalid';
        console.log(values.date);
    }
};

export const DateFieldStory = () => (
    <Form
        initialValues={{
            name: '',
        }}
        validate={validate}
        subscription={{submitting: true}}
        onSubmit={values => console.log(values)}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <DateField name="date" isDisabled />
                <DateField name="date" />
            </form>
        )}
    </Form>
);

DateFieldStory.story = {
    name: 'Input',
};

export default {
    title: 'Components|DateField',
    component: DateField,
    decorators: [ProviderDecorator],
};
