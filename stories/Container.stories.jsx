import React from 'react';
import {storiesOf} from '@storybook/react';
import Container from '../src/Container';

storiesOf('Styles|Layout/Container', module)
    .add('Default align with theme max width', () => (
        <Container>
            <div className="p-4 bg-grey-light h-screen">Container Compnent</div>
        </Container>
    ))
    .add('Input maxWidth', () => (
        <Container maxWidth={500}>
            <div className="p-4 bg-grey-light h-screen">Container Compnent</div>
        </Container>
    ));
