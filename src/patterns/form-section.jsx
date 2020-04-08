import React from 'react';
import {string, node, bool} from 'prop-types';
import {Box, Grid} from '@chakra-ui/core';
import SectionHeader from './section-header';
import SectionDescription from './section-description';
import HideOptionalContext from '../form-fields/hide-optional-context';

const FormSection = ({
    title,
    description,
    gridTemplateAreas,
    children,
    hideOptionalIndicator,
}) => {
    return (
        <HideOptionalContext.Provider value={hideOptionalIndicator}>
            <Box as="section">
                {title && (
                    <Box mb={6}>
                        <SectionHeader title={title} />
                        {description && (
                            <SectionDescription
                                description={description}
                                mt={1}
                            />
                        )}
                    </Box>
                )}
                <Grid
                    gridGap={6}
                    alignItems="flex-start"
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
    description: string,
    gridTemplateAreas: string,
    children: node,
    hideOptionalIndicator: bool,
};

FormSection.defaultProps = {
    title: undefined,
    description: undefined,
    gridTemplateAreas: undefined,
    children: undefined,
    hideOptionalIndicator: false,
};

export default FormSection;
