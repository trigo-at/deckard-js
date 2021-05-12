import React from 'react';
import {node, object} from 'prop-types';
import {ChakraProvider} from '@chakra-ui/react';
import {Global, css} from '@emotion/react';
import defaultTheme from './default-theme';

const ThemeProvider = ({children, theme}) => {
    return (
        <ChakraProvider resetCSS theme={theme || defaultTheme}>
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
    theme: object,
};

ThemeProvider.defaultProps = {
    theme: undefined,
};

export default ThemeProvider;
