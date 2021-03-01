import React, {FC, ReactNode} from 'react';
import {Flex} from '@chakra-ui/react';

export type HeaderProps = {
    children: ReactNode;
};

export const Header: FC<HeaderProps> = ({children}) => {
    return (
        <Flex
            position="relative"
            zIndex="10"
            flexShrink={0}
            bg="white"
            h={14}
            shadow="base">
            {children}
        </Flex>
    );
};

export default Header;
