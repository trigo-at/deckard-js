import React from 'react';
import {storiesOf} from '@storybook/react';
import Flex from '../src/Flex';

storiesOf('Styles|Layout/Flex', module)
    .add('Basic', () => (
        <Flex alignItems="center">
            <div width={1 / 2} p={3} color="white" bg="brandYellow">
                Flex
            </div>
            <div width={1 / 2} p={1} color="white" bg="brandGreen">
                Box
            </div>
        </Flex>
    ))
    .add('Wrap', () => (
        <Flex wrap>
            <div width={[1, 1 / 2]} p={3} color="white" bg="brandBlue">
                Flex
            </div>
            <div width={[1, 1 / 2]} p={3} color="white" bg="brandGreen">
                Wrap
            </div>
            <div width={[1, 1 / 2]} p={3} color="white" bg="brandYellow">
                Wrap
            </div>
        </Flex>
    ))
    .add('Justify', () => (
        <Flex justifyContent="space-around">
            <div width={1 / 3} p={2} color="white" bg="brandYellow">
                Flex
            </div>
            <div width={1 / 3} p={2} color="white" bg="brandGreen">
                Justify
            </div>
        </Flex>
    ))
    .add('Direction', () => (
        <Flex flexDirection="column">
            <div width={1 / 3} p={2} color="white" bg="brandBlue">
                Flex
            </div>
            <div width={1 / 3} p={2} color="white" bg="brandYellow">
                Direction
            </div>
        </Flex>
    ));
