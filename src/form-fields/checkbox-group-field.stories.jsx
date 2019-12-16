/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import CheckboxGroupField from './checkbox-group-field';
import ProviderDecorator from '../provider-decorator';

const validate = values => {
    const errors = {};
    if (!values.titles) {
        errors.titles = 'validation.required';
    }
    return errors;
};

export const CheckboxGroupFieldStory = () => (
    <Form
        initialValues={{
            titles: [
                'Diplom-Tierarzt / Diplom-Tierärztin Mag. med. vet.',
                'Doktor / Doktorin der gesamten Heilkunde Dr. med. univ.',
            ],
        }}
        validate={validate}
        subscription={{submitting: true}}
        onSubmit={values => console.log(values)}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CheckboxGroupField
                    name="titles"
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
    name: 'Input',
};

export default {
    title: 'Components|CheckboxGroupField',
    component: CheckboxGroupField,
    decorators: [ProviderDecorator],
};
