/* eslint-disable no-console */
import React from 'react';
import {Stack, Button} from '@chakra-ui/react';
import Layout from './layout';
import Header from './header';
import Sidebar from './sidebar';
import NavLink from './nav-link';
import NavMenu from './nav-menu';
import NavMenuItem from './nav-menu-item';
import NavSecondaryMenu from './nav-secondary-menu';
import NavSecondaryMenuItem from './nav-secondary-menu-item';
import PageSection from '../patterns/page-section';
import {FormWithPageSection} from '../patterns/form-section.stories';
import logo from './sunrocks-logo.png';
import ProviderDecorator from '../provider-decorator';

export const DefaultStory = () => (
    <Layout
        header={
            <Header
                userName="Max Mustermann"
                onSearch={(searchTerm) => console.log(searchTerm)}
            />
        }
        sidebar={
            <Sidebar
                title="trigo Design System"
                version="v1.0.0"
                logo={logo}
                footerAction={<Button>feedback</Button>}
                userName="Max Mustermann">
                <NavLink to="/iframe.html" icon="home">
                    Dashboard
                </NavLink>
                <NavLink to="/" icon="home">
                    Dashboard 2
                </NavLink>
                <NavMenu header="Abwicklung" icon="add">
                    <NavMenuItem to="/new-person">Kunde*in anlegen</NavMenuItem>
                    <NavMenuItem to="/new-company">Firma anlegen</NavMenuItem>
                </NavMenu>
                <NavMenu header="Suchen" icon="search">
                    <NavMenuItem to="/new-person">Schadenfälle</NavMenuItem>
                    <NavMenuItem to="/new-company">Versicherungen</NavMenuItem>
                    <NavMenuItem to="/new-company">Kunden</NavMenuItem>
                    <NavMenuItem to="/new-company">E-Mails</NavMenuItem>
                </NavMenu>
                <NavMenu header="Dokumente" icon="download">
                    <NavMenuItem to="/new-person">
                        Erstellte Berichte
                    </NavMenuItem>
                    <NavMenuItem to="/new-company">Zertifikate</NavMenuItem>
                </NavMenu>
                <NavSecondaryMenu header="Administration">
                    <NavSecondaryMenuItem to="/new-company">
                        Produkte
                    </NavSecondaryMenuItem>
                    <NavSecondaryMenuItem to="/new-company">
                        Vorlagen
                    </NavSecondaryMenuItem>
                    <NavSecondaryMenuItem to="/new-company">
                        Vertriebspartner
                    </NavSecondaryMenuItem>
                    <NavSecondaryMenuItem to="/new-company">
                        Berichte
                    </NavSecondaryMenuItem>
                    <NavSecondaryMenuItem to="/new-company">
                        Versicherungsarten
                    </NavSecondaryMenuItem>
                    <NavSecondaryMenuItem to="/new-company">
                        Vertragsbedingungen
                    </NavSecondaryMenuItem>
                </NavSecondaryMenu>
            </Sidebar>
        }>
        <FormWithPageSection />
        <FormWithPageSection />
        <FormWithPageSection />
    </Layout>
);

DefaultStory.storyName = 'default';

export const LongAsideStory = () => (
    <Layout
        header={
            <Header
                userName="Max Mustermann"
                onSearch={(searchTerm) => console.log(searchTerm)}
            />
        }
        sidebar={
            <Sidebar title="trigo Design System" version="v1.0.0" logo={logo}>
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
            </Sidebar>
        }>
        <FormWithPageSection />
        <FormWithPageSection />
        <FormWithPageSection />
    </Layout>
);

LongAsideStory.storyName = 'long aside';

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
