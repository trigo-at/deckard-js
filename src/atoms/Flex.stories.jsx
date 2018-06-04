import React from 'react';
import {storiesOf} from '@storybook/react';
import Box from './Box';
import Flex from './Flex';

storiesOf('Flex', module).add('default', () => (
    <Flex>
        <Box>flex</Box>
    </Flex>
));
