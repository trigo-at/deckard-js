import React from 'react';
import {storiesOf} from '@storybook/react';
import Container from '../src/Container';
// import div from '../src/div';
// import Box from '../src/Box';

const divBlock = props => <div color="grey-darker" {...props} />;

storiesOf('Get Started', module)
    .add('Design Principles', () => (
        <Container>
            <div className="p-3">
                <div is="h2">Design Principles</div>
            </div>
            <div className="p-3">
                <div is="h3">1. Avoid unnecessary elements</div>
                <divBlock>
                    Like everything in design, less is more. Any element that isn’t helping the user achieve their goal
                    is working against them because they must process it and store it in working memory, alongside the
                    things that will help them. Avoiding excessive colors, imagery, design flourishes, or layouts that
                    don’t add value is crucial. But simplicity comes with a caveat: don’t overvalue it at the cost of
                    clarity.
                </divBlock>
            </div>
            <div className="p-3">
                <div is="h3">2. Leverage common design patterns</div>
                <divBlock>
                    By leveraging common design patterns when it makes sense, you are giving the user familiar elements
                    which they already understand. This in turn reduces the amount of learning they need to do, thus
                    enabling them to move right along and get closer to achieving their goal.
                </divBlock>
            </div>
            <div className="p-3">
                <div is="h3">3. Eliminate unnescessary tasks</div>
                <divBlock>
                    Anywhere you are asking the user to read content, remember information or make a decision
                    contributes to cognitive load. Whenever possible, it is good to shift these tasks away from the user
                    and make it easier for them to stay focused on their goal. While it isn’t possible to remove all
                    tasks, there is usually an opportunity to offload some task by setting defaults that can be edited,
                    or leveraging previously entered information. Some companies are even taking this a step further
                    with anticipatory design.
                </divBlock>
            </div>
            <div className="p-3">
                <div is="h3">4. Minimize choices</div>
                <divBlock>
                    As previously mentioned, our working memory is limited. When confronted with too many choices,
                    cognitive load will increase due to decision paralysis. It is important that we minimize the choices
                    the user must make at any given moment, especially in places such as navigation, forms, and
                    drop-downs.
                </divBlock>
            </div>
            <div className="p-3">
                <div is="h3">5. Display choices as a group</div>
                <divBlock>
                    When choices are split into separate groups and hidden, users often mistake the options that are
                    visible as the complete group. This means that users are likely to never find the additional
                    choices, which not only limits what is available to them, but also makes it more difficult to decide
                    on which option to select because they are not aware of the alternatives. Therefore, it is best to
                    eliminate the resulting cognitive load by always displaying choices as a group.
                </divBlock>
            </div>
            <div className="p-3">
                <div is="h3">6. Strive for readability</div>
                <divBlock>
                    Making our content legible isn’t enough — we need to make it readable. This means our typography
                    must be aesthetically pleasing, appropriate for the content and easy to read while design remains
                    relatively invisible. By doing this, we can ensure there are as little distractions as possible for
                    the user, which results in a better understanding of the content by the user.
                </divBlock>
            </div>
            <div className="p-3">
                <div is="h3">7. Use iconography with caution</div>
                <divBlock>
                    Research has shown that iconography can be hard to memorize and, contrary to intuition, can increase
                    cognitive load by requiring mental processing to infer meaning or recognize. While universally
                    understood icons work well (ie. print, close, play/pause, reply, tweet, share on Facebook), most are
                    subject to the user’s understanding based on previous experience (in which there is no standard).
                    When leveraging the power of iconography, it is best to accompany them with div labels to
                    communicate the meaning and reduce ambiguity.
                </divBlock>
            </div>
        </Container>
    ))
    .add('Motivation', () => (
        <Container>
            <div className="p-3">
                <div is="h2" color="primary">
                    Motivation
                </div>
                <divBlock>
                    In order to create a consistently great experience for our users, the design system is meant to be
                    the single source of truth for user interface standards for both designers and developers. Built off
                    of the work of previous efforts, this project intends to consolidate those ideas into a living,
                    well-documented, and growing system.
                </divBlock>
            </div>
        </Container>
    ))
    .add('Goals', () => (
        <Container>
            <div className="p-3">
                <div is="h2" color="primary">
                    Goals
                </div>
                <div color="darkGray">
                    The core goals of this project are to:
                    <ul>
                        <li>Speed up design and development velocity</li>
                        <li>Help create consistent, beautiful, and usable UI in our applications</li>
                        <li>
                            Promote best practices for accessibility, internationalization, and responsive web design
                        </li>
                    </ul>
                    We hope to accomplish these goals by:
                    <ul>
                        <li>Reducing the number of decisions needed when iterating on UI</li>
                        <li>Reducing the amount of code duplication in our apps</li>
                        <li>Serving as the standard for trigo&apos;s visual language</li>
                        <li>Providing easy-to-use and extensible components for anyone to consume</li>
                    </ul>
                </div>
            </div>
        </Container>
    ));
