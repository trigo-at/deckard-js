import React, {ReactNode} from 'react';
import {Box} from '@chakra-ui/react';

export type MainProps = {
    children: ReactNode;
};

export const Main = ({children}: MainProps) => {
    return (
        <Box
            as="main"
            flex="1"
            position="relative"
            zIndex="0"
            overflowY="auto"
            _focus={{outline: 'none'}}>
            {children}
        </Box>
    );
};

export default Main;
