import React from 'react';
import {string, object} from 'prop-types';
import {Text} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const SectionDescription = ({description, values, ...props}) => {
    return (
        <Text
            as="p"
            fontSize="sm"
            color="gray.500"
            lineHeight="shorter"
            {...props}>
            <FormattedMessage id={description} values={values} />
        </Text>
    );
};

SectionDescription.propTypes = {
    description: string.isRequired,
    values: object,
};

SectionDescription.defaultProps = {values: undefined};

export default SectionDescription;
