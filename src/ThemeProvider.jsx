import React, {Fragment} from 'react';
import {bool, object} from 'prop-types';
import styled, {css, ThemeProvider as StyledThemeProvider, createGlobalStyle} from 'styled-components';
import defaultTheme from './theme';

const GlobalStyle = createGlobalStyle`
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

const ThemeProvider = ({applyFont, theme = {}, ...props}) => (
    <StyledThemeProvider theme={{...defaultTheme, ...theme}}>
        <Fragment>
            <Base {...props} applyFont={applyFont} />
            <GlobalStyle />
        </Fragment>
    </StyledThemeProvider>
);

ThemeProvider.propTypes = {
    applyFont: bool,
    theme: object, // eslint-disable-line
};

ThemeProvider.defaultProps = {
    applyFont: true,
    theme: undefined,
};

export default ThemeProvider;
