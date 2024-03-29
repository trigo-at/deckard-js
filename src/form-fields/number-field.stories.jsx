/* eslint-disable no-console */
/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import NumberField from './input-field';
import ProviderDecorator from '../provider-decorator';

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'validation.required';
    }
    return errors;
};

const onSubmit = (values) => console.log(values);

export const InputStory = () => (
    <Form
        initialValues={{
            name: '',
        }}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <NumberField name="name" isRequired />
                <NumberField name="optional" />
            </form>
        )}
    </Form>
);

InputStory.storyName = 'default';

export const InputStory2 = () => (
    <Form
        initialValues={{
            name: 'testInitialValue',
        }}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <NumberField name="name" isRequired />
                <NumberField name="optional" />
            </form>
        )}
    </Form>
);

InputStory2.storyName = 'with-initial-value';

export default {
    title: 'Components/NumberField',
    component: NumberField,
    decorators: [ProviderDecorator],
};
