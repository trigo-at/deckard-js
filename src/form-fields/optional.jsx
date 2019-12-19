import React from 'react';
import {Text} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const Optional = () => {
    return (
        <Text
            ml={1}
            as="span"
            fontSize="xs"
            color="gray.500"
            fontStyle="italic">
            <FormattedMessage id="common.optional" />
        </Text>
    );
};

Optional.propTypes = {};

export default Optional;
