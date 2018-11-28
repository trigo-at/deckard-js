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
    children: any,
    color: oneOf(['positive', 'warning', 'negative']),
};

const defaultProps = {
    children: undefined,
    color: undefined,
    hint: undefined,
};

const StateIcon = styled(Icon)`
    position: absolute;
    right: 12px;
    top: 32px;
`;

const ContainerBox = styled(Box)`
    position: relative;
`;

const showIcon = color => ['positive', 'warning', 'negative'].includes(color);

const FormField = ({id, label, hint, color, children}) => {
    const inputProps = {id, color};
    if (showIcon(color)) {
        inputProps.pr = 5;
    }

    return (
        <Flex flexDirection="column-reverse">
            {hint && (
                <Text.span fontSize={0} color={color === 'negative' ? color : 'gray'} mt={1} opacity={0.75}>
                    {hint}
                </Text.span>
            )}
            {children ? React.cloneElement(children, inputProps) : <Input {...inputProps} />}
            <Label color={color} htmlFor={id}>
                {label}
            </Label>
            <ContainerBox>
                {color === 'positive' && <StateIcon color="positive" name="checkmarkOutline" />}
                {color === 'warning' && <StateIcon color="warning" name="exclamationOutline" />}
                {color === 'negative' && <StateIcon color="negative" name="closeOutline" />}
            </ContainerBox>
        </Flex>
    );
};

FormField.propTypes = propTypes;
FormField.defaultProps = defaultProps;

export default FormField;
