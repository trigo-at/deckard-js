/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import CurrencyField from './currency-field';
import ProviderDecorator from '../provider-decorator';

const onSubmit = values => console.log(values);

export const DateFieldStory = () => (
    <Form
        initialValues={{
            name: '',
        }}
        validate={() => {}}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
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
        onSubmit={onSubmit}>
        {() => <CurrencyField name="fieldHeaderText" isDisabled />}
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
        onSubmit={onSubmit}>
        {() => {
            return (
                <>
                    <CurrencyField name="fieldHeaderText" />
                    <CurrencyField name="fieldHeaderText" />
                    <CurrencyField name="fieldHeaderText" />
                    <CurrencyField name="fieldHeaderText" />
                    <CurrencyField name="fieldHeaderText" isDisabled />
                    <CurrencyField name="fieldHeaderText" isDisabled />
                </>
            );
        }}
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
