import React from 'react';
import styled, {injectGlobal} from 'styled-components';
import {Provider} from 'rebass';
import trigoTheme from './theme';

// eslint-disable-next-line
injectGlobal`
    * { box-sizing: border-box; }
    body { margin: 0; }
`;

const StyledRoot = styled.div`
    * {
        font-family: ${({theme}) => theme.fonts.content};
        line-height: 1.5;
        letter-spacing: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${({theme}) => theme.fonts.heading};
        letter-spacing: 0.05em;
    }
`;

const ThemeProvider = props => (
    <Provider theme={trigoTheme}>
        <StyledRoot {...props} />
    </Provider>
);

ThemeProvider.propTypes = {};

export default ThemeProvider;
