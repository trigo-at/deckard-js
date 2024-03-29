/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {Button} from '@chakra-ui/react';
import RadioGroupField from './radio-group-field';
import FormattedRadioGroupField from './formatted-radio-group-field';
import ProviderDecorator from '../provider-decorator';

const onSubmit = (values) => console.log(values);

export const RadioGroupFieldStory = () => (
    <Form initialValues={{radioGroup: ''}} onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <RadioGroupField
                    name="radioGroup"
                    fieldName="testFieldName"
                    helperText="testHelperText"
                    options={['Magister', 'Doktor', 'Ingenieur']}
                />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

RadioGroupFieldStory.storyName = 'default';

export const RadioGroupFieldStory2 = () => (
    <Form initialValues={{radioGroup: 'Doktor'}} onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <RadioGroupField
                    name="radioGroup"
                    fieldName="testFieldName"
                    helperText="testHelperText"
                    options={['Magister', 'Doktor', 'Ingenieur']}
                />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

RadioGroupFieldStory2.storyName = 'with-initial-value';

export const FormattedRadioGroupFieldStory = () => (
    <Form initialValues={{radioGroup: 'Doktor'}} onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <FormattedRadioGroupField
                    name="radioGroup"
                    fieldName="testFieldName"
                    helperText="testHelperText"
                    options={['Magister', 'Doktor', 'Ingenieur']}
                />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

FormattedRadioGroupFieldStory.storyName = 'formatted';

export default {
    title: 'Components/RadioGroupField',
    component: RadioGroupField,
    decorators: [ProviderDecorator],
};
