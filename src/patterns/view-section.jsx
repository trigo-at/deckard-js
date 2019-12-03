import React from 'react';
import {string, node} from 'prop-types';
import {Box, Flex} from '@chakra-ui/core';
import SectionHeader from './section-header';

const ViewSection = ({title, actions, children}) => {
    return (
        <Box as="section" mb={4}>
            <Flex
                px={4}
                pt={4}
                pb={2}
                justifyContent="space-between"
                alignItems="center">
                <SectionHeader title={title} />
                {actions && <Box>{actions}</Box>}
            </Flex>
            <Box px={4}>{children}</Box>
        </Box>
    );
};

ViewSection.propTypes = {
    title: string.isRequired,
    actions: node,
    children: node,
};

ViewSection.defaultProps = {
    children: undefined,
    actions: undefined,
};

export default ViewSection;
