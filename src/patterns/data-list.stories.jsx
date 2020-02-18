import React from 'react';
import {Button} from '@chakra-ui/core';
import DataList from './data-list';
import ProviderDecorator from '../provider-decorator';

const values = [
    {
        field: 'customerName',
        value: 'Max Mustermann',
        link: 'https://chakra-ui.com',
        isExternal: true,
        format: 'modify the value input with this',
    },
    {
        field: 'customerName2',
        value: `Lisa Musterfrau`,
        link: 'https://chakra-ui.com',
        isExternal: true, // opens a new tab if you click the link
        render: value => <Button>{value}</Button>, // wrap your values with an component (link does not work then)
    },
];

export const DataListStory = () => <DataList values={values} />;

DataListStory.story = {
    name: 'default',
};
export const DataListStory2 = () => <DataList />;

DataListStory2.story = {
    name: 'no-values',
};

export default {
    title: 'Components|DataList',
    component: DataList,
    decorators: [ProviderDecorator],
};
