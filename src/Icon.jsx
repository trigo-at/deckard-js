import React from 'react';
import styled from 'styled-components';
import {space, color} from 'styled-system';
import {oneOf, oneOfType, string, number} from 'prop-types';
import cleanElement from 'clean-element';
import icons from './icons.json';
import theme from './theme';

const CleanSVG = cleanElement('svg');

const Base = ({name, size, ...props}) => {
    const icon = icons[name];
    if (!icon) return false;

    return (
        <CleanSVG {...props} viewBox={icon.viewBox} width={size} height={size} fill="currentcolor">
            {icon.path && <path d={icon.path} />}
            {icon.polygon && <polygon points={icon.polygon} />}
        </CleanSVG>
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
    ...space.propTypes,
    ...color.propTypes,
    name: oneOf(Object.keys(icons)).isRequired,
    size: oneOfType([string, number]),
};

export default Icon;
