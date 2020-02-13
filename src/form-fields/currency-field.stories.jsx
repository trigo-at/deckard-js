/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import CurrencyField from './currency-field';
import ProviderDecorator from '../provider-decorator';

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
                <CurrencyField name="fieldHeaderText" />
            </form>
        )}
    </Form>
);

DateFieldStory.story = {
    name: 'enabled',
};

export const DateFieldStory2 = () => (
    <Form
        initialValues={{
            name: '',
        }}
        validate={() => {}}
        subscription={{submitting: true}}
        onSubmit={values => console.log(values)}>
        {() => (
            <form>
                <CurrencyField name="fieldHeaderText" isDisabled />
            </form>
        )}
    </Form>
);

DateFieldStory2.story = {
    name: 'disabled',
};

export const DateFieldStory3 = () => (
    <Form
        initialValues={{
            name: '',
        }}
        validate={() => {}}
        subscription={{submitting: true}}
        onSubmit={values => console.log(values)}>
        {() => (
            <form>
                <CurrencyField name="fieldHeaderText" />
                <CurrencyField name="fieldHeaderText" />
                <CurrencyField name="fieldHeaderText" />
                <CurrencyField name="fieldHeaderText" />
                <CurrencyField name="fieldHeaderText" isDisabled />
                <CurrencyField name="fieldHeaderText" isDisabled />
            </form>
        )}
    </Form>
);

DateFieldStory3.story = {
    name: 'mixed',
};

export default {
    title: 'Components|CurrencyField',
    component: CurrencyField,
    decorators: [ProviderDecorator],
};
