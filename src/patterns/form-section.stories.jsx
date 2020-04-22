/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import FormDivider from './form-divider';
import FormSection from './form-section';
import InputField from '../form-fields/input-field';
import PageSection from './page-section';
import ProviderDecorator from '../provider-decorator';
import PrimaryButton from '../components/primary-button';

const validate = (values) => {
    const errors = {};
    if (!values.someField) {
        errors.someField = 'validation.required';
    }
    return errors;
};

const gridTemplateAreas = `
'someField . .'
'someOtherField someOtherField .'`;

export const FormSectionStory = () => (
    <Form
        initialValues={{}}
        validate={validate}
        subscription={{submitting: true}}
        onSubmit={(values) => console.log(values)}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <PageSection
                    title="page-section.title"
                    isPrimary
                    actions={
                        <PrimaryButton type="submit">submit</PrimaryButton>
                    }>
                    <FormSection
                        gridTemplateAreas={gridTemplateAreas}
                        title="form-section.title1"
                        description="form-section.description1">
                        <InputField
                            name="someField"
                            isRequired
                            helperText="some helper text"
                        />
                        <InputField
                            name="someOtherField"
                            helperText="some helper text"
                        />
                    </FormSection>
                    <FormDivider />
                    <FormSection
                        gridTemplateAreas={gridTemplateAreas}
                        title="form-section.title2">
                        <InputField
                            name="someField"
                            isRequired
                            helperText="some helper text"
                        />
                        <InputField
                            name="someOtherField"
                            helperText="some helper text"
                        />
                    </FormSection>
                </PageSection>
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
