import React from 'react';
import {storiesOf} from '@storybook/react';
import Label from '../src/Label';
// import Input from '../src/Input';
// import Flex from './Flex';

storiesOf('Components|Label', module).add('Label component', () => <Label>Label Component</Label>, {
    info: {
        inline: true,
        header: false,
        text: 'Basic styled label component',
    },
});
