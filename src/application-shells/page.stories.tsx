/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Box} from '@chakra-ui/react';
import {Page, PageProps} from './page';
import ProviderDecorator from '../provider-decorator';
import Sidebar from '../sidebar/sidebar';
import Logo from '../sidebar/logo';
import NavItem from '../sidebar/nav-item';
import OutlineHome from '../icons/outline-home';
import OutlineUsers from '../icons/outline-users';
import OutlineFolder from '../icons/outline-folder';
import OutlineCalendar from '../icons/outline-calendar';
import OutlineInbox from '../icons/outline-inbox';
import OutlineChartBar from '../icons/outline-chart-bar';
import Profile from '../sidebar/profile';
import SecondaryNavItem from '../sidebar/secondary-nav-item';
import PageHeader from '../headings/page-header';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';
// @ts-ignore
import logo from '../../.storybook/TRIGO-logo-human-rgb.png';
// @ts-ignore
import avatar from '../../.storybook/TRIGO-logo-humanface-rgb.png';

export default {
    title: 'Application Shells/Page',
    component: Page,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<PageProps> = (args) => (
    <Page
        {...args}
        sidebar={
            <Sidebar
                footer={
                    <Profile
                        href="https://trigo.at"
                        isExternal
                        username="Maxima Musterfrau"
                        avatar={avatar}
                    />
                }
                logo={<Logo src={logo} />}
                secondaryNavHeading="Projects"
                secondaryNavItems={
                    <>
                        <SecondaryNavItem href="https://trigo.at" isExternal>
                            Website redesign
                        </SecondaryNavItem>
                        <SecondaryNavItem href="https://trigo.at" isExternal>
                            GraphQL API
                        </SecondaryNavItem>
                        <SecondaryNavItem href="https://trigo.at" isExternal>
                            Customer migration guides
                        </SecondaryNavItem>
                        <SecondaryNavItem href="https://trigo.at" isExternal>
                            Customer migration guides Customer migration guides
                        </SecondaryNavItem>
                        <SecondaryNavItem href="https://trigo.at" isExternal>
                            Profit sharing program
                        </SecondaryNavItem>
                    </>
                }>
                <>
                    <NavItem
                        href="https://trigo.at"
                        isExternal
                        icon={<OutlineHome />}>
                        Dashboard
                    </NavItem>
                    <NavItem
                        icon={<OutlineUsers />}
                        href="https://trigo.at"
                        badge="3"
                        isActive
                        isExternal>
                        Team
                    </NavItem>
                    <NavItem
                        icon={<OutlineFolder />}
                        href="https://trigo.at"
                        badge="4"
                        isExternal>
                        Projects
                    </NavItem>
                    <NavItem
                        icon={<OutlineCalendar />}
                        href="https://trigo.at"
                        isExternal>
                        Calendar
                    </NavItem>
                    <NavItem
                        icon={<OutlineInbox />}
                        href="https://trigo.at"
                        badge="12"
                        isExternal>
                        Documents
                    </NavItem>
                    <NavItem
                        icon={<OutlineChartBar />}
                        href="https://trigo.at"
                        isExternal>
                        Reports
                    </NavItem>
                </>
            </Sidebar>
        }>
        <PageHeader
            heading="Dashboard"
            actions={
                <>
                    <SecondaryButton>Edit</SecondaryButton>
                    <PrimaryButton>Publish</PrimaryButton>
                </>
            }
        />
        <Box px={{base: 4, sm: 6, lg: 8}} py={4} h="full">
            <Box py={4}>
                <Box
                    border="4px"
                    borderStyle="dashed"
                    borderColor="gray.200"
                    rounded="lg"
                    h="96"
                />
            </Box>
        </Box>
    </Page>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Mit Light Sidebar';

export const SearchHeaderStory = Template.bind({});
SearchHeaderStory.args = {
    onSearch: (searchTerm) => console.log(searchTerm),
};
SearchHeaderStory.storyName = 'Mit Search';
