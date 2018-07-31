import React from 'react';
import renderer from 'react-test-renderer';
import {Heading} from 'rebass';

test('Heading matches snapshot', () => {
    const component = renderer.create(<Heading>trigo</Heading>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
