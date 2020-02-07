/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import CurrencyField from './currency-field';
import ProviderDecorator from '../provider-decorator';

const disable = true;

export const DateFieldStory = () => (
    <Form
        initialValues={{
            name: '',
        }}
        validate={() => {}}
        subscription={{submitting: true}}
        onSubmit={values => console.log(values)}>
        {() => (
            <form>
                <CurrencyField name="fieldEnabled" />
                <CurrencyField name="fieldDisabled" isDisabled={disable} />
            </form>
        )}
    </Form>
);

DateFieldStory.story = {
    name: 'Input',
};

export default {
    title: 'Components|CurrencyField',
    component: CurrencyField,
    decorators: [ProviderDecorator],
};
