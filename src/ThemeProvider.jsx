import React from 'react';
import {bool} from 'prop-types';
import styled, {css, ThemeProvider as StyledThemeProvider, injectGlobal} from 'styled-components';
import defaultTheme from './theme';

// eslint-disable-next-line
injectGlobal`
    body {
        margin: 0;
    }
`;

export const Base = styled.div`
    * {
        ${({theme, applyFont}) =>
            applyFont
                ? css`
                      font-family: ${theme.fonts};
                      line-height: 1.5;
                      letter-spacing: 0;
                  `
                : ''};
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${({theme, applyFont}) =>
            applyFont
                ? css`
                      font-family: ${theme.fonts};
                      letter-spacing: 0.05em;
                  `
                : ''};
    }
`;

const ThemeProvider = ({applyFont, ...props}) => (
    <StyledThemeProvider theme={defaultTheme}>
        <Base {...props} applyFont={applyFont} />
    </StyledThemeProvider>
);

ThemeProvider.propTypes = {
    applyFont: bool,
};

ThemeProvider.defaultProps = {
    applyFont: true,
};

export default ThemeProvider;
