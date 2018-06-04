import React from 'react';
import styled, {
    ThemeProvider as StyledThemeProvider,
    injectGlobal,
} from 'styled-components';
import theme from './theme';

// eslint-disable-next-line
injectGlobal`
    body {
        margin: 0;
    }
`;

export const Base = styled.div`
    font-family: ${props => props.theme.fontContent};
    line-height: 1.5;
    letter-spacing: 0;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${props => props.theme.fontHeading};
        letter-spacing: 0.05em;
    }

    * {
        box-sizing: border-box;
    }
`;

const ThemeProvider = props => (
    <StyledThemeProvider theme={theme}>
        <Base {...props} />
    </StyledThemeProvider>
);

ThemeProvider.propTypes = {};

export default ThemeProvider;
