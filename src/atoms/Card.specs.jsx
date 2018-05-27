import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

test('Card matches snapshot', () => {
    const component = renderer.create(
        <Card>
            <span>Card</span>
            <span>Card</span>
            <span>Card</span>
        </Card>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
