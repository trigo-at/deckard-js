import React from 'react';
import {node} from 'prop-types';
import {ChakraProvider} from '@chakra-ui/react';
import {Global, css} from '@emotion/react';
import defaultTheme from './default-theme';

const ThemeProvider = ({children}) => {
    return (
        <ChakraProvider resetCSS theme={defaultTheme}>
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
        </ChakraProvider>
    );
};

ThemeProvider.propTypes = {
    children: node.isRequired,
};

export default ThemeProvider;
