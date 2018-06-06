import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import Flex from './Flex';
import Box from './Box';

const ColorBox = props => (
    <Box p={4} m={2} width="200px" textAlign="center" {...props} />
);

storiesOf('Welcome', module).add('Colors', () => (
    <Fragment>
        <Flex>
            <ColorBox bg="brandYellow">brandYellow</ColorBox>
            <ColorBox bg="brandBlue" color="white">
                brandBlue
            </ColorBox>
            <ColorBox bg="brandGreen" color="white">
                brandGreen
            </ColorBox>
        </Flex>
        <Flex>
            <ColorBox bg="primary" color="white">
                primary
            </ColorBox>
            <ColorBox bg="darkPrimary" color="white">
                darkPrimary
            </ColorBox>
            <ColorBox bg="secondary">secondary</ColorBox>
            <ColorBox bg="black" color="white">
                black
            </ColorBox>
            <ColorBox bg="white">white</ColorBox>
        </Flex>
        <Flex>
            <ColorBox bg="negative" color="white">
                negative
            </ColorBox>
            <ColorBox bg="positive">positive</ColorBox>
            <ColorBox bg="warning">warning</ColorBox>
            <ColorBox bg="active">active</ColorBox>
        </Flex>
        <Flex>
            <ColorBox bg="darkGray" color="white">
                darkGray
            </ColorBox>
            <ColorBox bg="gray" color="white">
                Gray
            </ColorBox>
            <ColorBox bg="lightGray">lightGray</ColorBox>
            <ColorBox bg="snow">snow</ColorBox>
        </Flex>
    </Fragment>
));
