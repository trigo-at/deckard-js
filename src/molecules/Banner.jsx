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
        icon: 'success',
    },
    secondary: {
        backgroundColor: 'secondary',
        color: 'black',
        icon: 'success',
    },
    negative: {
        backgroundColor: 'negative',
        color: 'white',
        icon: 'warning',
    },
    positive: {
        backgroundColor: 'positive',
        color: 'black',
        icon: 'warning',
    },
    warning: {
        backgroundColor: 'warning',
        color: 'black',
        icon: 'warning',
    },
};

const Banner = ({children, showIcon, header, text, onClose, ...props}) => {
    const bannerColor = bannerColors[props.bg] || {};
    const icon = props.iconName || bannerColor.icon;

    return (
        <Box {...props} bg={bannerColor.backgroundColor || props.bg} color={bannerColor.color || props.color}>
            <Flex justify="space-between" align="center">
                {!!icon && !!showIcon && <Icon name={icon} mr={2} size={24} />}
                <Box w={1}>
                    <Text align={props.textAlign}>
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
