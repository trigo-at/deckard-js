import React, {FC, ReactNode} from 'react';
import {Flex} from '@chakra-ui/react';

export type HeaderProps = {
    children: ReactNode;
};

export const Header: FC<HeaderProps> = ({children}) => {
    return (
        <Flex
            as="nav"
            position="relative"
            flexWrap={{base: 'wrap', md: 'nowrap'}}
            alignItems="center"
            justifyContent="space-between"
            zIndex="10"
            px={{base: 4, sm: 6, lg: 8}}
            py={4}
            borderBottom="1px"
            borderColor="gray.200">
            {children}
        </Flex>
    );
};

export default Header;
