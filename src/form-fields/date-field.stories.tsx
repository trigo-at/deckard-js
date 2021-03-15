/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Form} from 'react-final-form';
import {parseISO, isValid} from 'date-fns';
import {Button} from '@chakra-ui/react';
import {DateField, DateFieldProps} from './date-field';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Form Controls/DateField',
    component: DateField,
    decorators: [ProviderDecorator],
} as Meta;

const validate = (values) => {
    const errors = {};
    if (!isValid(parseISO(values.date))) {
        // @ts-ignore
        errors.date = 'validation.invalid';
    }
    return errors;
};

const onSubmit = (values) => console.log(values);

const Template: Story<DateFieldProps> = (args) => (
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
                    onChange={(value) => console.log(value)}
                />
                <DateField
                    {...args}
                    name="dateEnabled"
                    onChange={(value) => console.log(value)}
                />
                <DateField
                    name="dateWithValue"
                    onChange={(value) => console.log(value)}
                />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

export const BaseStory = Template.bind({});
BaseStory.args = {};
BaseStory.storyName = 'base';
