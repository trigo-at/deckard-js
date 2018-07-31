import React from 'react';
import {string, bool, func, any} from 'prop-types';
import {Banner as RebassBanner, Box, Text, Subhead} from 'rebass';
import styled from 'styled-components';
import Icon from './Icon';
import IconButton from './IconButton';

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

const BaseBanner = styled(RebassBanner)`
    min-height: 10vh;
`;

const Banner = ({children, showIcon, header, text, onClose, bg, iconName, color, textAlign, ...props}) => {
    const bannerColor = bannerColors[bg] || {};
    const icon = iconName || bannerColor.icon;

    return (
        <BaseBanner
            {...props}
            bg={bannerColor.backgroundColor || bg}
            color={bannerColor.color || color}
            flexDirection="row">
            {!!icon && !!showIcon && <Icon name={icon} mr={2} size={24} />}
            <Box w={1}>
                <Text align={textAlign}>
                    <Subhead>{header}</Subhead>
                    <Text fontSize={1}>{text}</Text>
                    {children}
                </Text>
            </Box>
            {!!onClose && <IconButton name="close" onClick={onClose} ml={2} size={24} title="close" mt="-2px" />}
        </BaseBanner>
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
