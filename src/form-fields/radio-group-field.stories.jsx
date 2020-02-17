/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import RadioGroupField from './radio-group-field';
import ProviderDecorator from '../provider-decorator';

export const RadioGroupFieldStory = () => (
    <Form
        render={() => (
            <RadioGroupField
                name="radioGroup"
                fieldName="testFieldName"
                helperText="testHelperText"
                options={['Magister', 'Doktor', 'Ingenieur']}
            />
        )}
        onSubmit={() => {}}
    />
);

RadioGroupFieldStory.story = {
    name: 'default',
};

export default {
    title: 'Components|RadioGroupField',
    component: RadioGroupField,
    decorators: [ProviderDecorator],
};
