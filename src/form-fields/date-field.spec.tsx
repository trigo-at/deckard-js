import React from 'react';
import {Form} from 'react-final-form';
import {IntlProvider} from 'react-intl';
import {render, fireEvent, cleanup} from '@testing-library/react';
import DateField from './date-field';

const renderInputMultiSelect = ({initialValues = {}, ...props}) =>
    render(
        <IntlProvider
            locale="en"
            messages={
                new Proxy({}, {get: () => 'get rid of missing error messages'})
            }>
            <Form
                initialValues={initialValues}
                subscription={{values: true}}
                onSubmit={() => {
                    console.log('submit');
                }}>
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <DateField name="date" {...props} />
                    </form>
                )}
            </Form>
        </IntlProvider>
    );

afterEach(cleanup);

[
    {events: {day: '1'}, result: undefined},
    {events: {month: '1'}, result: undefined},
    {events: {year: '2000'}, result: undefined},
    {events: {day: '1', month: '1'}, result: undefined},
    {events: {day: '1', year: '1'}, result: undefined},
    {events: {month: '1', year: '1'}, result: undefined},
    {events: {day: '1', month: '1', year: '2000'}, result: '2000-01-01'},
].forEach(({events, result}) => {
    it(`onChange reports ${result}, WHEN ${Object.keys(events).join(
        ', '
    )} changed`, () => {
        const onChange = jest.fn();
        const {container} = renderInputMultiSelect({onChange});
        Object.entries(events).forEach(([key, value]) => {
            fireEvent.change(container.querySelector(`[name="date.${key}"]`), {
                target: {value},
            });
        });

        expect(
            onChange.mock.calls[onChange.mock.calls.length - 1]
        ).toHaveProperty('0', result);
    });
});

it(`reports change when date was provided via initialValues`, () => {
    const onChange = jest.fn();
    const {container} = renderInputMultiSelect({
        onChange,
        initialValues: {date: '2000-01-01'},
    });

    fireEvent.change(container.querySelector(`[name="date.month"]`), {
        target: {value: 10},
    });

    expect(onChange.mock.calls[onChange.mock.calls.length - 1]).toHaveProperty(
        '0',
        '2000-10-01'
    );
});
