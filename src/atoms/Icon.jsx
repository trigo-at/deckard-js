import React from 'react';
import styled from 'styled-components';
import {space, color, propTypes} from 'styled-system';
import {oneOf, oneOfType, string, number} from 'prop-types';
import icons from '../icons.json';
import theme from '../theme';

const Base = ({name, size, ...props}) => {
    const icon = icons[name];
    if (!icon) return false;

    return (
        <svg
            {...props}
            viewBox={icon.viewBox}
            width={size}
            height={size}
            fill="currentcolor">
            <path d={icon.path} />
        </svg>
    );
};

Base.propTypes = {
    name: oneOf(Object.keys(icons)).isRequired,
    size: oneOfType([string, number]),
};

Base.defaultProps = {
    size: 24,
};

const Icon = styled(Base)`
    flex: none;
    ${space} ${color};
`;

Icon.displayName = 'Icon';

Icon.defaultProps = {
    name: 'flag',
    size: 24,
    theme,
};

Icon.propTypes = {
    ...propTypes.space,
    ...propTypes.color,
    name: oneOf(Object.keys(icons)).isRequired,
    size: oneOfType([string, number]),
};

export default Icon;
