import React from 'react';
import {storiesOf} from '@storybook/react';
import Container from '../src/Container';
import Box from '../src/Box';

storiesOf('Styles|Layout/Container', module)
    .add('Default align with theme max width', () => (
        <Container>
            <Box p={4} bg="lightGray" style={{height: `100vh`}}>
                Container Compnent
            </Box>
        </Container>
    ))
    .add('Input maxWidth', () => (
        <Container maxWidth={500}>
            <Box p={4} bg="lightGray" style={{height: `100vh`}}>
                Container Compnent
            </Box>
        </Container>
    ));
