/* eslint-disable no-console */
import React from 'react';
import Chance from 'chance';
import {ButtonGroup} from '@chakra-ui/core';
import ViewSection from './view-section';
import DataList from './data-list';
import toDateString from '../to-date-string';
import ProviderDecorator from '../provider-decorator';
import SecondaryButton from '../components/secondary-button';

const chance = new Chance();

export const DefaultStory = () => (
    <ViewSection
        title="common.core-data"
        actions={
            <ButtonGroup>
                <SecondaryButton>action 1</SecondaryButton>
                <SecondaryButton>action 2</SecondaryButton>
                <SecondaryButton>action 3</SecondaryButton>
                <SecondaryButton>action 4</SecondaryButton>
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
