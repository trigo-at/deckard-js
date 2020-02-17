/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import SelectField from './select-field';
import ProviderDecorator from '../provider-decorator';

export const SelectFieldStory = () => (
    <Form
        render={() => (
            <SelectField
                hasPlaceholder
                name="alsoPlaceHolderName"
                fieldName="testFieldName"
                helperText="testHelperText"
                options={[
                    {value: 'Dr', label: 'Doktor'},
                    {value: 'Mag', label: 'Magister'},
                    {value: 'Ing', label: 'Ingenieur'},
                ]}
            />
        )}
        onSubmit={() => {}}
    />
);

SelectFieldStory.story = {
    name: 'SelectField',
};

export default {
    title: 'Components|SelectField',
    component: SelectField,
    decorators: [ProviderDecorator],
};
