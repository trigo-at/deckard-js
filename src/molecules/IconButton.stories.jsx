import React from 'react';
import {storiesOf, action} from '@storybook/react';
import IconButton from './IconButton';

storiesOf('Components/IconButton', module)
    .add('Close Button', () => <IconButton name="close" onClick={action('clicked')} />)
    .add('Disabled Close Button', () => <IconButton disabled name="close" onClick={action('clicked')} />);
