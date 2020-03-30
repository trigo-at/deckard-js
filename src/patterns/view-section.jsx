import React from 'react';
import {string, node} from 'prop-types';
import {Box, Grid} from '@chakra-ui/core';
import SectionHeader from './section-header';

const ViewSection = ({title, actions, children, ...props}) => {
    return (
        <Box as="section" mb={10} {...props} p={4}>
            <Grid
                pb={6}
                justifyContent="center"
                gridTemplateColumns="0.3fr 0.7fr"
                borderBottom="1px"
                borderBottomColor="gray.200"
                alignItems="center">
                <SectionHeader title={title} />
                {actions && <Box>{actions}</Box>}
            </Grid>
            <Box>{children}</Box>
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
