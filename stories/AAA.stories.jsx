import React from 'react';
import {storiesOf} from '@storybook/react';
import {Container, Box, Heading, Subhead, Text} from 'rebass';

storiesOf('Welcome', module).add('Design Principles', () => (
    <Container>
        <Heading>Design Principles</Heading>
        <Box>
            <Text>
                <ul>
                    <li>Don&apos;t reinvent the wheel (Clarity)</li>
                    <li>Consistency is King (Consistency)</li>
                    <li>Value the users lifetime (Efficiency)</li>
                </ul>
            </Text>
        </Box>
        <Subhead>Motivation</Subhead>
        <Text>
            In order to create a consistently great experience for our users, the design system is meant to be the
            single source of truth for user interface standards for both designers and developers. Built off of the work
            of previous efforts, this project intends to consolidate those ideas into a living, well-documented, and
            growing system.
        </Text>
        <Subhead>Goals</Subhead>
        <Text>
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
        </Text>
    </Container>
));
