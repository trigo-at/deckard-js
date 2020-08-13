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
import logo from './trigo-logo.svg';
import ProviderDecorator from '../provider-decorator';

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

DefaultStory.storyName = 'default';

export const LongAsideStory = () => (
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
                    <NavLink to="/3" icon="home">
                        Dashboard 3
                    </NavLink>
                    <NavLink to="/4" icon="home">
                        Dashboard 4
                    </NavLink>
                    <NavLink to="/5" icon="home">
                        Dashboard 5
                    </NavLink>
                    <NavLink to="/6" icon="home">
                        Dashboard 6
                    </NavLink>
                    <NavLink to="/7" icon="home">
                        Dashboard 7
                    </NavLink>
                    <NavLink to="/8" icon="home">
                        Dashboard 8
                    </NavLink>
                    <NavLink to="/9" icon="home">
                        Dashboard 9
                    </NavLink>
                    <NavLink to="/10" icon="home">
                        Dashboard 10
                    </NavLink>
                    <NavLink to="/11" icon="home">
                        Dashboard 11
                    </NavLink>
                    <NavLink to="/12" icon="home">
                        Dashboard 12
                    </NavLink>
                    <NavLink to="/13" icon="home">
                        Dashboard 13
                    </NavLink>
                    <NavLink to="/14" icon="home">
                        Dashboard 14
                    </NavLink>
                    <NavLink to="/15" icon="home">
                        Dashboard 15
                    </NavLink>
                    <NavLink to="/16" icon="home">
                        Dashboard 16
                    </NavLink>
                    <NavLink to="/17" icon="home">
                        Dashboard 17
                    </NavLink>
                    <NavLink to="/18" icon="home">
                        Dashboard 14
                    </NavLink>
                    <NavLink to="/19" icon="home">
                        Dashboard 19
                    </NavLink>
                    <NavLink to="/20" icon="home">
                        Dashboard 20
                    </NavLink>
                    <NavLink to="/21" icon="home">
                        Dashboard 21
                    </NavLink>
                    <NavLink to="/22" icon="home">
                        Dashboard 22
                    </NavLink>
                    <NavLink to="/23" icon="home">
                        Dashboard 23
                    </NavLink>
                </NavSection>
            </Aside>
        }>
        <FormWithPageSection />
        <FormWithPageSection />
        <FormWithPageSection />
    </Layout>
);

LongAsideStory.storyName = 'long aside';

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

DifferentLogoBGStory.storyName = 'Different logo background';

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

NoHeaderStory.storyName = 'No header';

// needed to visually improve the docs page
// storybook docs cant handle position: fixed
const styles = {
    transform: 'scale(1)',
    height: '500px',
};

export default {
    title: 'Components/Layout',
    component: Layout,
    decorators: [
        ProviderDecorator,
        (storyFn) => <div style={styles}>{storyFn()}</div>,
    ],
};
