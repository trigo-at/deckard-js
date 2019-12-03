import React from 'react';
import {string, node, object, bool} from 'prop-types';
import {Box, Heading} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const PageSection = ({title, values, children, isPrimary}) => {
    return (
        <Box as="section" mb={8}>
            <Heading
                size={isPrimary ? 'xl' : 'lg'}
                as={isPrimary ? 'h1' : 'h2'}
                color="gray.900"
                mb={4}
                mt={4}>
                <FormattedMessage id={title} values={values} />
            </Heading>
            <Box
                color="gray.900"
                bg="gray.50"
                borderRadius={2}
                shadow="md"
                p={6}>
                {children}
            </Box>
        </Box>
    );
};

PageSection.propTypes = {
    title: string,
    isPrimary: bool,
    values: object,
    children: node,
};

PageSection.defaultProps = {
    isPrimary: false,
    title: undefined,
    children: undefined,
    values: undefined,
};

export default PageSection;
