import React from 'react';
import {string, node} from 'prop-types';
import {Box, Grid} from '@chakra-ui/core';
import SectionHeader from './section-header';

const FormSection = ({title, gridTemplateAreas, children}) => {
    return (
        <Box as="section" mb={4}>
            <Box px={4} pt={4} pb={2}>
                <SectionHeader title={title} />
            </Box>
            <Grid
                px={4}
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
    title: string.isRequired,
    gridTemplateAreas: string,
    children: node,
};

FormSection.defaultProps = {
    gridTemplateAreas: undefined,
    children: undefined,
};

export default FormSection;
