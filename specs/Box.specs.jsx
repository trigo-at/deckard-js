import React from 'react';
import renderer from 'react-test-renderer';
import {Box} from 'rebass';

test('Box matches snapshot', () => {
    const component = renderer.create(
        <Box>
            <span>Box</span>
        </Box>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
