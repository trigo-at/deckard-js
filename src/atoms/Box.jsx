import styled from 'styled-components';
import {
    space,
    width,
    fontSize,
    color,
    flex,
    order,
    alignSelf,
    textAlign,
} from 'styled-system';
import theme from '../theme';

const Box = styled.div`
    box-sizing: border-box;
    ${width}
    ${space}
    ${fontSize}
    ${textAlign}
    ${color}
    ${flex}
    ${order}
    ${alignSelf}
`;

Box.displayName = 'Box';
Box.header = Box.withComponent('header');
Box.main = Box.withComponent('main');
Box.article = Box.withComponent('article');
Box.section = Box.withComponent('section');
Box.footer = Box.withComponent('footer');

Box.defaultProps = {
    theme,
};

Box.propTypes = {
    ...width.propTypes,
    ...space.propTypes,
    ...fontSize.propTypes,
    ...textAlign.propTypes,
    ...color.propTypes,
    ...flex.propTypes,
    ...order.propTypes,
    ...alignSelf.propTypes,
};

export default Box;
