/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {Button} from '@chakra-ui/core';
import InputField from './input-field';
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
                <InputField name="name" isRequired />
                <InputField name="optional" />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

InputStory.story = {
    name: 'default',
};
export const InputStory2 = () => (
    <Form
        initialValues={{
            name: 'testInitialValue',
        }}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <InputField name="name" isRequired />
                <InputField name="optional" />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

InputStory2.story = {
    name: 'with-initial-value',
};

export default {
    title: 'Components|InputField',
    component: InputField,
    decorators: [ProviderDecorator],
};
