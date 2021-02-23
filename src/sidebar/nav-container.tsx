import React, {FC, ReactNode} from 'react';
import {Flex} from '@chakra-ui/react';

export type NavContainerProps = {
    children: ReactNode;
    logoSrc?: string;
};

export const NavContainer: FC<NavContainerProps> = ({children = undefined}) => {
    return (
        <Flex flexDirection="column" flex={1} pt={5} pb={4} overflowY="auto">
            {children}
        </Flex>
    );
};

export default NavContainer;
