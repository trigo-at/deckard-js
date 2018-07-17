import React, {Fragment} from 'react';
import {string} from 'prop-types';
import {storiesOf} from '@storybook/react';
import Flex from './Flex';
import Card from './Card';
import Text from './Text';
import Heading from './Heading';

const ColorBox = ({name, hex, ...props}) => (
    <Flex flexDirection="column" p={3} m={2}>
        <Card boxShadowSize="md" mb={1}>
            <Flex width="250px" height="100px" alignItems="center" justifyContent="center" {...props} />
        </Card>
        <Heading>{name}</Heading>
        <Text>{hex}</Text>
    </Flex>
);

ColorBox.propTypes = {
    name: string,
    hex: string,
};

ColorBox.defaultProps = {
    name: '',
    hex: '',
};

storiesOf('Colors', module).add('palette', () => (
    <Fragment>
        <Flex>
            <ColorBox bg="brandYellow" name="Brand Yellow" hex="#F7CA10">
                brandYellow
            </ColorBox>
            <ColorBox bg="brandBlue" color="white" name="Brand Blue" hex="#3AB2D2">
                brandBlue
            </ColorBox>
            <ColorBox bg="brandGreen" color="white" name="Brand Green" hex="#7FBD42">
                brandGreen
            </ColorBox>
        </Flex>
        <Flex>
            <ColorBox bg="primary" color="white" name="Primary" hex="#2D8EFF">
                primary
            </ColorBox>
            <ColorBox bg="darkPrimary" color="white" name="Primary (Dark)" hex="#0073F9">
                darkPrimary
            </ColorBox>
            <ColorBox bg="secondary" name="Secondary" hex="#DCEEFF">
                secondary
            </ColorBox>
            <ColorBox bg="darkSecondary" name="Secondary (Dark)" hex="#A9D5FF">
                darkSecondary
            </ColorBox>
        </Flex>
        <Flex>
            <ColorBox bg="black" color="white" name="Black" hex="#000A12">
                black
            </ColorBox>
            <ColorBox bg="white" name="White" hex="#FFFFFF">
                white
            </ColorBox>
        </Flex>
        <Flex>
            <ColorBox bg="negative" color="white" name="Negative" hex="#FF4949">
                negative
            </ColorBox>
            <ColorBox bg="positive" name="Positive" hex="#13CE66">
                positive
            </ColorBox>
            <ColorBox bg="warning" name="Warning" hex="#FFCC3D">
                warning
            </ColorBox>
            <ColorBox bg="active" name="Active" hex="#2D8EFF">
                active
            </ColorBox>
        </Flex>
        <Flex>
            <ColorBox bg="darkGray" color="white" name="Gray (Dark)" hex="#1F2D3D">
                darkGray
            </ColorBox>
            <ColorBox bg="gray" color="white" name="Gray" hex="#778F9B">
                Gray
            </ColorBox>
            <ColorBox bg="lightGray" name="Gray (Light)" hex="#B8C1CB">
                lightGray
            </ColorBox>
            <ColorBox bg="snow" name="Snow" hex="#DDE2E8">
                snow
            </ColorBox>
        </Flex>
    </Fragment>
));
