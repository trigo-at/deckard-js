import React from 'react';
import {storiesOf} from '@storybook/react';
import Box from './Box';
import Card from './Card';

storiesOf('Card', module)
    .add('Box Shadows with default border', () => (
        <Box>
            <Card
                m={4}
                p={4}
                width={1 / 2}
                color="text"
                bg="white"
                borderWidth={1}>
                Default Shadow
            </Card>
            <Card
                boxShadowSize="md"
                m={4}
                p={4}
                width={1 / 2}
                color="text"
                bg="white"
                borderWidth={1}>
                Medium Shadow
            </Card>
            <Card
                boxShadowSize="lg"
                m={4}
                p={4}
                width={1 / 2}
                color="text"
                bg="white"
                borderWidth={1}>
                Large Shadow
            </Card>
            <Card
                boxShadowSize="inner"
                m={4}
                p={4}
                width={1 / 2}
                color="text"
                bg="white"
                borderWidth={1}>
                Inner Shadow
            </Card>
        </Box>
    ))
    .add('Box Shadows with focused 2px border', () => (
        <Box>
            <Card
                m={4}
                p={4}
                width={1 / 2}
                color="text"
                bg="white"
                borderWidth={2}>
                Default Shadow
            </Card>
            <Card
                boxShadowSize="md"
                m={4}
                p={4}
                width={1 / 2}
                color="text"
                bg="white"
                borderWidth={2}>
                Medium Shadow
            </Card>
            <Card
                boxShadowSize="lg"
                m={4}
                p={4}
                width={1 / 2}
                color="text"
                bg="white"
                borderWidth={2}>
                Large Shadow
            </Card>
            <Card
                boxShadowSize="inner"
                m={4}
                p={4}
                width={1 / 2}
                color="text"
                bg="white"
                borderWidth={2}>
                Inner Shadow
            </Card>
        </Box>
    ))
    .add('Box Shadows with varying border radii', () => (
        <Box>
            <Card
                m={4}
                p={4}
                width={1 / 2}
                color="black"
                bg="white"
                borderRadius={0}>
                Default Shadow - 0px
            </Card>
            <Card
                boxShadowSize="md"
                m={4}
                p={4}
                width={1 / 2}
                color="black"
                bg="white"
                borderRadius={10}>
                Medium Shadow - 10px
            </Card>
            <Card
                boxShadowSize="lg"
                m={4}
                p={4}
                width={1 / 2}
                color="black"
                bg="white"
                borderRadius={20}>
                Large Shadow - 20px
            </Card>
            <Card
                boxShadowSize="inner"
                m={4}
                p={4}
                width={1 / 2}
                color="black"
                bg="white"
                borderRadius="30px">
                Inner Shadow - 30px
            </Card>
        </Box>
    ));
