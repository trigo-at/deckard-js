import React from 'react';
import {string, any, oneOf} from 'prop-types';
import styled from 'styled-components';
import Box from './Box';
import Flex from './Flex';
import Label from './Label';
import Input from './Input';
import Icon from './Icon';

const propTypes = {
    id: string.isRequired,
    label: string,
    children: any,
    color: oneOf('positive', 'warning', 'negative'),
};

const defaultProps = {
    label: undefined,
    children: undefined,
    color: undefined,
};

const StateIcon = styled(Icon)`
    position: absolute;
    right: 12px;
    top: 12px;
`;

const ContainerBox = styled(Box)`
    position: relative;
`;

const showIcon = color => ['positive', 'warning', 'negative'].includes(color);

const FormField = ({id, label, color, children}) => {
    const inputProps = {id, color};
    if (showIcon(color)) {
        inputProps.pr = 5;
    }

    return (
        <Flex flexDirection="column">
            {label && (
                <Label color={color} htmlFor={id}>
                    {label}
                </Label>
            )}
            <ContainerBox>
                {children ? React.cloneElement(children, inputProps) : <Input {...inputProps} />}
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
