import React from 'react';
import styled from 'styled-components';
import {space, fontSize, themeGet} from 'styled-system';

import theme from './theme';
import Flex from './Flex';
import Icon from './Icon';

const ClickableIcon = styled(Icon)`
    pointer-events: none;
`;

const SelectBase = styled.select`
    appearance: none;
    display: block;
    width: 100%;
    font-family: inherit;
    color: inherit;
    background-color: transparent;
    border-radius: ${themeGet('radius')};
    border-width: 1px;
    border-style: solid;
    border-color: ${themeGet('colors.lightGray')};
    ${space} ${fontSize} &:focus {
        outline: none;
        border-color: ${themeGet('colors.active')};
        box-shadow: 0 0 0 1px ${themeGet('colors.active')};
    }
`;

SelectBase.defaultProps = {
    theme,
    fontSize: 1,
    m: 0,
    pl: 12,
    pr: 32,
    py: 14,
};

const Select = styled(props => (
    <Flex alignItems="center">
        <SelectBase {...props} />
        <ClickableIcon legacy={false} ml={-32} name="cheveronDown" color="gray" />
    </Flex>
))``;

export default Select;
