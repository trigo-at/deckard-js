import styled from 'styled-components';
import {space, theme as styledTheme, propTypes} from 'styled-system';
import PropTypes from 'prop-types';
import defaultTheme from '../theme';

const borders = ({color, theme}) => {
    const borderColor = color ? theme.colors[color] : theme.colors.gray;
    const focusColor = color ? borderColor : theme.colors.active;
    return {
        'border-color': borderColor,
        'box-shadow': `0 0 0 1px ${borderColor}`,
        ':focus': {
            outline: 0,
            'border-color': focusColor,
            'box-shadow': `0 0 0 2px ${focusColor}`,
        },
    };
};

const Input = styled.input`
    appearance: none;
    display: block;
    width: 100%;
    font-family: inherit;
    color: inherit;
    font-size: ${styledTheme('fontSizes.2')}px;
    background-color: transparent;
    border-radius: ${styledTheme('radius')};
    border-width: 0px;
    border-style: solid;
    border-color: ${styledTheme('colors.lightGray')};
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 6px;
    padding-right: 6px;
    margin: 0;
    ::placeholder {
        color: ${styledTheme('colors.lightGray')};
    }
    ::-ms-clear {
        display: none;
    }
    ${borders} ${space};
`;

Input.displayName = 'Input';
Input.propTypes = {
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    ...propTypes.borders,
    ...propTypes.space,
};

Input.defaultProps = {
    theme: defaultTheme,
};

export default Input;
