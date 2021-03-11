/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Form} from 'react-final-form';
import {Button} from '@chakra-ui/react';
import {InputField, InputFieldProps} from './input-field';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Form Controls/InputField',
    component: InputField,
    decorators: [ProviderDecorator],
} as Meta;

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        // @ts-ignore
        errors.name = 'validation.required';
    }
    return errors;
};

const onSubmit = (values) => console.log(values);

const Template: Story<InputFieldProps> = (args) => (
    <Form
        initialValues={{
            name: '',
            datetime: '2021-03-25T09:21',
            date: '2021-03-26',
            time: '09:21',
        }}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <InputField {...args} />
                <InputField name="optional" />
                <InputField name="datetime" type="datetime-local" />
                <InputField name="date" type="date" />
                <InputField name="time" type="time" />
                <InputField name="file" type="file" />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

export const BaseStory = Template.bind({});
BaseStory.args = {
    name: 'name',
    isRequired: true,
};
BaseStory.storyName = 'kitchen sink';
