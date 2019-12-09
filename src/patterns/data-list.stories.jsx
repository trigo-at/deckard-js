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
        value: `asdfasdfasdfasdfasdfasdfl;aksjdf;lkasjdf;lkajsdf;a
            lksjdf;laksjdf;lajksdf;lkajsdf;lajksdf;lskdjf;alsdjfal;sdkjf;alskdjf;alks
            djfa;osdifujaoisdfuaoisdufaoisudfiou`,
        render: v => <pre>{v}</pre>,
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
