import React, {FC, ReactNode} from 'react';
import {Link, Box, forwardRef} from '@chakra-ui/react';

export type SecondaryNavItemProps = {
    /**
     * Text
     */
    children: ReactNode;
    /**
     * Wenn es sich um einen externen Link handelt wird der Link in einem neuen Tab geöffnet und rel="noopener noreferrer" wird gesetzt
     */
    isExternal?: boolean;
    /**
     * Der Link (kann z.B. auch von next/link kommen)
     */
    href?: string;
};

/**
 * Element der sekundaren Navigation in der Sidebar
 */
export const SecondaryNavItem: FC<SecondaryNavItemProps> = forwardRef(
    ({children, href, isExternal, ...props}, ref) => {
        return (
            <Link
                ref={ref}
                href={href}
                role="group"
                display="flex"
                alignItems="center"
                px={3}
                py={2}
                fontSize="sm"
                fontWeight="medium"
                color="gray.600"
                rounded="md"
                isExternal={isExternal}
                _hover={{
                    color: 'gray.900',
                    bg: 'gray.50',
                }}
                {...props}>
                <Box
                    as="span"
                    overflow="hidden"
                    textOverflow="hidden"
                    whiteSpace="nowrap">
                    {children}
                </Box>
            </Link>
        );
    }
);

export default SecondaryNavItem;
