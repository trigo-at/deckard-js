import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Box from '../src/Box';
import Input from '../src/Input';
import Label from '../src/Label';

storiesOf('Components/Input', module)
    .add(
        'Input component',
        withInfo({
            inline: true,
            text: 'Simple styled input component that accepts a color and whether or not to show an error container.',
        })(() => <Input my={3} placeholder="trigo" />)
    )
    .add('Colors', () => (
        <Box width={400}>
            <Input mb={3} id="input-colors-1" placeholder="No color" />
            <Input mb={3} id="input-colors-3" color="positive" placeholder="positive" />
            <Input mb={3} id="input-colors-4" color="warning" placeholder="warning" />
            <Input mb={3} id="input-colors-5" color="negative" placeholder="negative" />
        </Box>
    ))
    .add('With external label', () => (
        <Box width={400}>
            <Label htmlFor="sample-input">Label!</Label>
            <Input id="sample-input" placeholder="Click the label" />
        </Box>
    ));
