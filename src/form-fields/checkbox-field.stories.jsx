/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {Button} from '@chakra-ui/core';
import CheckboxField from './checkbox-field';
import ProviderDecorator from '../provider-decorator';

/*  Trigos CheckboxField uses FormControl and Checkbox from Chakra UI.
    So you have access to the props from both Chakra Components. */

const onSubmit = values => console.log(values);

export const CheckboxFieldStory = () => (
    <Form onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CheckboxField
                    // -- FormControl props --
                    isRequired
                    isReadOnly={false}
                    // -- Checkbox props --
                    id="string"
                    name="string" // required prop
                    value="stringOrNumber"
                    variantColor="blue"
                    defaultIsChecked={false}
                    isChecked={false}
                    isIndeterminate={false}
                    isFullWidth={false}
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    // children={React.ReactNode}
                    // onChange={values => console.log(values)}
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

CheckboxFieldStory.story = {
    name: 'default',
};

export const CheckboxFieldStory2 = () => (
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

CheckboxFieldStory2.story = {
    name: 'multiple',
};

export default {
    title: 'Components|CheckboxField',
    component: CheckboxField,
    decorators: [ProviderDecorator],
};
