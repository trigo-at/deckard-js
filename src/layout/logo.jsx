import React from 'react';
import {string} from 'prop-types';
import {Flex, Text, Image} from '@chakra-ui/core';

const Logo = ({title, version, imgSrc}) => {
    return (
        <Flex justifyContent="flex-start" alignItems="center" pl={2}>
            {imgSrc && <Image height={8} width={8} src={imgSrc} alt="logo" />}
            <Flex
                justifyContent="center"
                pl={imgSrc ? 2 : undefined}
                flexDirection="column">
                <Text color="white" fontWeight="bold">
                    {title}
                </Text>
                <Text opacity="0.6" color="white" fontSize="xs">
                    {version}
                </Text>
            </Flex>
        </Flex>
    );
};

Logo.propTypes = {
    title: string,
    version: string,
    imgSrc: string,
};

Logo.defaultProps = {
    title: 'trigo',
    version: 'dev',
    imgSrc: undefined,
};

export default Logo;
