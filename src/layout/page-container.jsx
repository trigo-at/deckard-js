import React from 'react';
import {node} from 'prop-types';
import {Flex} from '@chakra-ui/react';

const PageContainer = ({children}) => {
    return (
        <Flex h="screen" overflow="hidden" bg="gray.100">
            <Flex flexDirection="column" w="0" flex="1" overflow="hidden">
                {children}
            </Flex>
        </Flex>
    );
};

PageContainer.propTypes = {
    children: node,
};

PageContainer.defaultProps = {
    children: undefined,
};

export default PageContainer;
