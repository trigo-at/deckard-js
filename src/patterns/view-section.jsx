import React from 'react';
import {string, node} from 'prop-types';
import {Box} from '@chakra-ui/core';
import SectionHeader from './section-header';

const ViewSection = ({title, actions, children, ...props}) => {
    return (
        <Box as="section" mb={10} {...props}>
            <Box px={4} pt={4} pb={2}>
                <SectionHeader title={title} />
                {actions && <Box py={3}>{actions}</Box>}
            </Box>
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
