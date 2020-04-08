import React from 'react';
import {string} from 'prop-types';
import {Heading} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const SectionHeader = ({title}) => {
    return (
        <Heading as="h3" fontSize="lg" lineHeight="base">
            <FormattedMessage id={title} />
        </Heading>
    );
};

SectionHeader.propTypes = {
    title: string.isRequired,
};

SectionHeader.defaultProps = {};

export default SectionHeader;
