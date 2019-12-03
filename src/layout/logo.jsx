import React from 'react';
import {string} from 'prop-types';
import {Flex, Text} from '@chakra-ui/core';

const Logo = ({title, version}) => {
    return (
        <Flex justifyContent="center" px={6} flexDirection="column">
            <Text color="gray.300" fontWeight="bold">
                {title}
            </Text>
            <Text textTransform="uppercase" color="gray.400" fontSize="xs">
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
