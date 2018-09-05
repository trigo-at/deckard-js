import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';
import Box from '../atoms/Box';
import Flex from '../atoms/Flex';
import Text from '../atoms/Text';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import Icon from '../atoms/Icon';
import Select from '../atoms/Select';
import FormField from './FormField';

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
                <FormFieldWithController />
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
                            Placeholder with Chevron
                        </Text>
                        <FormField>
                            <Input id="form-field-1" placeholder="Placeholder" />
                            <Icon name="cheveronDown" size="12" />
                        </FormField>
                    </Box>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            Placeholder with Icon
                        </Text>
                        <FormField>
                            <Icon name="search" color="blue" size="18" />
                            <Input id="form-field-3" placeholder="Placeholder with Icon" />
                        </FormField>
                    </Box>
                </Flex>
                <Flex width={900}>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            Plain Text
                        </Text>
                        <FormField>
                            <Input id="form-field-1" value="Plain text" />
                            <Icon name="cheveronDown" size="12" />
                        </FormField>
                    </Box>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            Plain Text with Icon
                        </Text>
                        <FormField>
                            <Icon name="user" color="brandBlue" size="18" />
                            <Input id="form-field-1" value="Plain text with Icon" />
                            <Icon name="cheveronDown" size="12" />
                        </FormField>
                    </Box>
                </Flex>
                <Flex width={900}>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            With Label and Blue Outline
                        </Text>
                        <FormField color="brandBlue">
                            <Label>Label</Label>
                            <Input id="form-field-3" value="Typing Text" />
                        </FormField>
                    </Box>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            With Label, Icon, and Chevron
                        </Text>
                        <FormField color="brandBlue">
                            <Icon name="user" color="brandBlue" size="18" />
                            <Label>Label</Label>
                            <Input id="form-field-3" value="Typing text with Icon" />
                            <Icon name="cheveronDown" size="12" />
                        </FormField>
                    </Box>
                </Flex>
                <Flex width={900}>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            Email Address with Form Validation
                        </Text>
                        <FormField color="negative">
                            <Label>Email address</Label>
                            <Input id="form-field-3" value="olvier@examp" />
                            <Icon name="exclamationOutline" color="negative" size="20" />
                        </FormField>
                    </Box>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            Email Address with Form Validation 2
                        </Text>
                        <FormField color="positive">
                            <Label>Email address</Label>
                            <Input id="form-field-3" value="olvier@example.com" />
                            <Icon name="checkmarkOutline" color="positive" size="20" />
                        </FormField>
                    </Box>
                </Flex>
                <Flex width={900}>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            With Label Always Shown
                        </Text>
                        <FormField alwaysShowLabel>
                            <Label>Pick-up Location</Label>
                            <Input id="form-field-3" placeholder="Same as pick-up" />
                        </FormField>
                    </Box>
                    <Box width={1 / 2} pl={3}>
                        <Text bold pt={4} pb={2}>
                            Without Label Always Shown (requires typing)
                        </Text>
                        <FormField>
                            <Label>Pick-up Location</Label>
                            <Input id="form-field-3" placeholder="Same as pick-up" />
                        </FormField>
                    </Box>
                </Flex>
            </div>
        ))
    )
    .add(
        'State Flow',
        withInfo('This example demonstrates how the input will behave as the user interacts with it step by step')(
            () => (
                <Flex width={900}>
                    <Box width={1 / 3} pl={3}>
                        <Text bold pt={4} pb={2}>
                            No User Interaction
                        </Text>
                        <FormField>
                            <Label>Drop-off Location</Label>
                            <Icon name="search" color="brandBlue" size="18" />
                            <Input id="drop-off" placeholder="Enter a drop-off location" />
                        </FormField>
                    </Box>
                    <Box width={1 / 3} pl={3}>
                        <Text bold pt={4} pb={2}>
                            User Clicks in Box
                        </Text>
                        <FormField>
                            <Label>Drop-off Location</Label>
                            <Icon name="search" color="brandBlue" size="18" />
                            <Input id="drop-off" color="brandBlue" placeholder="Enter a drop-off location" />
                        </FormField>
                    </Box>
                    <Box width={1 / 3} pl={3}>
                        <Text bold pt={4} pb={2}>
                            User Types a Value
                        </Text>
                        <FormField>
                            <Label>Drop-off Location</Label>
                            <Icon name="search" color="brandBlue" size="18" />
                            <Input id="drop-off" color="brandBlue" placeholder="Enter a drop-off location" />
                        </FormField>
                    </Box>
                </Flex>
            )
        )
    )
    .add(
        'FormField composed with Select',
        withInfo('This example demonstrates how the input field will behave with a select dropdown')(() => (
            <Flex width={900}>
                <Box width={1 / 3} pl={3}>
                    <Text bold pt={4} pb={2}>
                        User Types a Value
                    </Text>
                    <FormField onChange={action('onChange event is triggered in FormField')}>
                        <Label>Cabin Class</Label>
                        <Icon name="key" color="blue" size="18" />
                        <Select id="cabinClass" name="cabinClass" defaultValue="Premium Economy" prefixIcon="key">
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
    )
    .add(
        'FormField composed with Select and label',
        withInfo('This example demonstrates how the input field will behave with a select dropdown')(() => (
            <Flex width={900}>
                <Box width={1 / 3} pl={3}>
                    <Text bold pt={4} pb={2}>
                        User Types a Value
                    </Text>
                    <FormField alwaysShowLabel>
                        <Label>Cabin Class</Label>
                        <Icon name="key" color="blue" size="18" />
                        <Select id="cabinClass" name="cabinClass" defaultValue="Premium Economy" prefixIcon="key">
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

class FormFieldWithController extends React.PureComponent {
    state = {
        value: '',
        isValid: false,
        isDirty: false,
    };

    onChange = event => {
        const value = event.target.value;
        const isValid = value.length === 5;
        this.setState({
            isDirty: true,
            value,
            isValid,
        });
    };

    getBorderColor = () => {
        const {isValid, isDirty} = this.state;
        if (isValid && isDirty) {
            return 'positive';
        }
        if (!isValid && isDirty) {
            return 'negative';
        }
        return undefined;
    };

    render() {
        const {isValid, isDirty, value} = this.state;
        return (
            <FormField
                color={this.getBorderColor()}
                info={!isValid && isDirty ? "That's not 5 letters!" : null}
                isDirty={isDirty}
                isValid={isValid}>
                <Label>5 Letter Word</Label>
                <Icon name="announcement" />
                <Input id="form-field" value={value} placeholder="Enter a 5 letter word" onChange={this.onChange} />
                <Icon name="beverage" />
            </FormField>
        );
    }
}
