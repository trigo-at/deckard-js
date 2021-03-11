import React, {FC, ReactNode} from 'react';
import {Box, Flex} from '@chakra-ui/react';

export type StaticSidebarForDesktopProps = {
    children: ReactNode;
};

export const StaticSidebarForDesktop: FC<StaticSidebarForDesktopProps> = ({
    children,
}) => {
    return (
        <Box display={{base: 'none', lg: 'flex'}} flexShrink={{md: 0}}>
            <Flex flexDirection="column" minW={64} maxW={80}>
                {children}
            </Flex>
        </Box>
    );
};

export default StaticSidebarForDesktop;
