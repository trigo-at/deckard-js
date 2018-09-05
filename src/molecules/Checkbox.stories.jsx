import React from 'react';
import {string, any} from 'prop-types';
import {storiesOf, action} from '@storybook/react';
import styled from 'styled-components';
import Text from '../atoms/Text';
import Box from '../atoms/Box';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import OutlineButton from '../atoms/OutlineButton';
import Label from '../atoms/Label';
import Checkbox from './Checkbox';
import theme from '../theme';

const StyledLabel = styled(Label)`
    cursor: pointer;
    font-size: 12px;
    vertical-align: middle;
`;

const Wrapper = ({title, children}) => (
    <Box p="12px" my="6px" fontSize="12px">
        {title && <Heading.h6 mb="12px">{title}</Heading.h6>}
        {children}
    </Box>
);

Wrapper.propTypes = {
    title: string,
    children: any,
};

Wrapper.defaultProps = {
    title: undefined,
    children: undefined,
};

const formAction = e => {
    e.preventDefault();
    action('form was submitted, is checkbox checked?')(e.target[1].id, e.target[1].checked);
};

const checkAction = e => {
    action(`${e.target.id} was clicked`)(e.target.value, e.target.checked);
};

storiesOf('Components/Checkbox', module).add('Checkbox states', () => (
    <div>
        <Wrapper>
            <StyledLabel htmlFor="unchecked_box">
                <Checkbox id="unchecked_box" onChange={checkAction} />
                Unchecked by default
            </StyledLabel>
        </Wrapper>

        <Wrapper>
            <StyledLabel htmlFor="checked_box">
                <Checkbox id="checked_box" defaultChecked onChange={checkAction} />
                Checked by Default
            </StyledLabel>
        </Wrapper>

        <Wrapper>
            <StyledLabel htmlFor="disabled_box">
                <Checkbox id="disabled_box" disabled onChange={checkAction} />
                <Text.span color={theme.colors.borderGray}>Disabled</Text.span>
            </StyledLabel>
        </Wrapper>

        <Wrapper>
            <StyledLabel htmlFor="disabled_checked_box">
                <Checkbox id="disabled_checked_box" disabled defaultChecked onChange={checkAction} />
                <Text.span color={theme.colors.borderGray}>Disabled & Checked</Text.span>
            </StyledLabel>
        </Wrapper>

        <Wrapper title="In A Form">
            <form onSubmit={e => formAction(e)}>
                <fieldset style={{display: 'inline-block', padding: '16px'}}>
                    <legend>Fancy Form</legend>

                    <Wrapper>
                        <StyledLabel fontSize="14px" htmlFor="form_checkbox">
                            <Checkbox id="form_checkbox" size={30} onChange={checkAction} />
                            &nbsp;In This Form
                        </StyledLabel>
                    </Wrapper>

                    <Button type="submit">Submit Me</Button>
                    <br />
                    <br />
                    <OutlineButton color={theme.colors.gray} type="reset">
                        Reset Me
                    </OutlineButton>
                </fieldset>
            </form>
        </Wrapper>
    </div>
));
