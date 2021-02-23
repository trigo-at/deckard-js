import React, {FC, ReactNode} from 'react';
import {Stack} from '@chakra-ui/react';

export type NavItemsProps = {
    children: ReactNode;
    role?: string;
};

export const NavItems: FC<NavItemsProps> = ({
    children = undefined,
    ...props
}) => {
    return (
        <Stack spacing={1} {...props}>
            {children}
        </Stack>
    );
};

export default NavItems;
