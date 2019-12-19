/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import InputField from './input-field';
import ProviderDecorator from '../provider-decorator';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'validation.required';
    }
    return errors;
};

export const InputStory = () => (
    <Form
        initialValues={{
            name: '',
        }}
        validate={validate}
        subscription={{submitting: true}}
        onSubmit={values => console.log(values)}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <InputField name="name" isRequired />
                <InputField name="optional" />
            </form>
        )}
    </Form>
);

InputStory.story = {
    name: 'Input',
};

export default {
    title: 'Components|Input',
    component: InputField,
    decorators: [ProviderDecorator],
};
