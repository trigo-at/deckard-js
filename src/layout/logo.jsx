import React from 'react';
import {string} from 'prop-types';
import {Flex, Text} from '@chakra-ui/core';

const Logo = ({title, version}) => {
    return (
        <Flex justifyContent="center" px={6} flexDirection="column">
            <Text color="white" fontWeight="bold">
                {title}
            </Text>
            <Text
                textTransform="uppercase"
                opacity="0.6"
                color="white"
                fontSize="xs">
                {version}
            </Text>
        </Flex>
    );
};

Logo.propTypes = {
    title: string,
    version: string,
};

Logo.defaultProps = {
    title: 'trigo',
    version: 'dev',
};

export default Logo;
