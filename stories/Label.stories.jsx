import React from 'react';
import {storiesOf} from '@storybook/react';
import Label from '../src/Label';

storiesOf('Components|Label', module).add('Label', () => <Label>Label</Label>, {
    info: {
        inline: true,
    },
});
