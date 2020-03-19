/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {Button} from '@chakra-ui/core';
import CheckboxGroupField from './checkbox-group-field';
import FormattedCheckboxGroupField from './formatted-checkbox-group-field';
import ProviderDecorator from '../provider-decorator';

const validate = values => {
    const errors = {};
    if (!values.titles) {
        errors.titles = 'validation.required';
    }
    return errors;
};

const onSubmit = values => console.log(values);

export const CheckboxGroupFieldStory = () => (
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
                    fieldName="string" // headerText
                    name="titles" // have to match with initialValues property name
                    isRequired
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

CheckboxGroupFieldStory.story = {
    name: 'default',
};

export const CheckboxGroupFieldStory2 = () => (
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
                    helperText="customHelperText"
                    fieldName="string"
                    name="titles"
                    isRequired
                    options={['Magister / Magistra der Philosophie Mag. phil.']}
                />
                <Button mt="1em" type="submit">
                    submit
                </Button>
            </form>
        )}
    </Form>
);

CheckboxGroupFieldStory2.story = {
    name: 'withHelperText',
};

export const FormattedCheckboxGroupFieldStory = () => (
    <Form
        initialValues={{
            titles: ['translation1'],
        }}
        validate={validate}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <FormattedCheckboxGroupField
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

FormattedCheckboxGroupFieldStory.story = {
    name: 'formatted',
};

export default {
    title: 'Components|CheckboxGroupField',
    component: CheckboxGroupField,
    decorators: [ProviderDecorator],
};
