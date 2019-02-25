import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '../src/Input';

storiesOf('Components|Input', module).add('Input', () => <Input />, {
    info: {
        inline: true,
    },
});
