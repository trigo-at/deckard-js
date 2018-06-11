import React from 'react';
import styled from 'styled-components';
import {string, number, bool, func, object} from 'prop-types';
import Icon from '../atoms/Icon';
import Box from '../atoms/Box';
import theme from '../theme';

const Checkbox = props => {
    const {disabled, size} = props;
    return (
        <CheckBoxWrapper disabled={disabled}>
            <StyledInput type="checkbox" {...props} />
            <Icon name="checkmarkOutline" size={size} data-name="checked" />
            <Icon name="circle" size={size} data-name="empty" />
        </CheckBoxWrapper>
    );
};

const CheckBoxWrapper = Box.extend`
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    color: ${props => (props.disabled ? props.theme.colors.borderGray : props.theme.colors.gray)};
    svg[data-name='checked'] {
        display: none;
    }
    > input:checked {
        & ~ svg[data-name='checked'] {
            display: inline-block;
            color: ${props => (props.disabled ? props.theme.colors.borderGray : props.theme.colors.blue)};
        }
        & ~ svg[data-name='empty'] {
            display: none;
        }
    }
`;

const StyledInput = styled.input`
    appearance: none;
    opacity: 0;
    position: absolute;
    z-index: 0;
`;

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    name: string,
    id: string.isRequired,
    size: number,
    defaultChecked: bool,
    disabled: bool,
    onChange: func.isRequired,
    theme: object,
};

Checkbox.defaultProps = {
    name: undefined,
    size: 24,
    disabled: false,
    defaultChecked: false,
    theme,
};

export default Checkbox;
