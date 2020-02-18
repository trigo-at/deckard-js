/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {Button} from '@chakra-ui/core';
import CheckboxField from './checkbox-field';
import ProviderDecorator from '../provider-decorator';

/* The trigo design-system is a collection of Chakra UI Styled-Components. Trigo DS is like a wrapper 
    arround the official Chakra UI which allows for alot of custom modifications. */

// Note: passing {...props} makes all Chakra Component props available through the trigo design system

// List of all available Checkbox and Formcontrol props from the Chakra UI:

// -- Checkbox props --
// id="string"
// name="checkboxField1"
// value="stringOrNumber"
// variantColor="blue"
// defaultIsChecked={false}
// isChecked={false}
// isIndeterminate={false}
// isFullWidth={false}
// size="md"
// isDisabled={false}
// isInvalid={false}
// children={React.ReactNode}
// onChange={values => console.log(values)}
// onBlur={() => {}}
// onFocus={() => {}}
// aria-label="string"
// aria-labelledby="string"

// // -- FormControl props --
// isRequired
// isReadOnly={false}

const onSubmit = values => console.log(values);

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
                    onBlur={() => {}}
                    onFocus={() => {}}
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

CheckboxFieldStory.story = {
    name: 'default',
};

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
                    onBlur={() => {}}
                    onFocus={() => {}}
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

CheckboxFieldStory2.story = {
    name: 'with-initial-value',
};

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

CheckboxFieldStory3.story = {
    name: 'multiple',
};

export default {
    title: 'Components|CheckboxField',
    component: CheckboxField,
    decorators: [ProviderDecorator],
};
