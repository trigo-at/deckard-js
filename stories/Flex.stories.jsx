import React from 'react';
import {storiesOf} from '@storybook/react';
import Box from '../src/Box';
import Flex from '../src/Flex';

storiesOf('Styles/Layout/Flex', module)
    .add('Basic', () => (
        <Flex alignItems="center">
            <Box width={1 / 2} p={3} color="white" bg="brandYellow">
                Flex
            </Box>
            <Box width={1 / 2} p={1} color="white" bg="brandGreen">
                Box
            </Box>
        </Flex>
    ))
    .add('Wrap', () => (
        <Flex wrap>
            <Box width={[1, 1 / 2]} p={3} color="white" bg="brandBlue">
                Flex
            </Box>
            <Box width={[1, 1 / 2]} p={3} color="white" bg="brandGreen">
                Wrap
            </Box>
            <Box width={[1, 1 / 2]} p={3} color="white" bg="brandYellow">
                Wrap
            </Box>
        </Flex>
    ))
    .add('Justify', () => (
        <Flex justifyContent="space-around">
            <Box width={1 / 3} p={2} color="white" bg="brandYellow">
                Flex
            </Box>
            <Box width={1 / 3} p={2} color="white" bg="brandGreen">
                Justify
            </Box>
        </Flex>
    ))
    .add('Direction', () => (
        <Flex flexDirection="column">
            <Box width={1 / 3} p={2} color="white" bg="brandBlue">
                Flex
            </Box>
            <Box width={1 / 3} p={2} color="white" bg="brandYellow">
                Direction
            </Box>
        </Flex>
    ));
