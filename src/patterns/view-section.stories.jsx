/* eslint-disable no-console */
import React from 'react';
import Chance from 'chance';
import {ButtonGroup, Button} from '@chakra-ui/core';
import ViewSection from './view-section';
import DataList from './data-list';
import toDateString from '../to-date-string';
import ProviderDecorator from '../provider-decorator';

const chance = new Chance();

export const DefaultStory = () => (
    <ViewSection
        title="common.core-data"
        actions={
            <ButtonGroup>
                <Button>action 1</Button>
                <Button>action 2</Button>
                <Button>action 3</Button>
                <Button>action 4</Button>
            </ButtonGroup>
        }>
        <DataList
            values={[
                {
                    field: 'customerName',
                    value: chance.name(),
                },
                {
                    field: 'customerNumber',
                    value: chance.integer({min: 0}),
                },
                {
                    field: 'birthday',
                    value: toDateString(chance.date().toISOString()),
                },
            ]}
        />
    </ViewSection>
);

DefaultStory.story = {
    name: 'default',
};

export default {
    title: 'Patterns|ViewSection',
    component: ViewSection,
    decorators: [ProviderDecorator],
};
