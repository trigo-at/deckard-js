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

export const DefaultStory = () => (
    <Layout
        logo={<Logo title="trigo Design System" version="v1.0.0" />}
        header={
            <Header
                userName="Max Mustermann"
                onSearch={searchTerm => console.log(searchTerm)}
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

export const DifferentLogoBGStory = () => (
    <Layout
        accent="green"
        logo={<Logo title="trigo Design System" version="v1.0.0" />}
        header={
            <Header
                userName="Max Mustermann"
                onSearch={searchTerm => console.log(searchTerm)}
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

DifferentLogoBGStory.story = {
    name: 'Different logo background',
};

export default {
    title: 'Components|Layout',
    component: Layout,
    decorators: [ProviderDecorator],
};
