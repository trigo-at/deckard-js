import styled from 'styled-components';
import {number} from 'prop-types';
import theme from '../theme';

const maxWidth = props =>
    props.maxWidth ? {maxWidth: `${props.maxWidth}px`} : {maxWidth: props.theme.maxContainerWidth};

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    ${maxWidth};
`;

Container.propTypes = {
    maxWidth: number,
};

Container.defaultProps = {
    theme,
};

Container.displayName = 'Container';

export default Container;
