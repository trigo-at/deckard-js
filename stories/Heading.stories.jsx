import React from 'react';
import {storiesOf} from '@storybook/react';
import Heading from '../src/Heading';

storiesOf('Styles|Typography', module).add('Headings', () => (
    <>
        <Heading as="h4" size="s">
            The quick brown fox jumped over the lazy dog.
        </Heading>
        <Heading as="h3" size="m">
            The quick brown fox jumped over the lazy dog.
        </Heading>
        <Heading as="h2" size="l">
            The quick brown fox jumped over the lazy dog.
        </Heading>
        <Heading size="xl">The quick brown fox jumped over the lazy dog.</Heading>
    </>
));
