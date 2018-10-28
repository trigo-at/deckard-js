import React from 'react';
import {storiesOf} from '@storybook/react';
import Badge from '../src/Badge';

storiesOf('Components|Badge', module)
    .add('Badge component', () => <Badge bg="lightGray">badge</Badge>, {
        info: {inline: true, text: 'Use the <Badge /> component to render a primitive badge.'},
    })
    .add('All colors', () => (
        <div>
            <Badge bg="gray">gray</Badge>
            <Badge bg="lightGray">lightGray</Badge>
        </div>
    ));
