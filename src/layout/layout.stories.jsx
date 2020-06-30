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
import {FormWithPageSection} from '../patterns/form-section.stories';
import ProviderDecorator from '../provider-decorator';
import logo from './trigo-logo.svg';

export const DefaultStory = () => (
    <Layout
        logo={
            <Logo title="trigo Design System" version="v1.0.0" imgSrc={logo} />
        }
        header={
            <Header
                userName="Max Mustermann"
                onSearch={(searchTerm) => console.log(searchTerm)}
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
        <FormWithPageSection />
        <FormWithPageSection />
        <FormWithPageSection />
    </Layout>
);

DefaultStory.story = {
    name: 'default',
};

export const FixedStory = () => (
    <Layout
        fixedAside
        logo={
            <Logo title="trigo Design System" version="v1.0.0" imgSrc={logo} />
        }
        header={
            <Header
                userName="Max Mustermann"
                onSearch={(searchTerm) => console.log(searchTerm)}
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
        <FormWithPageSection />
        <FormWithPageSection />
        <FormWithPageSection />
    </Layout>
);

FixedStory.story = {
    name: 'fixed aside',
};

export const DifferentLogoBGStory = () => (
    <Layout
        accent="green"
        logo={<Logo title="trigo Design System" version="v1.0.0" />}
        header={
            <Header
                userName="Max Mustermann"
                onSearch={(searchTerm) => console.log(searchTerm)}
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

export const NoHeaderStory = () => (
    <Layout
        logo={
            <Logo title="trigo Design System" version="v1.0.0" imgSrc={logo} />
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
        <FormWithPageSection />
        <FormWithPageSection />
        <FormWithPageSection />
    </Layout>
);

NoHeaderStory.story = {
    name: 'No header',
};

export default {
    title: 'Components|Layout',
    component: Layout,
    decorators: [ProviderDecorator],
};
