/* eslint-disable no-console */
import React from 'react';
import Aside from './aside';

export const AsideStory = () => (
    <Aside>
        <p>i am a children in a box</p>
    </Aside>
);

AsideStory.story = {
    name: 'default',
};

export default {
    title: 'Components|Aside',
    component: Aside,
};
