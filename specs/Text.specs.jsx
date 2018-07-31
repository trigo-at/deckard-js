import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from 'rebass';

test('Text matches snapshot', () => {
    const component = renderer.create(<Text>trigo</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
