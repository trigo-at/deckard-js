import React from 'react';
import {storiesOf} from '@storybook/react';
import Text from '../src/Text';

storiesOf('Components|Text', module)
    .add(
        'Typography component',
        () => <Text>De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia?</Text>,
        {
            info: {
                inline: true,
                text: 'A low-level component for setting font-size, typographic styles, margin, and color',
            },
        }
    )
    .add('fontSize', () => (
        <div>
            <Text fontSize={6}>Hello 6</Text>
            <Text fontSize={5}>Hello 5</Text>
            <Text fontSize={4}>Hello 4</Text>
            <Text fontSize={3}>Hello 3</Text>
            <Text fontSize={2}>Hello 2</Text>
            <Text fontSize={1}>Hello 1</Text>
            <Text fontSize={0}>Hello 0</Text>
        </div>
    ))
    .add('align', () => (
        <div>
            <Text textAlign="left">Hello Left</Text>
            <Text textAlign="center">Hello Center</Text>
            <Text textAlign="right">Hello Right</Text>
        </div>
    ))
    .add('regular', () => <Text regular>Hello Regular</Text>)
    .add('bold', () => <Text bold>Hello Bold</Text>)
    .add('caps', () => <Text caps>Hello Caps</Text>)
    .add('strikethrough', () => <Text.s>Hello Strikethrough</Text.s>)
    .add('spacing', () => (
        <div>
            <Text mt={4} mb={2}>
                Hello Margin
            </Text>
            <Text p={3}>Hello Padding</Text>
        </div>
    ))
    .add('color', () => (
        <div>
            <Text color="brandYellow">Hello yellow</Text>
            <Text color="brandGreen">Hello green</Text>
            <Text color="brandBlue">Hello blue</Text>
        </div>
    ));
