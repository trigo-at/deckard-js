/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import SelectField from './select-field';
import ProviderDecorator from '../provider-decorator';

export const SelectFieldStory = () => (
    <Form
        render={() => (
            <SelectField
                name="selectField1"
                helperText="testHelperText"
                options={[
                    {value: 'Dr', label: 'Doktor'},
                    {value: 'Mag', label: 'Magister'},
                    {value: 'Ing', label: 'Ingenieur'},
                ]}
            />
        )}
        onSubmit={() => {
            console.log('onSubmit');
        }}
    />
);

SelectFieldStory.story = {
    name: 'default',
};

export const SelectFieldStory2 = () => (
    <Form
        render={() => (
            <SelectField
                hasPlaceholder
                name="selectField1"
                fieldName="testFieldName"
                helperText="testHelperText"
                options={[
                    {value: 'Dr', label: 'Doktor'},
                    {value: 'Mag', label: 'Magister'},
                    {value: 'Ing', label: 'Ingenieur'},
                ]}
            />
        )}
        onSubmit={() => {
            console.log('onSubmit');
        }}
    />
);

SelectFieldStory2.story = {
    name: 'with-placeholder',
};

export default {
    title: 'Components|SelectField',
    component: SelectField,
    decorators: [ProviderDecorator],
};
