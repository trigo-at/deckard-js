import React from 'react';
import styled, {ThemeProvider as StyledThemeProvider, injectGlobal} from 'styled-components';
import theme from './theme';

// eslint-disable-next-line
injectGlobal`
    body {
        margin: 0;
    }
`;

export const Base = styled.div`
    * {
        font-family: ${props => props.theme.fonts.content};
        line-height: 1.5;
        letter-spacing: 0;
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${props => props.theme.fonts.heading};
        letter-spacing: 0.05em;
    }
`;

const ThemeProvider = props => (
    <StyledThemeProvider theme={theme}>
        <Base {...props} />
    </StyledThemeProvider>
);

ThemeProvider.propTypes = {};

export default ThemeProvider;
