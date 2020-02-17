/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import TextareaField from './textarea-field';
import ProviderDecorator from '../provider-decorator';

export const TextareaFieldStory = () => (
    <Form onSubmit={() => {}}>
        {() => (
            <TextareaField
                name="textArea"
                fieldName="testFieldName"
                helperText="testHelperText"
            />
        )}
    </Form>
);
TextareaFieldStory.story = {
    name: 'default',
};

export default {
    title: 'Components|TextareaField',
    component: TextareaField,
    decorators: [ProviderDecorator],
};
