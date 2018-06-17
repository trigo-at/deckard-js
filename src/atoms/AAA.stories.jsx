import React from 'react';
import {storiesOf} from '@storybook/react';
import Container from './Container';
import Heading from './Heading';
import Text from './Text';
import Box from './Box';

storiesOf('Welcome', module).add('Design Principles', () => (
    <Container>
        <Heading.h1>Design Principles</Heading.h1>
        <Box>
            <Text>
                <ul>
                    <li>Don&apos;t reinvent the wheel (Clarity)</li>
                    <li>Consistency is King (Consistency)</li>
                    <li>Value the users lifetime (Efficiency)</li>
                </ul>
            </Text>
        </Box>
        <Heading.h2>Motivation</Heading.h2>
        <Text.p>
            In order to create a consistently great experience for our users, the design system is meant to be the
            single source of truth for user interface standards for both designers and developers. Built off of the work
            of previous efforts, this project intends to consolidate those ideas into a living, well-documented, and
            growing system.
        </Text.p>
        <Heading.h2>Goals</Heading.h2>
        <Text.p>
            The core goals of this project are to:
            <ul>
                <li>Speed up design and development velocity</li>
                <li>Help create consistent, beautiful, and usable UI in our applications</li>
                <li>Promote best practices for accessibility, internationalization, and responsive web design</li>
            </ul>
            We hope to accomplish these goals by:
            <ul>
                <li>Reducing the number of decisions needed when iterating on UI</li>
                <li>Reducing the amount of code duplication in our apps</li>
                <li>Serving as the standard for trigo&apos;s visual language</li>
                <li>Providing easy-to-use and extensible components for anyone to consume</li>
            </ul>
        </Text.p>
    </Container>
));
