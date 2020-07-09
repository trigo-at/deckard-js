import React from 'react';
import {Box, Heading, Text, List, ListItem} from '@chakra-ui/core';
import ProviderDecorator from './provider-decorator';
import TrigoStoryWrapper from '../.storybook/trigo-story-wrapper';

const TextBlock = (props) => <Text color="gray.900" {...props} />;

export const DesignPrinciplesStory = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            <Box p={5}>
                <Heading>Design Principles</Heading>
            </Box>
            <Box p={5}>
                <Heading as="h2" size="md">
                    1. Avoid unnecessary elements
                </Heading>
                <TextBlock>
                    Like everything in design, less is more. Any element that
                    isn’t helping the user achieve their goal is working against
                    them because they must process it and store it in working
                    memory, alongside the things that will help them. Avoiding
                    excessive colors, imagery, design flourishes, or layouts
                    that don’t add value is crucial. But simplicity comes with a
                    caveat: don’t overvalue it at the cost of clarity.
                </TextBlock>
            </Box>
            <Box p={5}>
                <Heading as="h2" size="md">
                    2. Leverage common design patterns
                </Heading>
                <TextBlock>
                    By leveraging common design patterns when it makes sense,
                    you are giving the user familiar elements which they already
                    understand. This in turn reduces the amount of learning they
                    need to do, thus enabling them to move right along and get
                    closer to achieving their goal.
                </TextBlock>
            </Box>
            <Box p={5}>
                <Heading as="h2" size="md">
                    3. Eliminate unnescessary tasks
                </Heading>
                <TextBlock>
                    Anywhere you are asking the user to read content, remember
                    information or make a decision contributes to cognitive
                    load. Whenever possible, it is good to shift these tasks
                    away from the user and make it easier for them to stay
                    focused on their goal. While it isn’t possible to remove all
                    tasks, there is usually an opportunity to offload some task
                    by setting defaults that can be edited, or leveraging
                    previously entered information. Some companies are even
                    taking this a step further with anticipatory design.
                </TextBlock>
            </Box>
            <Box p={5}>
                <Heading as="h2" size="md">
                    4. Minimize choices
                </Heading>
                <TextBlock>
                    As previously mentioned, our working memory is limited. When
                    confronted with too many choices, cognitive load will
                    increase due to decision paralysis. It is important that we
                    minimize the choices the user must make at any given moment,
                    especially in places such as navigation, forms, and
                    drop-downs.
                </TextBlock>
            </Box>
            <Box p={5}>
                <Heading as="h2" size="md">
                    5. Display choices as a group
                </Heading>
                <TextBlock>
                    When choices are split into separate groups and hidden,
                    users often mistake the options that are visible as the
                    complete group. This means that users are likely to never
                    find the additional choices, which not only limits what is
                    available to them, but also makes it more difficult to
                    decide on which option to select because they are not aware
                    of the alternatives. Therefore, it is best to eliminate the
                    resulting cognitive load by always displaying choices as a
                    group.
                </TextBlock>
            </Box>
            <Box p={5}>
                <Heading as="h2" size="md">
                    6. Strive for readability
                </Heading>
                <TextBlock>
                    Making our content legible isn’t enough — we need to make it
                    readable. This means our typography must be aesthetically
                    pleasing, appropriate for the content and easy to read while
                    design remains relatively invisible. By doing this, we can
                    ensure there are as little distractions as possible for the
                    user, which results in a better understanding of the content
                    by the user.
                </TextBlock>
            </Box>
            <Box p={5}>
                <Heading as="h2" size="md">
                    7. Use iconography with caution
                </Heading>
                <TextBlock>
                    Research has shown that iconography can be hard to memorize
                    and, contrary to intuition, can increase cognitive load by
                    requiring mental processing to infer meaning or recognize.
                    While universally understood icons work well (ie. print,
                    close, play/pause, reply, tweet, share on Facebook), most
                    are subject to the user’s understanding based on previous
                    experience (in which there is no standard). When leveraging
                    the power of iconography, it is best to accompany them with
                    text labels to communicate the meaning and reduce ambiguity.
                </TextBlock>
            </Box>
        </Box>
    </TrigoStoryWrapper>
);

DesignPrinciplesStory.story = {
    name: 'Design Principles',
};

export const MotivationStory = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            <Box p={5}>
                <Heading>Motivation</Heading>
            </Box>
            <Box p={5}>
                <TextBlock>
                    In order to create a consistently great experience for our
                    users, the design system is meant to be the single source of
                    truth for user interface standards for both designers and
                    developers. Built off of the work of previous efforts, this
                    project intends to consolidate those ideas into a living,
                    well-documented, and growing system.
                </TextBlock>
            </Box>
        </Box>
    </TrigoStoryWrapper>
);

MotivationStory.story = {
    name: 'Motivation',
};

export const GoalsStory = () => (
    <TrigoStoryWrapper>
        <Box bg="white" p={5}>
            <Box p={5}>
                <Heading>Goals</Heading>
            </Box>
            <Box p={5}>
                <TextBlock>
                    <Heading as="h2" size="md">
                        The core goals of this project are to:
                    </Heading>
                    <List styleType="disc">
                        <ListItem>
                            Speed up design and development velocity
                        </ListItem>
                        <ListItem>
                            Help create consistent, beautiful, and usable UI in
                            our applications
                        </ListItem>
                        <ListItem>
                            Promote best practices for accessibility,
                            internationalization, and responsive web design
                        </ListItem>
                    </List>
                </TextBlock>
            </Box>
            <Box p={5}>
                <TextBlock>
                    <Heading as="h2" size="md">
                        We hope to accomplish these goals by:
                    </Heading>
                    <List styleType="disc">
                        <ListItem>
                            Reducing the number of decisions needed when
                            iterating on UI
                        </ListItem>
                        <ListItem>
                            Reducing the amount of code duplication in our apps
                        </ListItem>
                        <ListItem>
                            Serving as the standard for trigo&apos;s visual
                            language
                        </ListItem>
                        <ListItem>
                            Providing easy-to-use and extensible components for
                            anyone to consume
                        </ListItem>
                    </List>
                </TextBlock>
            </Box>
        </Box>
    </TrigoStoryWrapper>
);

GoalsStory.story = {
    name: 'Goals',
};

export default {
    title: 'Documentation|Getting Started',
    decorators: [ProviderDecorator],
};
