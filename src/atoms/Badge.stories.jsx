import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Badge from './Badge';

storiesOf('Badge', module)
    .add(
        'Badge component',
        withInfo({
            inline: true,
            text: 'Use the <Badge /> component to render a primitive badge.',
        })(() => <Badge bg="grayLight">badge</Badge>)
    )
    .add('All colors', () => (
        <div>
            <Badge bg="gray">gray</Badge>
            <Badge bg="grayLight">grayLight</Badge>
        </div>
    ));
