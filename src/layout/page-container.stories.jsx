import React from 'react';
import {Box, Heading} from '@chakra-ui/react';
import PageContainer from './page-container';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Layout/PageContainer',
    component: PageContainer,
};

export const Template = (args) => (
    <PageContainer {...args}>
        <Box py={6}>
            <Box mx="auto" px={[4, 6, 8]} maxW="6xl">
                <Heading
                    as="h1"
                    size="2xl"
                    fontWeight="semibold"
                    color="gray.900">
                    Dashboard
                </Heading>
            </Box>
            <Box mx="auto" px={[4, 6, 8]} maxW="6xl">
                <Box py={4}>
                    <Box
                        border="4px"
                        borderStyle="dashed"
                        borderColor="gray.200"
                        rounded="lg"
                        h="96"
                    />
                </Box>
            </Box>
        </Box>
    </PageContainer>
);

Template.story = {
    name: 'Base',
    decorators: [ProviderDecorator],
};
