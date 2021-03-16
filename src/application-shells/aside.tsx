import React, {ReactNode} from 'react';
import {Box} from '@chakra-ui/react';

export type AsideProps = {
    children: ReactNode;
};

export const Aside = ({children}: AsideProps) => {
    return (
        // hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200
        <Box
            as="aside"
            display={{base: 'none', xl: 'flex'}}
            flexDirection={{xl: 'column'}}
            flexShrink={0}
            w={96}
            borderLeft="1px"
            borderColor="gray.200">
            {children}
        </Box>
    );
};

export default Aside;
