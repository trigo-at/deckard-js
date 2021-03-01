/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {ButtonGroup, Box, GridItem, Text} from '@chakra-ui/react';
import {Card, CardProps} from './card';
import CardHeader from '../headings/card-header';
import ProviderDecorator from '../provider-decorator';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';
import DescriptionList from './description-list';
import DescriptionListItem from './description-list-item';

export default {
    title: 'Data Display/Card',
    component: CardHeader,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<CardProps> = (args) => (
    <Box bg="gray.100" p={10} h="screen">
        <Card
            {...args}
            heading={
                <CardHeader
                    heading="Job Postings"
                    description="Checkout and Payments Team"
                    actions={
                        <ButtonGroup size="sm" spacing="3">
                            <SecondaryButton>Share</SecondaryButton>
                            <PrimaryButton>Create</PrimaryButton>
                        </ButtonGroup>
                    }
                />
            }
            footer={<PrimaryButton size="sm">Save</PrimaryButton>}>
            <DescriptionList>
                <DescriptionListItem label="Full name" value="Margot Foster" />

                <GridItem colSpan={{sm: 1}}>
                    <Text
                        as="dt"
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.500">
                        Application for
                    </Text>
                    <Text as="dd" mt={1} fontSize="sm" color="gray.900">
                        Backend Developer
                    </Text>
                </GridItem>
                <GridItem colSpan={{sm: 1}}>
                    <Text
                        as="dt"
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.500">
                        Email address
                    </Text>
                    <Text as="dd" mt={1} fontSize="sm" color="gray.900">
                        margotfoster@example.com
                    </Text>
                </GridItem>
                <GridItem colSpan={{sm: 1}}>
                    <Text
                        as="dt"
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.500">
                        Salary expectation
                    </Text>
                    <Text as="dd" mt={1} fontSize="sm" color="gray.900">
                        $120,000
                    </Text>
                </GridItem>
                <GridItem colSpan={{sm: 2}}>
                    <Text
                        as="dt"
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.500">
                        About
                    </Text>
                    <Text as="dd" mt={1} fontSize="sm" color="gray.900">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                        anim incididunt cillum culpa consequat. Excepteur qui
                        ipsum aliquip consequat sint. Sit id mollit nulla mollit
                        nostrud in ea officia proident. Irure nostrud pariatur
                        mollit ad adipisicing reprehenderit deserunt qui eu.
                    </Text>
                </GridItem>
            </DescriptionList>
        </Card>
    </Box>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';
