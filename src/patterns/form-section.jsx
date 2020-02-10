import React from 'react';
import {string, node, bool} from 'prop-types';
import {Box, Grid} from '@chakra-ui/core';
import SectionHeader from './section-header';
import HideOptionalContext from '../form-fields/hide-optional-context';

const FormSection = ({
    title,
    gridTemplateAreas,
    children,
    hideOptionalIndicator,
}) => {
    return (
        <HideOptionalContext.Provider value={hideOptionalIndicator}>
            <Box as="section" mb={4}>
                {title && (
                    <Box px={2} pt={4} pb={2}>
                        <SectionHeader title={title} />
                    </Box>
                )}
                <Grid
                    px={2}
                    gridGap={4}
                    alignItems="flex-end"
                    gridTemplateColumns="repeat(3, 1fr)"
                    gridTemplateAreas={gridTemplateAreas}>
                    {children}
                </Grid>
            </Box>
        </HideOptionalContext.Provider>
    );
};

FormSection.propTypes = {
    title: string,
    gridTemplateAreas: string,
    children: node,
    hideOptionalIndicator: bool,
};

FormSection.defaultProps = {
    title: undefined,
    gridTemplateAreas: undefined,
    children: undefined,
    hideOptionalIndicator: false,
};

export default FormSection;
