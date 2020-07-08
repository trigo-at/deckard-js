/* eslint-disable no-console */
import React from 'react';
import {Stack} from '@chakra-ui/core';
import PrimaryButton from './primary-button';
import SecondaryButton from './secondary-button';
import TertiaryButton from './tertiary-button';

export const ButtonsStory = () => (
    <Stack isInline p={10}>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton>Tertiary</TertiaryButton>
    </Stack>
);

ButtonsStory.story = {
    name: 'default',
};

export default {
    title: 'Components|Buttons',
};
