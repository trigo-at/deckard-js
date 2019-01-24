import styled from 'styled-components';
import Button from './Button';

const OutlineButton = styled(Button)`
    color: ${props => props.theme.colors.primary};
    box-shadow: inset 0 0 0 2px ${props => props.theme.colors.primary};
    background-color: transparent;
    &:hover {
        color: ${props => (props.disabled ? null : props.theme.colors.darkPrimary)};
        box-shadow: inset 0 0 0 2px ${props => (props.disabled ? null : props.theme.colors.darkPrimary)};
        background-color: transparent;
    }
`;

OutlineButton.defaultProps = {};

OutlineButton.displayName = 'OutlineButton';

export default OutlineButton;
