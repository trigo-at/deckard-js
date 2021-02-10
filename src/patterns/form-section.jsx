import React from 'react';
import {string, node, bool, object} from 'prop-types';
import {Box, Grid} from '@chakra-ui/react';
import SectionHeader from './section-header';
import SectionDescription from './section-description';
import HideOptionalContext from '../form-fields/hide-optional-context';

const FormSection = ({
    title,
    description,
    values,
    gridTemplateAreas,
    children,
    hideOptionalIndicator,
}) => {
    return (
        <HideOptionalContext.Provider value={hideOptionalIndicator}>
            <Box as="section">
                {title && (
                    <Box mb={2}>
                        <SectionHeader title={title} values={values} />
                        {description && (
                            <SectionDescription
                                description={description}
                                values={values}
                                mt={1}
                            />
                        )}
                    </Box>
                )}
                {gridTemplateAreas ? (
                    <Grid
                        gridGap={6}
                        alignItems="flex-start"
                        gridTemplateColumns="repeat(3, 1fr)"
                        gridTemplateAreas={gridTemplateAreas}>
                        {children}
                    </Grid>
                ) : (
                    <Box>{children}</Box>
                )}
            </Box>
        </HideOptionalContext.Provider>
    );
};

FormSection.propTypes = {
    title: string,
    values: object,
    description: string,
    gridTemplateAreas: string,
    children: node,
    hideOptionalIndicator: bool,
};

FormSection.defaultProps = {
    title: undefined,
    values: undefined,
    description: undefined,
    gridTemplateAreas: undefined,
    children: undefined,
    hideOptionalIndicator: false,
};

export default FormSection;
