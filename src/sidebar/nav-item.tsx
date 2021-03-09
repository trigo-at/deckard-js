import React, {FC, ReactNode, ReactElement} from 'react';
import {Link, Box, forwardRef} from '@chakra-ui/react';

export type NavItemProps = {
    /**
     * Text
     */
    children: ReactNode;
    /**
     * Regelt ob das NavItem als aktiv dargestellt wird
     */
    isActive?: boolean;
    /**
     * Wenn es sich um einen externen Link handelt wird der Link in einem neuen Tab geöffnet und rel="noopener noreferrer" wird gesetzt
     */
    isExternal?: boolean;
    /**
     * Der Link (kann z.B. auch von next/link kommen)
     */
    href?: string;
    /**
     * Das Icon ds NavItem
     */
    icon: ReactElement<any>;
    /**
     * (Optional) Wird als Badget rechts vom Text angezeigt
     */
    badge?: ReactNode;
};

/**
 * Element der primären Navigation in der Sidebar
 */
export const NavItem: FC<NavItemProps> = forwardRef(
    ({children, href, isExternal, isActive, icon, badge, ...props}, ref) => {
        const navItemIcon = React.cloneElement(icon, {
            color: isActive ? 'gray.500' : 'gray.400',
            mr: 3,
            h: 6,
            w: 6,
            _groupHover: isActive ? undefined : {color: 'gray.500'},
        });

        return (
            <Link
                ref={ref}
                display="flex"
                alignItems="center"
                bg={isActive ? 'gray.200' : undefined}
                color={isActive ? 'gray.900' : 'gray.600'}
                px={2}
                py={2}
                fontSize="sm"
                fontWeight="medium"
                rounded="md"
                isExternal={isExternal}
                href={href}
                role="group"
                _hover={{
                    color: isActive ? undefined : 'gray.900',
                    bg: isActive ? undefined : 'gray.50',
                }}
                {...props}>
                {navItemIcon}
                {children}
                {badge && (
                    <Box
                        as="span"
                        bg={isActive ? 'gray.100' : 'gray.200'}
                        _groupHover={isActive ? undefined : {bg: 'gray.200'}}
                        ml="auto"
                        display="inline-block"
                        py={0.5}
                        px={3}
                        fontSize="xs"
                        fontWeight="medium"
                        rounded="full">
                        {badge}
                    </Box>
                )}
            </Link>
        );
    }
);

export default NavItem;
