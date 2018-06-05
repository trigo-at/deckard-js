import PropTypes from 'prop-types';
import styled from 'styled-components';
import {theme as themeGet, space} from 'styled-system';
import theme from '../theme';

const type = props => {
    const badgeColors = {
        gray: {
            backgroundColor: props.theme.colors.gray,
            color: props.theme.colors.white,
        },
        grayLight: {
            backgroundColor: props.theme.colors.grayLight,
            color: props.theme.colors.text,
        },
    };
    return badgeColors[props.bg];
};

const Badge = styled.div`
    border-radius: 99999px;
    display: inline-block;
    font-size: ${props => props.theme.fontSizes[0]}px;
    text-transform: uppercase;
    letter-spacing: ${themeGet('letterSpacings.caps')};
    ${space} ${type};
`;

Badge.displayName = 'Badge';

const numberStringOrArray = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
]);

Badge.propTypes = {
    bg: PropTypes.string,
    px: numberStringOrArray,
    py: numberStringOrArray,
};

Badge.defaultProps = {
    px: 2,
    py: 1,
    theme,
    color: 'text',
    bg: 'grayLight',
};

export default Badge;
