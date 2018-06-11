import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Box from './Box';
import Input from './Input';
import Label from './Label';

storiesOf('Input', module)
    .add(
        'Input component',
        withInfo({
            inline: true,
            text: 'Simple styled input component that accepts a color and whether or not to show an error container.',
        })(() => <Input my={3} />)
    )
    .add('Colors', () => (
        <Box width={400}>
            <Input mb={3} id="input-colors-1" placeholder="No color" />
            <Input mb={3} id="input-colors-2" color="negative" placeholder="negative" />
            <Input mb={3} id="input-colors-3" color="brandGreen" placeholder="brandGreen" />
            <Input mb={3} id="input-colors-4" color="brandYellow" placeholder="brandYellow" />
            <Input mb={3} id="input-colors-5" color="brandBlue" placeholder="brandBlue" />
        </Box>
    ))
    .add('With external label', () => (
        <Box width={400}>
            <Label htmlFor="sample-input">Label!</Label>
            <Input id="sample-input" placeholder="Click the label" />
        </Box>
    ));
