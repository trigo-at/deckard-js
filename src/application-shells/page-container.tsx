import React, {FC, ReactNode} from 'react';
import {Flex} from '@chakra-ui/react';

export type PageContainerProps = {
    children: ReactNode;
};

export const PageContainer: FC<PageContainerProps> = ({
    children = undefined,
}) => {
    return (
        <Flex h="screen" overflow="hidden" bg="gray.100">
            {children}
        </Flex>
    );
};

export default PageContainer;
