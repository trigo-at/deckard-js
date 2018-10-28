import React from 'react';
import {storiesOf} from '@storybook/react';
import Icon from '../src/Icon';
import Flex from '../src/Flex';
import Box from '../src/Box';
import Text from '../src/Text';
import icons from '../src/icons.json';

const keys = Object.keys(icons);

storiesOf('Components|Icon', module)
    .add('Icon component', () => <Icon name="coffee" size={48} />, {
        info: {
            text: 'A low-level component to display a svg Icon',
            inline: true,
        },
    })
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
