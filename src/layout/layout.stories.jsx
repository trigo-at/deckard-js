/* eslint-disable no-console */
import React from 'react';
import {Stack, Button} from '@chakra-ui/core';
import Layout from './layout';
import Header from './header';
import Aside from './aside';
import Logo from './logo';
import NavSection from './nav-section';
import NavLink from './nav-link';
import PageSection from '../patterns/page-section';
import ProviderDecorator from '../provider-decorator';

const searchResultRenderer = item => <span>{item.name}</span>;

const useSearch = () => {
    return [
        searchTerm => console.log(searchTerm),
        {
            error: undefined,
            loading: false,
            result: [{id: '42', name: 'Max Mustermann'}],
        },
    ];
};

export const DefaultStory = () => (
    <Layout
        logo={<Logo version="v1.0.0" />}
        header={
            <Header
                userName="Max Mustermann"
                useSearch={useSearch}
                searchResultRenderer={searchResultRenderer}
            />
        }
        aside={
            <Aside>
                <NavSection header="Dashboards">
                    <NavLink to="/" icon="home">
                        Dashboard
                    </NavLink>
                    <NavLink to="/2" icon="home">
                        Dashboard 2
                    </NavLink>
                </NavSection>
            </Aside>
        }>
        <PageSection
            title="trigo"
            footer={
                <Stack align="flex-start">
                    <Button
                        variantColor="blue"
                        width={48}
                        justifyContent="flex-start">
                        Speichern
                    </Button>
                    <Button
                        variant="ghost"
                        width={32}
                        justifyContent="flex-start">
                        Abbrechen
                    </Button>
                </Stack>
            }>
            content
        </PageSection>
    </Layout>
);

DefaultStory.story = {
    name: 'default',
};

export default {
    title: 'Components|Layout',
    component: Layout,
    decorators: [ProviderDecorator],
};
