import React, {FC, ReactNode} from 'react';
import {Flex} from '@chakra-ui/react';
import NavContainer from './nav-container';
import NavFooter from './nav-footer';
import Nav from './nav';
import NavItems from './nav-items';
import SecondaryNavHeading from './secondary-nav-heading';

export type LightSidebarProps = {
    /**
     * Liste an NavItem
     */
    children: ReactNode;
    /**
     * z.B. für die Profile> Komponente
     */
    footer?: ReactNode;
    /**
     * Logo Komponente
     */
    logo?: ReactNode;
    /**
     * Überschrift der sekundären Navigation
     */
    secondaryNavHeading?: ReactNode;
    /**
     * Liste an SecondaryNavItem
     */
    secondaryNavItems?: ReactNode;
};

/**
 * Sidebar mit Icons, Badges, sekundärer Navigation und Profile Bereich
 */
export const LightSidebar: FC<LightSidebarProps> = ({
    children = undefined,
    footer = undefined,
    logo = undefined,
    secondaryNavHeading = undefined,
    secondaryNavItems = undefined,
}) => {
    return (
        <Flex
            flexDirection="column"
            h={0}
            flex={1}
            borderRight="1px"
            borderColor="gray.200"
            backgroundColor="white">
            <NavContainer>
                {logo}
                <Nav>
                    <NavItems>{children}</NavItems>

                    {(secondaryNavHeading || secondaryNavItems) && (
                        <NavItems>
                            {secondaryNavHeading && (
                                <SecondaryNavHeading id="secondary-navigation-heading">
                                    {secondaryNavHeading}
                                </SecondaryNavHeading>
                            )}
                            {secondaryNavItems && (
                                <NavItems
                                    role="group"
                                    aria-labelledby="secondary-navigation-heading">
                                    {secondaryNavItems}
                                </NavItems>
                            )}
                        </NavItems>
                    )}
                </Nav>
            </NavContainer>
            {footer && <NavFooter>{footer}</NavFooter>}
        </Flex>
    );
};

export default LightSidebar;
