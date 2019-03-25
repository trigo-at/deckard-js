import React from 'react';
import {string, any, oneOf} from 'prop-types';
import styled from 'styled-components';
import Box from './Box';
import Flex from './Flex';
import Label from './Label';
import Input from './Input';
import Icon from './Icon';
import Text from './Text';

const propTypes = {
    id: string.isRequired,
    label: string.isRequired,
    hint: string,
    children: any, // eslint-disable-line
    color: oneOf(['positive', 'warning', 'negative']),
};

const defaultProps = {
    children: undefined,
    color: undefined,
    hint: undefined,
};

const StateIcon = styled(Icon)``;

const ContainerBox = styled(Box)`
    position: relative;
`;

const IconContainer = styled.div`
    position: absolute;
    top: 0;
    right: 4px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const showIcon = color => ['positive', 'warning', 'negative'].includes(color);

const FormField = ({id, label, hint, color, children}) => {
    const inputProps = {id, color};
    if (showIcon(color)) {
        inputProps.pr = 5;
    }

    return (
        <Flex flexDirection="column">
            <Label color={color} htmlFor={id} pb={1}>
                {label}
            </Label>
            <ContainerBox>
                <IconContainer>
                    {color === 'positive' && <StateIcon color="positive" name="checkmarkOutline" />}
                    {color === 'warning' && <StateIcon color="warning" name="exclamationOutline" />}
                    {color === 'negative' && <StateIcon color="negative" name="closeOutline" />}
                </IconContainer>
                {children ? React.cloneElement(children, inputProps) : <Input {...inputProps} />}
            </ContainerBox>

            {hint && (
                <Text.span fontSize={0} color={color === 'negative' ? color : 'gray'} mt={1} opacity={0.75}>
                    {hint}
                </Text.span>
            )}
        </Flex>
    );
};

FormField.propTypes = propTypes;
FormField.defaultProps = defaultProps;

export default FormField;
