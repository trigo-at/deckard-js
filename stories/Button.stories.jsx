import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../src/Button';

storiesOf('Components|Button', module)
    .add('Button', () => <Button>Button</Button>, {
        info: {
            inline: true,
        },
    })
    .add('Outline', () => <Button outline>Outline Button</Button>, {
        info: {
            inline: true,
        },
    });
