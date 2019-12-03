import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Box, Spinner, Text} from '@chakra-ui/core';

const LoadingIndicator = () => {
    return (
        <Box>
            <Spinner />
            <Text>
                <FormattedMessage id="indicator.loading" />
            </Text>
        </Box>
    );
};

export default LoadingIndicator;
