/* eslint-disable no-console */
import React from 'react';
import {Stack} from '@chakra-ui/core';
import PrimaryLink from './primary-link';
import SecondaryLink from './secondary-link';
import TertiaryLink from './tertiary-link';
import ProviderDecorator from '../provider-decorator';

export const DefaultStory = () => (
    <Stack isInline spacing={4} shouldWrapChildren>
        <PrimaryLink isExternal to="https://www.trigo.dev">
            Primary
        </PrimaryLink>
        <SecondaryLink isExternal to="https://www.trigo.dev">
            Secondary
        </SecondaryLink>
        <TertiaryLink isExternal to="https://www.trigo.dev">
            Tertiary
        </TertiaryLink>
    </Stack>
);

DefaultStory.storyName = 'default';

export default {
    title: 'Components/Link',
    component: PrimaryLink,
    decorators: [ProviderDecorator],
};
