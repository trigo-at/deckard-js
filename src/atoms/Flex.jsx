import {flexDirection, alignItems, justifyContent} from 'styled-system';
import Box from './Box';

const wrap = props => (props.wrap ? {flexWrap: 'wrap'} : null);

const Flex = Box.extend`
    display: flex;
    ${wrap}
    ${flexDirection}
    ${alignItems}
    ${justifyContent}

`;

Flex.displayName = 'Flex';

Flex.propTypes = {
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes,
};

export default Flex;
