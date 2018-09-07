import React from 'react';
import {func, string, object, oneOfType, number} from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';
import Button from './Button';
import theme from './theme';

const TransparentButton = styled(Button)`
    padding: 0;
    height: auto;
    background-color: transparent;
    color: inherit;
    &:hover {
        background-color: transparent;
    }
    box-shadow: none;
    outline: 0;
    &:disabled {
        background-color: transparent;
        color: ${props => props.theme.colors.darkGray};
        opacity: 0.5;
    }
`;

const IconButton = ({name, size, color, ...props}) => (
    <TransparentButton {...props}>
        <Icon name={name} size={size} color={color} />
    </TransparentButton>
);

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
    name: string.isRequired,
    size: oneOfType([string, number]),
    color: string,
    onClick: func,
    title: string,
    theme: object,
};

IconButton.defaultProps = {
    onClick: undefined,
    title: undefined,
    color: undefined,
    size: 24,
    theme,
};

export default IconButton;
