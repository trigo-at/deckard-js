import React from 'react';
import {string, object} from 'prop-types';
import {Heading} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const SectionHeader = ({title, values, ...props}) => {
    return (
        <Heading as="h3" fontSize="lg" lineHeight="base" {...props}>
            <FormattedMessage id={title} values={values} />
        </Heading>
    );
};

SectionHeader.propTypes = {
    title: string.isRequired,
    values: object,
};

SectionHeader.defaultProps = {values: undefined};

export default SectionHeader;
