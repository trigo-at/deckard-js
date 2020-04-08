import React from 'react';
import {string} from 'prop-types';
import {Text} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const SectionDescription = ({description, ...props}) => {
    return (
        <Text
            as="p"
            fontSize="sm"
            color="gray.500"
            lineHeight="shorter"
            {...props}>
            <FormattedMessage id={description} />
        </Text>
    );
};

SectionDescription.propTypes = {
    description: string.isRequired,
};

SectionDescription.defaultProps = {};

export default SectionDescription;
