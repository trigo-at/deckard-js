/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Sidebar, SidebarProps} from './sidebar';
import ProviderDecorator from '../provider-decorator';
import Logo from './logo';
import NavItem from './nav-item';
import OutlineHome from '../icons/outline-home';
import OutlineUsers from '../icons/outline-users';
import OutlineFolder from '../icons/outline-folder';
import OutlineCalendar from '../icons/outline-calendar';
import OutlineInbox from '../icons/outline-inbox';
import OutlineChartBar from '../icons/outline-chart-bar';
import Profile from './profile';
import SecondaryNavItem from './secondary-nav-item';

import StaticSidebarForDesktopProps from '../application-shells/static-sidebar-for-desktop';
import PageContainer from '../application-shells/page-container';

export default {
    title: 'Navigation/Sidebar',
    component: Sidebar,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<SidebarProps> = (args) => (
    <PageContainer>
        <StaticSidebarForDesktopProps>
            <Sidebar
                footer={
                    <Profile
                        href="https://trigo.at"
                        isExternal
                        username="Maxima Musterfrau"
                        avatar="/img/TRIGO-logo-humanface-rgb.png"
                    />
                }
                logo={<Logo src="/img/TRIGO-logo-human-rgb.png" />}
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
                            Profit sharing program
                        </SecondaryNavItem>
                    </>
                }
                {...args}>
                <>
                    <NavItem
                        href="https://trigo.at"
                        isExternal
                        icon={<OutlineHome />}
                        isActive>
                        Dashboard
                    </NavItem>
                    <NavItem
                        icon={<OutlineUsers />}
                        href="https://trigo.at"
                        badge="3"
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
        </StaticSidebarForDesktopProps>
    </PageContainer>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Light Sidebar';
