/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import FormSection from './form-section';
import InputField from '../form-fields/input-field';
import ProviderDecorator from '../provider-decorator';

const validate = values => {
    const errors = {};
    if (!values.someField) {
        errors.someField = 'validation.required';
    }
    return errors;
};

const gridTemplateAreas = `
"someField someOtherField ."`;

export const FormSectionStory = () => (
    <Form
        initialValues={{}}
        validate={validate}
        subscription={{submitting: true}}
        onSubmit={values => console.log(values)}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <FormSection gridTemplateAreas={gridTemplateAreas}>
                    <InputField name="someField" isRequired />
                    <InputField
                        name="someOtherField"
                        isRequired
                        helperText="some helper text"
                    />
                </FormSection>
                <button type="submit">submit</button>
            </form>
        )}
    </Form>
);

FormSectionStory.story = {
    name: 'FormSection',
};

export default {
    title: 'Patterns|FormSection',
    component: FormSection,
    decorators: [ProviderDecorator],
};
