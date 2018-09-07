import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Card from '../src/Card';

storiesOf('Components/Card', module)
    .add(
        'Card component',
        withInfo({
            inline: true,
            text: 'Box extension to control box-shadow.',
        })(() => (
            <div>
                <Card my={4} p={3} width={256} color="black" bg="white">
                    Default Shadow
                </Card>
                <Card boxShadowSize="md" my={4} p={3} width={256} color="black" bg="white">
                    Medium Shadow
                </Card>
                <Card boxShadowSize="lg" my={4} p={3} width={256} color="black" bg="white">
                    Large Shadow
                </Card>
                <Card boxShadowSize="inner" my={4} p={3} width={256} color="black" bg="white">
                    Inner Shadow
                </Card>
            </div>
        ))
    )
    .add('Box Shadows with custom borders', () => (
        <div>
            <Card my={4} p={3} width={256} color="black" bg="white" borderWidth={2} borderColor="accent">
                Default Shadow
            </Card>
            <Card
                boxShadowSize="md"
                my={4}
                p={3}
                width={256}
                color="black"
                bg="negative"
                borderWidth={2}
                borderColor="warning">
                Medium Shadow
            </Card>
            <Card
                boxShadowSize="lg"
                my={4}
                p={3}
                width={256}
                color="black"
                bg="positive"
                borderWidth={2}
                borderColor="success">
                Large Shadow
            </Card>
            <Card
                boxShadowSize="inner"
                my={4}
                p={3}
                width={256}
                color="black"
                bg="warning"
                borderWidth={2}
                borderColor="error">
                Inner Shadow
            </Card>
        </div>
    ))
    .add('Box Shadows with varying border radii', () => (
        <div>
            <Card my={4} p={3} width={256} color="black" bg="white" borderRadius={0}>
                Default Shadow
            </Card>
            <Card boxShadowSize="md" my={4} p={3} width={256} color="black" bg="white" borderRadius={8}>
                Medium Shadow
            </Card>
            <Card boxShadowSize="lg" my={4} p={3} width={256} color="black" bg="white" borderRadius={24}>
                Large Shadow
            </Card>
            <Card boxShadowSize="inner" my={4} p={3} width={256} color="black" bg="white" borderRadius="2rem">
                Inner Shadow
            </Card>
        </div>
    ));
