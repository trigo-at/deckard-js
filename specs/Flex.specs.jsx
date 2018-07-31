import React from 'react';
import renderer from 'react-test-renderer';
import {Flex} from 'rebass';

test('Flex matches snapshot', () => {
    const component = renderer.create(
        <Flex>
            <span>Flex</span>
            <span>Flex</span>
            <span>Flex</span>
        </Flex>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
