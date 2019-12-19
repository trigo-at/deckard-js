import React from 'react';
import {Text} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const Optional = () => {
    return (
        <Text fontSize="xs" color="gray.500">
            <FormattedMessage id="common.optional" />
        </Text>
    );
};

Optional.propTypes = {};

export default Optional;
