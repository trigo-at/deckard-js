import React from 'react';
import {storiesOf} from '@storybook/react';
import Box from './Box';

storiesOf('Box', module)
    .add('default', () => <Box>Hello Box</Box>)
    .add('yellow', () => <Box bg="yellow">Hello Box</Box>)
    .add('green', () => <Box bg="green">Hello Box</Box>)
    .add('blue', () => <Box bg="blue">Hello Box</Box>);
