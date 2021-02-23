import React, {FC, ReactNode} from 'react';
import {Flex} from '@chakra-ui/react';

export type ContentContainerProps = {
    children: ReactNode;
};

export const ContentContainer: FC<ContentContainerProps> = ({children}) => {
    return (
        <Flex flexDirection="column" w="0" flex="1" overflow="hidden">
            {children}
        </Flex>
    );
};

export default ContentContainer;
