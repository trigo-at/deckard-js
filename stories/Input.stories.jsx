import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '../src/Input';

storiesOf('Components|Input', module).add('Input component', () => <Input placeholder="trigo" />, {
    info: {
        inline: true,
        header: false,
        text: 'Basic styled input component',
    },
});
