import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import Box from '../src/Box';
import Flex from '../src/Flex';
import Text from '../src/Text';
import Input from '../src/Input';
import Select from '../src/Select';
import FormField from '../src/FormField';

storiesOf('Components/FormField', module)
    .add(
        'FormField component',
        withInfo({
            inline: true,
            text:
                'This component renders an input element with a built-in label and optional icon. It makes use of the Input and Label components.',
        })(() => (
            <Box width={500} pr={3}>
                <Text bold pt={4} pb={2}>
                    Hey, ya turkey! Enter a word that has 5 characters in it.
                </Text>
                <FormField
                    id="test"
                    label="Label"
                    hint="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ">
                    <Input />
                </FormField>
            </Box>
        ))
    )
    .add(
        'Sample States',
        withInfo('Renders a styled Input element')(() => (
            <div>
                <Flex width={900}>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            Default
                        </Text>
                        <FormField
                            label="Label"
                            id="form-field-3"
                            hint="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ">
                            <Input value="Typing Texa sdfasdfasdflkasjdflasjdflaksjdflk;ajd;flkajs;lkdfjas;ldkfja;lsdfjal;ksjdft" />
                        </FormField>
                    </Box>
                </Flex>
                <Flex width={900}>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            Success
                        </Text>
                        <FormField
                            label="Label"
                            id="form-field-3"
                            color="positive"
                            hint="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ">
                            <Input value="Typing Texa sdfasdfasdflkasjdflasjdflaksjdflk;ajd;flkajs;lkdfjas;ldkfja;lsdfjal;ksjdft" />
                        </FormField>
                    </Box>
                </Flex>
                <Flex width={900}>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            Warning
                        </Text>
                        <FormField
                            label="Label"
                            id="form-field-3"
                            color="warning"
                            hint="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ">
                            <Input value="Typing Text" />
                        </FormField>
                    </Box>
                </Flex>
                <Flex width={900}>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            Error
                        </Text>
                        <FormField
                            label="Label"
                            id="form-field-3"
                            color="negative"
                            hint="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ">
                            <Input value="Typing Text" />
                        </FormField>
                    </Box>
                </Flex>
            </div>
        ))
    )
    .add(
        'FormField composed with Select',
        withInfo('This example demonstrates how the input field will behave with a select dropdown')(() => (
            <Flex width={900}>
                <Box width={1 / 3} pl={3}>
                    <Text bold pt={4} pb={2}>
                        User Types a Value
                    </Text>
                    <FormField label="Cabin Class" id="cabinClass">
                        <Select
                            name="cabinClass"
                            defaultValue="Premium Economy"
                            prefixIcon="key"
                            onChange={action('onChange event is triggered in FormField')}>
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                            <option>First Class</option>
                            <option>With a super long label that does not get clobbered by the chevron</option>
                        </Select>
                    </FormField>
                </Box>
            </Flex>
        ))
    );
