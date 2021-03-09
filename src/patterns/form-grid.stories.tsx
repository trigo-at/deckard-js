/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Form} from 'react-final-form';
import {action} from '@storybook/addon-actions';
import {Box, List, ListItem, Stack} from '@chakra-ui/react';
import LinkTo from '@storybook/addon-links/dist/react';
import {FormattedMessage} from 'react-intl';
import {FormGrid, FormGridProps} from './form-grid';
import InputField from '../form-fields/input-field';
import SelectField from '../form-fields/select-field';
import DateField from '../form-fields/date-field';
import PrimaryButton from '../buttons/primary-button';
import {InlineCode} from '../../.storybook/code';
import ProviderDecorator from '../provider-decorator';
import {Card} from '../data-display/card';
import {CardHeader} from '../headings/card-header';
import {PageHeader} from '../headings/page-header';
import {ContentContainer} from '../application-shells/content-container';

const validate = (values) => {
    const errors = {};
    // @ts-ignore
    if (!values.name) errors.name = 'validation.required';
    // @ts-ignore
    if (!values.birthday) errors.birthday = 'validation.required';
    return errors;
};

const gridTemplateAreas1 = `
'name name name'
'customerNumber customerNumber .'`;

const gridTemplateAreas2 = `
'birthday birthday .'
'skillLevel skillLevel .'`;

export default {
    title: 'Patterns/FormGrid',
    component: FormGrid,
    decorators: [ProviderDecorator],
} as Meta;

export const Description: Story = () => (
    <Box bg="white" p={5}>
        A <InlineCode>FormGrid</InlineCode> is used to group relevant input
        fields. You would typically group information like <b>Personal Data</b>{' '}
        or <b>Account Information</b>. Formlabels should be self-explanatory. If
        they are not, you can use the <i>helperText</i> prop on any InputField.
        <InlineCode>FormGrid</InlineCode> is usually used within a{' '}
        <InlineCode>Card</InlineCode> component. Some examples can be found
        here:
        <List m={5} styleType="disc">
            <ListItem>
                <LinkTo story="simple-form-section">
                    Simple FormGrid Example
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

Description.storyName = 'description';

export const SimpleFormGrid: Story<FormGridProps> = (args) => (
    <Form
        initialValues={{}}
        validate={validate}
        subscription={{submitting: true}}
        onSubmit={action('onSubmit')}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <ContentContainer py={4}>
                    <Card
                        heading={
                            <CardHeader
                                heading={
                                    <FormattedMessage id="common.formsection.title" />
                                }
                            />
                        }>
                        <FormGrid
                            {...args}
                            gridTemplateAreas={gridTemplateAreas1}>
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
                        </FormGrid>
                    </Card>
                </ContentContainer>
            </form>
        )}
    </Form>
);

SimpleFormGrid.storyName = 'simple-form-grid';

export const FormWithPageSection: Story<FormGridProps> = () => (
    <Form
        initialValues={{}}
        validate={validate}
        subscription={{submitting: true}}
        onSubmit={action('onSubmit')}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <ContentContainer>
                    <PageHeader
                        heading="common.pagesection.title"
                        actions={
                            <PrimaryButton type="submit">Submit</PrimaryButton>
                        }
                    />
                    <Stack py={4} spacing={6}>
                        <Card
                            heading={
                                <CardHeader
                                    heading={
                                        <FormattedMessage id="common.formsection.title" />
                                    }
                                />
                            }>
                            <FormGrid gridTemplateAreas={gridTemplateAreas1}>
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
                            </FormGrid>
                        </Card>
                        <Card
                            heading={
                                <CardHeader
                                    heading={
                                        <FormattedMessage id="common.formsection.title" />
                                    }
                                />
                            }>
                            <FormGrid gridTemplateAreas={gridTemplateAreas2}>
                                <DateField name="birthday" isRequired />
                                <SelectField
                                    name="skillLevel"
                                    options={[
                                        {value: '', label: 'Select...'},
                                        {value: 'beginner', label: 'Beginner'},
                                        {value: 'pro', label: 'Professional'},
                                    ]}
                                />
                            </FormGrid>
                        </Card>
                    </Stack>
                </ContentContainer>
            </form>
        )}
    </Form>
);

FormWithPageSection.storyName = 'form-with-page-section';
