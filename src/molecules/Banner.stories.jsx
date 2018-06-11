import React from 'react';
import {storiesOf, action} from '@storybook/react';
import Box from '../atoms/Box';
import Flex from '../atoms/Flex';
import Text from '../atoms/Text';
import Banner from './Banner';

storiesOf('Banner', module)
    .add('All bgs', () => (
        <Box>
            <Banner textAlign="left" mb={2} p={3} header="default" text="Secondary Text" onClose={action('closed')} />
            <Banner
                textAlign="left"
                mb={2}
                p={3}
                header="primary"
                text="Secondary Text"
                bg="primary"
                onClose={action('closed')}
            />
            <Banner
                textAlign="left"
                mb={2}
                p={3}
                header="secondary"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare."
                bg="secondary"
                onClose={action('closed')}
            />
            <Banner
                textAlign="left"
                mb={2}
                p={3}
                header="positive"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur."
                bg="positive"
                onClose={action('closed')}
            />
            <Banner
                textAlign="left"
                mb={2}
                p={3}
                header="negative"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus."
                bg="negative"
                onClose={action('closed')}
            />
            <Banner
                textAlign="left"
                mb={2}
                p={3}
                header="warning"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum."
                bg="warning"
                onClose={action('closed')}
            />
        </Box>
    ))
    .add('All bgs header only', () => (
        <Box>
            <Banner textAlign="left" mb={2} p={3} header="default" onClose={action('closed')} />
            <Banner textAlign="left" mb={2} p={3} header="primary" bg="primary" onClose={action('closed')} />
            <Banner textAlign="left" mb={2} p={3} header="secondary" bg="secondary" onClose={action('closed')} />
            <Banner textAlign="left" mb={2} p={3} header="positive" bg="positive" onClose={action('closed')} />
            <Banner textAlign="left" mb={2} p={3} header="negative" bg="negative" onClose={action('closed')} />
            <Banner textAlign="left" mb={2} p={3} header="warning" bg="warning" onClose={action('closed')} />
        </Box>
    ))
    .add('All bgs text only', () => (
        <Box>
            <Banner textAlign="left" mb={2} p={3} text="Secondary Text" onClose={action('closed')} />
            <Banner textAlign="left" mb={2} p={3} text="Secondary Text" bg="primary" onClose={action('closed')} />
            <Banner
                textAlign="left"
                mb={2}
                p={3}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum. Sed non aliquam orci, id pulvinar justo. Fusce feugiat egestas risus in ornare."
                bg="secondary"
                onClose={action('closed')}
            />
            <Banner
                textAlign="left"
                mb={2}
                p={3}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur."
                bg="positive"
                onClose={action('closed')}
            />
            <Banner
                textAlign="left"
                mb={2}
                p={3}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus."
                bg="negative"
                onClose={action('closed')}
            />
            <Banner
                textAlign="left"
                mb={2}
                p={3}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus pretium turpis nec efficitur. Nullam pretium diam in porta luctus. Etiam viverra porttitor porttitor. Vestibulum at dignissim tellus. Integer eget massa lacus. Mauris placerat augue rhoncus nisl porttitor bibendum."
                bg="warning"
                onClose={action('closed')}
            />
        </Box>
    ))
    .add('Sans Close Button', () => (
        <Box>
            <Banner textAlign="right" mb={2} p={3} header="default" text="Secondary Text" />
        </Box>
    ))
    .add('Sans Icon', () => (
        <Box>
            <Banner
                textAlign="right"
                mb={2}
                p={3}
                header="default"
                text="Secondary Text"
                onClose={action('closed')}
                showIcon={false}
            />
        </Box>
    ))
    .add('Without Icon or Close Button', () => (
        <Box>
            <Banner textAlign="right" mb={2} p={3} header="default" text="Secondary Text" showIcon={false} />
        </Box>
    ))
    .add('With custom icons and sizes', () => (
        <Box>
            <Banner
                mb={2}
                p={2}
                header="default"
                text="secondary text"
                iconName="announcement"
                onClose={action('closed')}
            />
        </Box>
    ))
    .add('With children', () => (
        <Box>
            <Banner p={2} mb={2} onClose={action('closed')}>
                <Flex>
                    <Box bg="pink" p={2} width={1 / 2}>
                        Pink box!
                    </Box>
                    <Box bg="red" p={2} width={1 / 2}>
                        Red box!
                    </Box>
                </Flex>
            </Banner>
            <Banner textAlign="left" mb={2} p={2} header="default" onClose={action('closed')}>
                <Text bold italic>
                    I am a text component!
                </Text>
            </Banner>
        </Box>
    ));
