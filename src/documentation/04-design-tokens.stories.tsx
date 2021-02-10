/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {Box, Heading, Stack} from '@chakra-ui/react';
import ThemeProvider from '../theme-provider';
import theme from '../default-theme';

const ColorBox = ({
    themeKey,
    themeValue,
}: {
    themeKey: string;
    themeValue: string;
}) => {
    return (
        <Box display="flex" flexDirection="column" width="9%" boxShadow="sm">
            <Box bg={themeKey} height="50px" />
            <Box px={2} py={1}>
                <Box fontSize="9px" fontWeight="800">
                    {themeKey}
                </Box>
                <Box fontSize="12px" fontFamily="mono">
                    {themeValue}
                </Box>
            </Box>
        </Box>
    );
};

const ColorGroup = ({
    heading,
    colorKey,
}: {
    heading: string;
    colorKey: React.ReactNode;
}) => {
    return (
        <>
            <Heading fontSize="xl" p={2}>
                {heading}
            </Heading>
            <Box display="flex" justifyContent="space-between">
                {Object.keys(theme.colors[colorKey]).map((key) => {
                    return (
                        <ColorBox
                            key={`${colorKey}.${key}`}
                            themeKey={`${colorKey}.${key}`}
                            themeValue={theme.colors[colorKey][key]}
                        />
                    );
                })}
            </Box>
        </>
    );
};

export const PrimaryColor = () => (
    <ThemeProvider>
        <ColorGroup heading="Indigo" colorKey="primary" />
    </ThemeProvider>
);

PrimaryColor.storyName = 'PrimaryColor';

export const AllColors = () => (
    <ThemeProvider>
        <Stack spacing={6} shouldWrapChildren>
            <ColorGroup heading="Gray" colorKey="gray" />
            <ColorGroup heading="Red" colorKey="red" />
            <ColorGroup heading="Yellow" colorKey="yellow" />
            <ColorGroup heading="Orange" colorKey="orange" />
            <ColorGroup heading="Green" colorKey="green" />
            <ColorGroup heading="Blue" colorKey="blue" />
            <ColorGroup heading="Indigo" colorKey="indigo" />
            <ColorGroup heading="Purple" colorKey="purple" />
            <ColorGroup heading="Pink" colorKey="pink" />
            <ColorGroup heading="Teal" colorKey="teal" />
        </Stack>
    </ThemeProvider>
);

AllColors.storyName = 'AllColors';
