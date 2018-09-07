import styled from 'styled-components';
import {space, themeGet} from 'styled-system';
import {string} from 'prop-types';
import defaultTheme from './theme';

const borders = ({color, theme}) => {
    const borderColor = color ? theme.colors[color] : theme.colors.lightGray;
    const focusColor = color ? borderColor : theme.colors.primary;
    return {
        'border-color': borderColor,
        'box-shadow': `0 0 0 1px ${borderColor}`,
        ':focus': {
            outline: 0,
            'border-color': focusColor,
            'box-shadow': `0 0 0 2px ${focusColor}`,
            '+label': {
                color: focusColor,
            },
        },
    };
};

const Input = styled.input`
    appearance: none;
    display: block;
    width: 100%;
    font-family: inherit;
    color: inherit;
    font-size: ${themeGet('fontSizes.1')}px;
    background-color: transparent;
    border-radius: ${themeGet('radius')};
    border-width: 0px;
    border-style: solid;
    border-color: ${themeGet('colors.lightGray')};
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 0;
    ::placeholder {
        color: ${themeGet('colors.gray')};
    }
    ::-ms-clear {
        display: none;
    }
    ${borders} ${space};
`;

Input.displayName = 'Input';

Input.propTypes = {
    id: string.isRequired,
    color: string,
    ...space.propTypes,
};

Input.defaultProps = {
    theme: defaultTheme,
};

export default Input;
