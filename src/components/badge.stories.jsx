import React from 'react';
import Badge from './badge';
import ProviderDecorator from '../provider-decorator';

export const DefaultStory = () => (
    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
        <Badge>Badge</Badge>
        <Badge variant="red">Badge</Badge>
        <Badge variant="orange">Badge</Badge>
        <Badge variant="yellow">Badge</Badge>
        <Badge variant="green">Badge</Badge>
        <Badge variant="teal">Badge</Badge>
        <Badge variant="blue">Badge</Badge>
        <Badge variant="indigo">Badge</Badge>
        <Badge variant="purple">Badge</Badge>
        <Badge variant="pink">Badge</Badge>
    </div>
);

DefaultStory.storyName = 'default';

export default {
    title: 'Components/Badge',
    component: Badge,
    decorators: [ProviderDecorator],
};
