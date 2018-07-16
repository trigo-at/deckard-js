import styled from 'styled-components';
import {space, fontSize, fontWeight, color, propTypes, themeGet} from 'styled-system';
import theme from '../theme';

const nowrap = props =>
    props.nowrap
        ? {
              whiteSpace: 'nowrap',
          }
        : null;

const accessiblyHide = props =>
    props.hidden
        ? {
              position: 'absolute',
              width: '1px',
              height: '1px',
              clip: 'rect(1px, 1px, 1px, 1px)',
          }
        : null;

const Label = styled.label`
  font-size: ${themeGet('fontSizes.1')}px;
  letter-spacing: 0.2px;
  display: block;
  width: 100%;
  margin: 0;
  ${space} ${fontSize} ${color} ${fontWeight};
  ${nowrap}
  ${accessiblyHide}
`;

Label.propTypes = {
    ...space.propTypes,
    ...fontSize.propTypes,
    ...color.propTypes,
    ...fontWeight.propTypes,
};

Label.defaultProps = {
    fontWeight: 'bold',
    color: 'darkGray',
    theme,
};

Label.displayName = 'Label';

export default Label;
