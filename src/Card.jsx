import styled from 'styled-components';
import PropTypes from 'prop-types';
import {borderRadius, boxShadow} from 'styled-system';
import Box from './Box';
import theme from './theme';

const boxBorder = props => ({
    border: `${props.borderWidth}px solid ${props.theme.colors[props.borderColor || 'snow']}`,
});

const Card = styled(Box)`
  ${boxShadow} ${boxBorder} ${borderRadius};
`;

Card.propTypes = {
    ...boxShadow.propTypes,
    ...borderRadius.propTypes,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.oneOf([1, 2]),
};

Card.defaultProps = {
    borderColor: 'borderGray',
    borderRadius: 1,
    borderWidth: 1,
    boxShadow: 0,
    theme,
};

Card.displayName = 'Card';

export default Card;
