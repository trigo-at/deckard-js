/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Form} from 'react-final-form';
import {Button} from '@chakra-ui/react';
import {
    CheckboxGroupField,
    CheckboxGroupFieldProps,
} from './checkbox-group-field';
import {FormattedCheckboxGroupField} from './formatted-checkbox-group-field';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Components/CheckboxGroupField',
    component: CheckboxGroupField,
    decorators: [ProviderDecorator],
} as Meta;

const validate = (values) => {
    const errors = {};
    if (!values.titles || !values.titles.length) {
        // @ts-ignore
        errors.titles = 'validation.required';
    }
    return errors;
};

const onSubmit = (values) => console.log(values);

export const CheckboxGroupFieldStory: Story<CheckboxGroupFieldProps> = (
    args
) => (
    <Form
        initialValues={{
            titles: [
                'Diplom-Tierarzt / Diplom-Tierärztin Mag. med. vet.',
                'Doktor / Doktorin der gesamten Heilkunde Dr. med. univ.',
            ],
        }}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CheckboxGroupField
                    {...args}
                    fieldName="string" // headerText
                    name="titles" // have to match with initialValues property name
                    options={[
                        'Diplom-Ingenieur / Diplom-Ingenieurin DI or Dipl.-Ing.',
                        'Diplom-Tierarzt / Diplom-Tierärztin Mag. med. vet.',
                        'Doktor / Doktorin der gesamten Heilkunde Dr. med. univ.',
                        'Doktor / Doktorin der Zahnheilkunde Dr. med. dent.',
                        'Magister / Magistra der Naturwissenschaften Mag. rer. nat.',
                        'Magister / Magistra der Philosophie Mag. phil.',
                    ]}
                />
                <button type="submit">submit</button>
            </form>
        )}
    </Form>
);

CheckboxGroupFieldStory.storyName = 'default';

export const CheckboxGroupFieldStory2: Story<CheckboxGroupFieldProps> = (
    args
) => (
    <Form
        initialValues={{
            titles: [
                'Diplom-Tierarzt / Diplom-Tierärztin Mag. med. vet.',
                'Doktor / Doktorin der gesamten Heilkunde Dr. med. univ.',
            ],
        }}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CheckboxGroupField
                    {...args}
                    helperText="customHelperText"
                    fieldName="string"
                    name="titles"
                    options={['Magister / Magistra der Philosophie Mag. phil.']}
                />
                <Button mt="1em" type="submit">
                    submit
                </Button>
            </form>
        )}
    </Form>
);

CheckboxGroupFieldStory2.storyName = 'withHelperText';

export const FormattedCheckboxGroupFieldStory: Story<CheckboxGroupFieldProps> = (
    args
) => (
    <Form
        initialValues={{
            titles: ['translation1'],
        }}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <FormattedCheckboxGroupField
                    {...args}
                    helperText="customHelperText"
                    fieldName="string"
                    name="titles"
                    isRequired
                    options={['translation1']}
                />
                <Button mt="1em" type="submit">
                    submit
                </Button>
            </form>
        )}
    </Form>
);

FormattedCheckboxGroupFieldStory.storyName = 'formatted';
