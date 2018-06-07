import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Button from './Button';
import OutlineButton from './OutlineButton';

storiesOf('Button', module)
    .add(
        'Button component',
        withInfo({
            inline: true,
            text:
                'Use the <Button /> or <OutlineButton /> components to render a primitive button.',
        })(() => <Button size="lg">Button</Button>)
    )
    .add('color', () => (
        <div>
            <Button mr={2}>Button</Button>
            <OutlineButton mr={2}>OutlineButton</OutlineButton>
        </div>
    ))
    .add('sizes', () => (
        <div>
            <Button size="lg" mr={2}>
                Large
            </Button>
            <Button size="md" mr={2}>
                Medium
            </Button>
            <Button size="sm" mr={2}>
                Small
            </Button>
        </div>
    ))
    .add('fullWidth', () => <Button fullWidth>Full Width</Button>)
    .add('disabled', () => <Button disabled>Disabled</Button>);
