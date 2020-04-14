import React from 'react';
import {string, node, bool} from 'prop-types';
import {Box} from '@chakra-ui/core';
import SectionHeader from './section-header';

const ViewSection = ({title, actions, isEmbedded, children, ...props}) => {
    return (
        <Box as="section" mb={10} {...props}>
            <Box px={isEmbedded ? 0 : 4} pt={4} pb={2}>
                <SectionHeader title={title} />
                {actions && <Box py={3}>{actions}</Box>}
            </Box>
            <Box px={isEmbedded ? 0 : 4}>{children}</Box>
        </Box>
    );
};

ViewSection.propTypes = {
    title: string.isRequired,
    isEmbedded: bool,
    actions: node,
    children: node,
};

ViewSection.defaultProps = {
    children: undefined,
    actions: undefined,
    isEmbedded: false,
};

export default ViewSection;
