import React from 'react';
import {storiesOf} from '@storybook/react';
import Box from './Box';
import Heading from './Heading';

storiesOf('Heading', module).add('default', () => (
    <Box p={3}>
        <Heading>trigo</Heading>
    </Box>
));
