/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {action} from '@storybook/addon-actions';
import {Box, List, ListItem} from '@chakra-ui/core';
import LinkTo from '@storybook/addon-links/dist/react';
import FormDivider from './form-divider';
import FormSection from './form-section';
import InputField from '../form-fields/input-field';
import SelectField from '../form-fields/select-field';
import DateField from '../form-fields/date-field';
import PageSection from './page-section';
import PrimaryButton from '../components/primary-button';
import {InlineCode} from '../../.storybook/code';
import ProviderDecorator from '../provider-decorator';

const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'validation.required';
    if (!values.birthday) errors.birthday = 'validation.required';
    return errors;
};

const gridTemplateAreas1 = `
'name name name'
'customerNumber customerNumber .'`;

const gridTemplateAreas2 = `
'birthday birthday .'
'skillLevel skillLevel .'`;

export const Description = () => (
    <Box bg="white" p={5}>
        A <InlineCode>FormSection</InlineCode> is used to group relevant input
        fields. You would typically group information like <b>Personal Data</b>{' '}
        or <b>Account Information</b>. Formlabels should be self-explanatory. If
        they are not, you can use the <i>helperText</i> prop on any InputField.
        Some examples can be found here:
        <List m={5} styleType="disc">
            <ListItem>
                <LinkTo story="simple-form-section">
                    Simple FormSection Example
                </LinkTo>
            </ListItem>
            <ListItem>
                <LinkTo story="form-with-page-section">
                    Example Form PageSection
                </LinkTo>
            </ListItem>
        </List>
    </Box>
);

Description.story = {
    name: 'description',
};

export const SimpleFormSection = () => (
    <Form
        initialValues={{}}
        validate={validate}
        subscription={{submitting: true}}
        onSubmit={action('onSubmit')}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <FormSection
                    gridTemplateAreas={gridTemplateAreas1}
                    title="common.formsection.title">
                    <InputField
                        name="name"
                        isRequired
                        helperText="Name and Surname"
                    />
                    <InputField
                        name="customerNumber"
                        type="number"
                        helperText="A customer number looks like this: 373687324"
                    />
                </FormSection>
            </form>
        )}
    </Form>
);

SimpleFormSection.story = {
    name: 'simple-form-section',
};

export const FormWithPageSection = () => (
    <Form
        initialValues={{}}
        validate={validate}
        subscription={{submitting: true}}
        onSubmit={action('onSubmit')}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <PageSection
                    title="common.pagesection.title"
                    isPrimary
                    actions={
                        <PrimaryButton type="submit">Submit</PrimaryButton>
                    }>
                    <FormSection
                        gridTemplateAreas={gridTemplateAreas1}
                        title="common.formsection.title">
                        <InputField
                            name="name"
                            isRequired
                            helperText="Name and Surname"
                        />
                        <InputField
                            name="customerNumber"
                            type="number"
                            helperText="A customer number looks like this: 373687324"
                        />
                    </FormSection>
                    <FormDivider />
                    <FormSection
                        gridTemplateAreas={gridTemplateAreas2}
                        title="common.formsection.title">
                        <DateField name="birthday" isRequired />
                        <SelectField
                            name="skillLevel"
                            options={[
                                {value: '', label: 'Select...'},
                                {value: 'beginner', label: 'Beginner'},
                                {value: 'pro', label: 'Professional'},
                            ]}
                        />
                    </FormSection>
                </PageSection>
            </form>
        )}
    </Form>
);

FormWithPageSection.story = {
    name: 'form-with-page-section',
};

export default {
    title: 'Patterns|FormSection',
    component: FormSection,
    decorators: [ProviderDecorator],
};
