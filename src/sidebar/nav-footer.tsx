import React, {FC, ReactNode} from 'react';
import {Flex} from '@chakra-ui/react';

export type NavFooterProps = {
    children: ReactNode;
};

export const NavFooter: FC<NavFooterProps> = ({children}) => {
    return (
        <Flex flexShrink={0} borderTop="1px" borderColor="gray.200" p={4}>
            {children}
        </Flex>
    );
};

export default NavFooter;
