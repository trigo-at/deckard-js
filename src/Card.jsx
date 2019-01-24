import styled from 'styled-components';
import PropTypes from 'prop-types';
import {borderRadius, boxShadow} from 'styled-system';

const Card = styled.div`
    ${boxShadow} ${borderRadius};
`;

Card.propTypes = {
    ...boxShadow.propTypes,
    ...borderRadius.propTypes,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.oneOf([1, 2]),
};

Card.defaultProps = {
    borderRadius: 1,
    boxShadow: 0,
};

Card.displayName = 'Card';

export default Card;
