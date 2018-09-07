import React from 'react';
import {
    flexDirection,
    alignItems,
    justifyContent,
    space,
    width,
    color,
    height,
    flexBasis,
    flex,
    style,
} from 'styled-system';
import styled from 'styled-components';
import cleanElement from './cleanElement';
// import Box from './Box';

export const justifyItems = style({
    prop: 'justifyItems',
});

const wrap = props => (props.wrap ? {flexWrap: 'wrap'} : null);

const Base = props => {
    const next = cleanElement(props);
    return <div {...next} />;
};

const Flex = styled(Base)`
    display: flex;
    ${space} ${width} ${color} ${alignItems} ${justifyContent} ${wrap} ${flexDirection} ${height} ${flexBasis} ${flex}
    ${justifyItems};
`;

Flex.displayName = 'Flex';

Flex.propTypes = {
    ...flexDirection.propTypes,
    ...flexBasis.propTypes,
    ...flex.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes,
    ...space.propTypes,
    ...width.propTypes,
    ...color.propTypes,
    ...height.propTypes,
    ...justifyItems.propTypes,
};

export default Flex;
