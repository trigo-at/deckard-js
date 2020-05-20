import React from 'react';
import {string, node, bool} from 'prop-types';
import {Box} from '@chakra-ui/core';
import SectionHeader from './section-header';

const ViewSection = ({
    title,
    actions,
    footer,
    isEmbedded,
    children,
    ...props
}) => {
    return (
        <Box as="section" mb={10} {...props}>
            <Box px={isEmbedded ? 0 : 4} pt={4} pb={2}>
                {title && <SectionHeader title={title} />}
                {actions && <Box py={3}>{actions}</Box>}
            </Box>
            <Box px={isEmbedded ? 0 : 4}>{children}</Box>
            {footer && (
                <Box px={isEmbedded ? 0 : 4} pt={4} pb={2}>
                    {footer && <Box py={3}>{footer}</Box>}
                </Box>
            )}
        </Box>
    );
};

ViewSection.propTypes = {
    title: string,
    isEmbedded: bool,
    actions: node,
    footer: node,
    children: node,
};

ViewSection.defaultProps = {
    title: undefined,
    children: undefined,
    actions: undefined,
    footer: undefined,
    isEmbedded: false,
};

export default ViewSection;
