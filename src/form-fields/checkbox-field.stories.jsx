/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {Button} from '@chakra-ui/core';
import CheckboxField from './checkbox-field';
import ProviderDecorator from '../provider-decorator';

/*  The trigo design-system is a collection of Chakra UI Styled-Components.
    Trigo DS is like a wrapper arround the official Chakra UI,
    which allows for alot of custom modifications.  */

/*  Note: passing {...props} makes all Chakra Component props available,
    through the trigo design system */

const onSubmit = (values) => console.log(values);

export const CheckboxFieldStory = () => (
    <Form initialValues={{}} onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CheckboxField
                    id="string"
                    name="checkboxField1"
                    value="stringOrNumber"
                    variantColor="blue"
                    size="md"
                    onBlur={() => {
                        console.log('onBlur');
                    }}
                    onFocus={() => {
                        console.log('onFocus');
                    }}
                    aria-label="string"
                    aria-labelledby="string"
                    isRequired
                />
                <Button mt="1" type="submit">
                    submit
                </Button>
            </form>
        )}
    </Form>
);

CheckboxFieldStory.storyName = 'default';

export const CheckboxFieldStory2 = () => (
    <Form initialValues={{checkboxField1: true}} onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CheckboxField
                    isRequired
                    id="string"
                    name="checkboxField1"
                    value="stringOrNumber"
                    variantColor="blue"
                    size="md"
                    onBlur={() => {
                        console.log('onBlur');
                    }}
                    onFocus={() => {
                        console.log('onFocus');
                    }}
                    aria-label="string"
                    aria-labelledby="string"
                />
                <Button mt="1" type="submit">
                    submit
                </Button>
            </form>
        )}
    </Form>
);

CheckboxFieldStory2.storyName = 'with-initial-value';

export const CheckboxFieldStory3 = () => (
    <Form onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CheckboxField name="a" />
                <CheckboxField name="b" />
                <CheckboxField name="c" />
                <Button mt="1em" size="md" variantColor="teal" type="submit">
                    submit
                </Button>
            </form>
        )}
    </Form>
);

CheckboxFieldStory3.storyName = 'multiple';

export default {
    title: 'Components/CheckboxField',
    component: CheckboxField,
    decorators: [ProviderDecorator],
};
