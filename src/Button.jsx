import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {space} from 'styled-system';
import theme from './theme';
import cleanElement from './cleanElement';

const Base = props => {
    const next = cleanElement(props);
    return <button {...next} />; // eslint-disable-line
};

const size = props => {
    switch (props.size) {
        case 'sm':
            return {
                fontSize: `${props.theme.fontSizes[0]}px`,
                padding: '7px 12px',
            };
        case 'md':
            return {
                fontSize: `${props.theme.fontSizes[1]}px`,
                padding: '9.5px 18px',
            };
        case 'lg':
            return {
                fontSize: `${props.theme.fontSizes[2]}px`,
                padding: '12px 22px',
            };
        default:
            return {
                fontSize: `${props.theme.fontSizes[1]}px`,
                padding: '9.5px 18px',
            };
    }
};

const fullWidth = props => (props.fullWidth ? {width: '100%'} : null);

const Button = styled(Base)`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 700;
  line-height: 1.5;
  cursor: pointer;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-width: 0;
  border-style: solid;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);

  &:disabled {
      background-color: ${props => props.theme.colors.snow};
      color: ${props => props.theme.colors.darkGray};
      opacity: 0.5;
  }

  &:hover {
    background-color: ${props => (props.disabled ? null : props.theme.colors.darkPrimary)};

  }

  ${fullWidth} ${size} ${space};
`;

const numberStringOrArray = PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]);

Button.propTypes = {
    /** Size */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    fullWidth: PropTypes.bool,
    /** Margin */
    m: numberStringOrArray,
    mt: numberStringOrArray,
    mr: numberStringOrArray,
    mb: numberStringOrArray,
    ml: numberStringOrArray,
    mx: numberStringOrArray,
    my: numberStringOrArray,
    /** Padding */
    p: numberStringOrArray,
    pt: numberStringOrArray,
    pr: numberStringOrArray,
    pb: numberStringOrArray,
    pl: numberStringOrArray,
    px: numberStringOrArray,
    py: numberStringOrArray,
};

Button.defaultProps = {
    theme,
};

Button.displayName = 'Button';

export default Button;
