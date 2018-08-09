import React from 'react';
import {string, bool, func, any} from 'prop-types';
import Box from '../atoms/Box';
import Flex from '../atoms/Flex';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import IconButton from './IconButton';
import Heading from '../atoms/Heading';

const bannerColors = {
    primary: {
        backgroundColor: 'primary',
        color: 'white',
    },
    secondary: {
        backgroundColor: 'secondary',
        color: 'black',
    },
    negative: {
        backgroundColor: 'negative',
        color: 'white',
    },
    positive: {
        backgroundColor: 'positive',
        color: 'black',
    },
    warning: {
        backgroundColor: 'warning',
        color: 'black',
    },
};

const Banner = ({children, showIcon, header, text, onClose, iconName, bg, color, textAlign, ...props}) => {
    const bannerColor = bannerColors[bg] || {};

    return (
        <Box {...props} bg={bannerColor.backgroundColor || bg} color={bannerColor.color || color} textAlign={textAlign}>
            <Flex justifyContent="space-between" alignItems="center">
                {!!iconName && !!showIcon && <Icon name={iconName} mr={2} size={24} />}
                <Box w={1}>
                    <Text align={textAlign}>
                        <Heading.h5>{header}</Heading.h5>
                        <Text.span fontSize={1}>{text}</Text.span>
                        {children}
                    </Text>
                </Box>
                {!!onClose && <IconButton name="close" onClick={onClose} ml={2} size={24} title="close" mt="-2px" />}
            </Flex>
        </Box>
    );
};

Banner.displayName = 'Banner';

Banner.propTypes = {
    children: any,
    color: string,
    bg: string,
    header: string,
    iconName: string,
    onClose: func,
    showIcon: bool,
    text: string,
    textAlign: string,
};

Banner.defaultProps = {
    children: undefined,
    color: 'black',
    bg: 'snow',
    header: undefined,
    iconName: undefined,
    onClose: undefined,
    text: undefined,
    textAlign: 'left',
    showIcon: true,
};

export default Banner;
