import styled from 'styled-components';
import PropTypes from 'prop-types';
import {borderRadius} from 'styled-system';
import Box from './Box';
import theme from '../theme';

const boxShadow = props => {
    const boxShadows = {
        sm: {
            'box-shadow': props.theme.boxShadows.default,
        },
        md: {
            'box-shadow': props.theme.boxShadows.md,
        },
        lg: {
            'box-shadow': props.theme.boxShadows.lg,
        },
        inner: {
            'box-shadow': props.theme.boxShadows.inner,
        },
    };
    return (
        boxShadows[props.boxShadowSize] || {
            'box-shadow': props.theme.boxShadows.default,
        }
    );
};

const boxBorder = props => ({
    border: `${props.borderWidth}px solid ${props.theme.colors[props.borderColor || 'snow']}`,
});

const Card = styled(Box)`
  ${boxShadow} ${boxBorder} ${borderRadius};
`;

Card.propTypes = {
    boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'inner']),
    borderColor: PropTypes.string,
    ...borderRadius.propTypes,
    borderWidth: PropTypes.oneOf([1, 2]),
};

Card.defaultProps = {
    borderColor: 'borderGray',
    borderRadius: 1,
    borderWidth: 1,
    theme,
};

Card.displayName = 'Card';

export default Card;
