import React from 'react';
import {storiesOf} from '@storybook/react';
import Box from './Box';
import Text from './Text';

storiesOf('Text', module).add('default', () => (
    <Box p={3}>
        <Text>trigo</Text>
    </Box>
));
