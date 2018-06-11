import React from 'react';
import styled from 'styled-components';
import {space, fontSize, theme as styledTheme} from 'styled-system';

import theme from '../theme';
import Flex from './Flex';
import Icon from './Icon';

const ClickableIcon = Icon.extend`
    pointer-events: none;
`;

const SelectBase = styled.select`
    appearance: none;
    display: block;
    width: 100%;
    font-family: inherit;
    color: inherit;
    background-color: transparent;
    border-radius: ${styledTheme('radius')};
    border-width: 1px;
    border-style: solid;
    border-color: ${styledTheme('colors.lightGray')};
    ${space} ${fontSize} &:focus {
        outline: none;
        border-color: ${styledTheme('colors.active')};
        box-shadow: 0 0 0 1px ${styledTheme('colors.active')};
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
    <Flex align="center">
        <SelectBase {...props} />
        <ClickableIcon
            legacy={false}
            ml={-32}
            name="cheveronDown"
            color="gray"
        />
    </Flex>
))``;

export default Select;
