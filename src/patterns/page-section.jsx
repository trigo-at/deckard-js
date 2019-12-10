import React from 'react';
import {string, node, object, bool} from 'prop-types';
import {Box, Flex, Heading} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const PageSection = ({title, values, actions, children, isPrimary}) => {
    return (
        <Box as="section" mb={8}>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading
                    size={isPrimary ? 'xl' : 'lg'}
                    as={isPrimary ? 'h1' : 'h2'}
                    color="gray.900"
                    mb={4}
                    mt={4}>
                    <FormattedMessage id={title} values={values} />
                </Heading>
                {actions && <Box>{actions}</Box>}
            </Flex>
            <Box
                color="gray.900"
                bg="gray.50"
                borderRadius={2}
                shadow="md"
                p={4}>
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
    actions: node,
};

PageSection.defaultProps = {
    isPrimary: false,
    title: undefined,
    children: undefined,
    actions: undefined,
    values: undefined,
};

export default PageSection;
