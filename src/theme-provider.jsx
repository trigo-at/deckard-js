import React from 'react';
import {node} from 'prop-types';
import {
    ThemeProvider as ChakraThemeProvider,
    theme,
    CSSReset,
} from '@chakra-ui/core';
import {Global, css} from '@emotion/core';

const customIcons = {
    home: {
        path: (
            <path
                fill="currentColor"
                d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    search: {
        path: (
            <path
                fill="currentColor"
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    add: {
        path: (
            <path
                fill="currentColor"
                d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    mobileDevices: {
        path: (
            <path
                fill="currentColor"
                d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    moodSad: {
        path: (
            <path
                fill="currentColor"
                d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 6a6 6 0 0 0-11.32 0h11.32z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    wrench: {
        path: (
            <path
                fill="currentColor"
                d="M6.47 9.8A5 5 0 0 1 .2 3.22l3.95 3.95 2.82-2.83L3.03.41a5 5 0 0 1 6.4 6.68l10 10-2.83 2.83L6.47 9.8z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    userGroup: {
        path: (
            <path
                fill="currentColor"
                d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    close: {
        path: (
            <path
                fill="currentColor"
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    save: {
        path: (
            <path
                fill="currentColor"
                d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    userAdd: {
        path: (
            <path
                fill="currentColor"
                d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    listBullet: {
        path: (
            <path
                fill="currentColor"
                d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z"
            />
        ),
        viewBox: '0 0 20 20',
    },
    'dots-horizontal': {
        path: (
            <path
                fill="currentColor"
                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
            />
        ),

        viewBox: '0 0 20 20',
    },
    'dots-vertical': {
        path: (
            <path
                fill="currentColor"
                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
            />
        ),
        viewBox: '0 0 20 20',
    },
};

const customTheme = {
    ...theme,
    fonts: {
        body: 'inherit',
        heading: 'inherit',
        mono: 'Menlo, monospace',
    },
    icons: {
        ...theme.icons,
        ...customIcons,
    },
};

const ThemeProvider = ({children}) => {
    return (
        <ChakraThemeProvider theme={customTheme}>
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
