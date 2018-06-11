import React from 'react';
import {
    flexDirection,
    alignItems,
    justifyContent,
    space,
    width,
    color,
    height,
} from 'styled-system';
import styled from 'styled-components';
import cleanElement from '../utils/cleanElement';
// import Box from './Box';

const wrap = props => (props.wrap ? {flexWrap: 'wrap'} : null);

const Base = props => {
    const next = cleanElement(props);
    return <div {...next} />;
};

const Flex = styled(Base)`
    display: flex;
    ${space} ${width} ${color} ${alignItems} ${justifyContent} ${wrap} ${flexDirection} ${height};

`;

Flex.displayName = 'Flex';

Flex.propTypes = {
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes,
    ...space.propTypes,
    ...width.propTypes,
    ...color.propTypes,
    ...height.propTypes,
};

export default Flex;
