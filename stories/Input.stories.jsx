import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Box, Label} from 'rebass';
import Input from '../src/Input';

storiesOf('Input', module)
    .add(
        'Input component',
        withInfo({
            inline: true,
            text:
                'Simple styled input component that accepts a borderColor and whether or not to show an error container.',
        })(() => <Input my={3} />)
    )
    .add('Colors', () => (
        <Box width={400}>
            <Input mb={3} id="input-colors-1" placeholder="No color" />
            <Input mb={3} id="input-colors-2" border={1} borderColor="negative" placeholder="negative" />
            <Input mb={3} id="input-colors-3" border={1} borderColor="brandGreen" placeholder="brandGreen" />
            <Input mb={3} id="input-colors-4" border={1} borderColor="brandYellow" placeholder="brandYellow" />
            <Input mb={3} id="input-colors-5" border={1} borderColor="brandBlue" placeholder="brandBlue" />
        </Box>
    ))
    .add('With external label', () => (
        <Box width={400}>
            <Label htmlFor="sample-input">Label!</Label>
            <Input id="sample-input" placeholder="Click the label" />
        </Box>
    ));
