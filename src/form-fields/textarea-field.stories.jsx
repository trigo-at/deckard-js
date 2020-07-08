/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {Button} from '@chakra-ui/core';
import TextareaField from './textarea-field';

const onSubmit = (values) => console.log(values);

export const TextareaFieldStory = () => (
    <Form onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <TextareaField
                    isRequired
                    name="textArea"
                    fieldName="testFieldName"
                    helperText="testHelperText"
                />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);
TextareaFieldStory.story = {
    name: 'default',
};
export const TextareaFieldStory2 = () => (
    <Form
        initialValues={{
            textArea: 'Hallo ich hab hier schonmal was geschrieben ...',
        }}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <TextareaField
                    name="textArea"
                    fieldName="testFieldName"
                    helperText="testHelperText"
                />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);
TextareaFieldStory2.story = {
    name: 'with-initial-value',
};

export default {
    title: 'Components|TextareaField',
    component: TextareaField,
};
