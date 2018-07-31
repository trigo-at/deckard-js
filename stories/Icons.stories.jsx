import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Flex, Box, Text} from 'rebass';
import Icon from '../src/Icon';
import icons from '../src/icons.json';

const keys = Object.keys(icons);

storiesOf('Icon', module)
    .add(
        'Icon component',
        withInfo({
            text: 'A low-level component to display a svg Icon',
            inline: true,
        })(() => <Icon name="coffee" size={48} />)
    )
    .add('Icons', () => (
        <Box p={2}>
            <Flex wrap>
                {keys.map(name => (
                    <Box key={name} w={[1 / 3, 1 / 5, 1 / 6, 1 / 8]} mx={2} my={3}>
                        <Icon name={name} size={24} />
                        <Text fontSize={0}>{name}</Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    ))
    .add('Color', () => (
        <div>
            <Icon color="brandBlue" size={48} m={2} name="apparel" />
            <Icon color="brandYellow" size={48} m={2} name="beverage" />
            <Icon color="brandGreen" size={48} m={2} name="heart" />
        </div>
    ));
