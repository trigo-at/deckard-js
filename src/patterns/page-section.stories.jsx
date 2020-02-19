/* eslint-disable no-console */
import React from 'react';
import Chance from 'chance';
import {ButtonGroup, Button} from '@chakra-ui/core';
import PageSection from './page-section';
import ViewSection from './view-section';
import DataList from './data-list';
import toDateString from '../to-date-string';
import ProviderDecorator from '../provider-decorator';

const chance = new Chance();

export const DefaultStory = () => (
    <PageSection title="common.title">
        <div>asdfasdf</div>
    </PageSection>
);

DefaultStory.story = {
    name: 'default',
};

export const IsPrimaryStory = () => (
    <PageSection title="common.title" isPrimary>
        <div>asdfasdf</div>
    </PageSection>
);

IsPrimaryStory.story = {
    name: 'is-primary',
};

export const WithActionsStory = () => (
    <PageSection
        title="common.title"
        actions={
            <ButtonGroup>
                <Button>action 1</Button>
                <Button>action 2</Button>
                <Button>action 3</Button>
                <Button>action 4</Button>
            </ButtonGroup>
        }>
        <ViewSection
            title="common.core-data"
            actions={
                <ButtonGroup>
                    <Button>action 5</Button>
                    <Button>action 6</Button>
                    <Button>action 7</Button>
                    <Button>action 8</Button>
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
    </PageSection>
);

WithActionsStory.story = {
    name: 'with-actions',
};

export default {
    title: 'Patterns|PageSection',
    component: PageSection,
    decorators: [ProviderDecorator],
};
