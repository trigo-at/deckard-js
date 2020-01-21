import React from 'react';
import {string, node} from 'prop-types';
import {Box, Grid} from '@chakra-ui/core';
import SectionHeader from './section-header';

const FormSection = ({title, gridTemplateAreas, children}) => {
    return (
        <Box as="section" mb={4}>
            {title && (
                <Box px={2} pt={4} pb={2}>
                    <SectionHeader title={title} />
                </Box>
            )}
            <Grid
                px={2}
                gridGap={4}
                alignItems="flex-start"
                gridTemplateColumns="repeat(3, 1fr)"
                gridTemplateAreas={gridTemplateAreas}>
                {children}
            </Grid>
        </Box>
    );
};

FormSection.propTypes = {
    title: string,
    gridTemplateAreas: string,
    children: node,
};

FormSection.defaultProps = {
    title: undefined,
    gridTemplateAreas: undefined,
    children: undefined,
};

export default FormSection;
