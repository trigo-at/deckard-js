import React from 'react';
import {node} from 'prop-types';
import {ThemeProvider as ChakraThemeProvider, CSSReset} from '@chakra-ui/core';
import {Global, css} from '@emotion/core';
import defaultTheme from './default-theme';

const ThemeProvider = ({children}) => {
    return (
        <ChakraThemeProvider theme={defaultTheme}>
            <CSSReset />
            <Global
                styles={css`
                    @import url('https://rsms.me/inter/inter.css');
                    html {
                        font-family: 'Inter', sans-serif;
                    }
                    @supports (font-variation-settings: normal) {
                        html {
                            font-family: 'Inter var', sans-serif;
                        }
                    }
                `}
            />
            {children}
        </ChakraThemeProvider>
    );
};

ThemeProvider.propTypes = {
    children: node.isRequired,
};

export default ThemeProvider;
