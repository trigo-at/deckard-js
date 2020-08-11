/* eslint-disable no-console */
import React from 'react';
import {Button} from '@chakra-ui/core';
import NavSection from './nav-section';
import ProviderDecorator from '../provider-decorator';

export const DefaultStory = () => (
    <NavSection
        header={
            <Button variantColor="green">React Example Node as Header</Button>
        }>
        <p>I am a children in a box</p>
    </NavSection>
);

DefaultStory.storyName = 'default';

export default {
    title: 'Components/NavSection',
    component: NavSection,
    decorators: [ProviderDecorator],
};
