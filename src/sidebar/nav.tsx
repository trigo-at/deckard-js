import React, {FC, ReactNode} from 'react';
import {Flex, Stack} from '@chakra-ui/react';

export type NavProps = {
    children: ReactNode;
};

export const Nav: FC<NavProps> = ({children}) => {
    return (
        <Flex mt={5} flex={1} flexDirection="column" flexGrow={1}>
            <Stack as="nav" flex={1} px={2} spacing={8} aria-label="Sidebar">
                {children}
            </Stack>
        </Flex>
    );
};

export default Nav;
