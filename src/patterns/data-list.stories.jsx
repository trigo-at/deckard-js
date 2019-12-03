import React from 'react';
import DataList from './data-list';
import ProviderDecorator from '../provider-decorator';

const values = [
    {
        field: 'customerName',
        value: 'Max Mustermann',
    },
    {
        field: 'customerName',
        value: '42',
    },
];

export const DefaultStory = () => <DataList values={values} />;

DefaultStory.story = {
    name: 'default',
};

export default {
    title: 'Components|DataList',
    component: DataList,
    decorators: [ProviderDecorator],
};
