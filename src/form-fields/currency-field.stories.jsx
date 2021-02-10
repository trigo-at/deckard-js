/* eslint-disable no-console */
import React from 'react';
import {Form} from 'react-final-form';
import {Button} from '@chakra-ui/react';
import CurrencyField from './currency-field';
import ProviderDecorator from '../provider-decorator';

const onSubmit = (values) => console.log(values);

export const DateFieldStory = () => (
    <Form
        initialValues={{currencyField1: ''}}
        validate={() => {
            console.log('validate');
        }}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CurrencyField name="currencyField1" />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

DateFieldStory.storyName = 'default';

export const DateFieldStory2 = () => (
    <Form
        initialValues={{currencyField1: 'testInitialValue'}}
        validate={() => {
            console.log('validate');
        }}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CurrencyField name="currencyField1" />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

DateFieldStory2.storyName = 'with-initial-value';

export const DateFieldStory3 = () => (
    <Form
        initialValues={{name: ''}}
        validate={() => {
            console.log('validate');
        }}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CurrencyField isDisabled name="fieldHeaderText" />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

DateFieldStory3.storyName = 'disabled';

export const DateFieldStory4 = () => (
    <Form
        initialValues={{
            currencyField1: 'testInitialValue1',
            currencyField3: 'testInitialValue3',
        }}
        validate={() => {
            console.log('validate');
        }}
        onSubmit={onSubmit}>
        {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <CurrencyField name="currencyField1" />
                <CurrencyField name="currencyField2" />
                <CurrencyField name="currencyField3" isDisabled />
                <CurrencyField name="currencyField4" isDisabled />
                <Button type="submit">submit</Button>
            </form>
        )}
    </Form>
);

DateFieldStory4.storyName = 'mixed';

export default {
    title: 'Components/CurrencyField',
    component: CurrencyField,
    decorators: [ProviderDecorator],
};
