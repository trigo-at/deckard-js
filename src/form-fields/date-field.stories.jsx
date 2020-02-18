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
            dateWithValue: '2000-01-01',
        }}
        validate={validate}
        subscription={{submitting: true}}
        onSubmit={values => console.log(values)}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <DateField
                    name="dateDisabled"
                    isDisabled
                    onChange={e => console.log(e.target.value)}
                />
                <DateField
                    name="dateEnabled"
                    onChange={e => console.log(e.target.value)}
                />
                <DateField
                    name="dateWithValue"
                    onChange={e => console.log(e.target.value)}
                />
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
