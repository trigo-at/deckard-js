import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Box from './Box';

storiesOf('Box', module)
    .add(
        'Layout component',
        withInfo({
            text:
                'A low-level layout component for setting width, margin, padding, and color',
            inline: true,
        })(() => (
            <Box border="grey" p={3}>
                Hello
            </Box>
        ))
    )
    .add('Padding', () => <Box p={3}>Hello</Box>)
    .add('Margin', () => <Box m={3}>Hello</Box>)
    .add('Color', () => (
        <Box p={3} color="yellow">
            Hello
        </Box>
    ))
    .add('Background Color', () => (
        <Box p={3} color="white" bg="yellow">
            Hello
        </Box>
    ))
    .add('Width', () => (
        <Box p={3} width={1 / 2} color="white" bg="green">
            Half Width
        </Box>
    ))
    .add('Pixel Width', () => (
        <Box p={3} width={256} color="white" bg="blue">
            256px width
        </Box>
    ))
    .add('VW Width', () => (
        <Box p={3} width="50vw" color="white" bg="yellow">
            50vw width
        </Box>
    ))
    .add('Directional Padding', () => (
        <Box p={3}>
            <Box m={1} pt={3} color="white" bg="yellow">
                Padding Top
            </Box>
            <Box m={1} pr={3} color="white" bg="yellow">
                Padding Right
            </Box>
            <Box m={1} pb={3} color="white" bg="yellow">
                Padding Bottom
            </Box>
            <Box m={1} pl={3} color="white" bg="yellow">
                Padding Left
            </Box>
            <Box m={1} px={3} color="white" bg="yellow">
                Padding X-Axis
            </Box>
            <Box m={1} py={3} color="white" bg="yellow">
                Padding Y-Axis
            </Box>
        </Box>
    ))
    .add('Directional Margin', () => (
        <Box p={3}>
            <Box mt={3} color="white" bg="yellow">
                Margin Top
            </Box>
            <Box mr={3} color="white" bg="orange.1">
                Margin Right
            </Box>
            <Box mb={3} color="white" bg="yellow">
                Margin Bottom
            </Box>
            <Box ml={3} color="white" bg="yellow">
                Margin Left
            </Box>
            <Box mx={3} color="white" bg="yellow">
                Margin X-Axis
            </Box>
            <Box my={3} color="white" bg="yellow">
                Margin Y-Axis
            </Box>
        </Box>
    ));
