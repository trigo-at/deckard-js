import React, {FC, ReactNode} from 'react';
import {Box, Flex} from '@chakra-ui/react';

export type StaticSidebarForDesktopProps = {
    children: ReactNode;
};

export const StaticSidebarForDesktop: FC<StaticSidebarForDesktopProps> = ({
    children,
}) => {
    return (
        <Box display={{base: 'none', md: 'flex'}} flexShrink={{md: 0}}>
            <Flex flexDirection="column" w={64}>
                {children}
            </Flex>
        </Box>
    );
};

export default StaticSidebarForDesktop;
