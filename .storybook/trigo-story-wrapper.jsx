import React from 'react';
import {Box, Flex, Text, Image} from '@chakra-ui/core';
import trigoLogo from './trigo-logo.png';

const TrigoStoryWrapper = ({bg = 'gray.100', children}) => (
    <Box bg={bg} p={5} h="100%" minH="100vh">
        <Flex alignItems="center">
            <Image src={trigoLogo} alt="trigo logo" size="50px" />
            <Text pl={5} fontSize="2xl">
                trigo Designsystem
            </Text>
        </Flex>
        <Box mt={5}>{children}</Box>
    </Box>
);

export default TrigoStoryWrapper;
