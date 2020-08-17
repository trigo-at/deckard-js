/* eslint-disable no-console */
import React from 'react';
import Sidebar from './sidebar';
import ProviderDecorator from '../provider-decorator';

export const SidebarStory = () => (
    <Sidebar>
        <p>i am a children in a box</p>
    </Sidebar>
);

SidebarStory.storyName = 'default';

export default {
    title: 'Components/Sidebar',
    component: Sidebar,
    decorators: [ProviderDecorator],
};
