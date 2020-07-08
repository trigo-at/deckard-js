import React from 'react';
import TrigoStoryWrapper from '../.storybook/trigo-story-wrapper';
import Test from './test';

export const test = () => (
    <TrigoStoryWrapper>
        <Test>hello typescript</Test>
    </TrigoStoryWrapper>
);

export default {
    title: 'Documentation|Test',
    component: Test,
};
