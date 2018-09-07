import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import Box from './Box';
import Flex from './Flex';
import Select from './Select';
import Icon from './Icon';
import Label from './Label';
import Input from './Input';
import theme from './theme';

const Root = styled(Box)`
    & ${Box} {
        pointer-events: none;
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const labelStyles = {
    animation: `${fadeIn} 0.3s`,
};

class FormField extends React.Component {
    render() {
        const {children, ...props} = this.props;

        let FieldChild;
        let position = -1;
        let LabelChild;
        let BeforeIcon;
        let AfterIcon;
        let fieldId;
        let iconAdjustment;

        React.Children.forEach(children, (child, index) => {
            if (!child) {
                return;
            }

            const {type, props: childProps} = child;

            if (type === Label) {
                LabelChild = child;
            }

            if (type === Input || type === Select) {
                position = index;
                FieldChild = child;
                fieldId = childProps.id;
            }

            if (type === Icon) {
                if (position < 0) {
                    BeforeIcon = child;
                    iconAdjustment = childProps.size - 24;
                } else {
                    AfterIcon = child;
                }
            }
        });

        if (!FieldChild) {
            FieldChild = <Input />;
        }

        return (
            <Root>
                {LabelChild &&
                    React.cloneElement(LabelChild, {
                        mt: '6px',
                        style: labelStyles,
                        htmlFor: fieldId,
                    })}
                <Flex alignItems="center" mt={0}>
                    {BeforeIcon && (
                        <Box mr={-4} ml={`${8 - iconAdjustment}px`}>
                            {BeforeIcon}
                        </Box>
                    )}
                    {React.cloneElement(FieldChild, {
                        pl: BeforeIcon && 40,
                        pr: AfterIcon && 40,
                        innerRef: elem => {
                            this.fieldRef = elem;
                        },
                        ...props,
                    })}
                    {AfterIcon && <Box ml={-4}>{AfterIcon}</Box>}
                </Flex>
            </Root>
        );
    }
}

FormField.propTypes = {
    theme: PropTypes.object,
    alwaysShowLabel: PropTypes.bool,
    // eslint-disable-next-line
    children(props, propName, componentName) {
        const prop = props[propName];
        let count = 0;
        let position = 0;
        let labelCount = 0;
        let firstIconPosition = -1;
        let secondIconPosition = 999;
        let iconCount = 0;
        React.Children.forEach(prop, (child, index) => {
            if (child === null) return;
            switch (child.type) {
                case Input:
                    position = index;
                    count++;
                    break;
                case Icon:
                    if (iconCount === 0) {
                        firstIconPosition = index;
                    } else {
                        secondIconPosition = index;
                    }
                    iconCount++;
                    break;
                case Label:
                    labelCount++;
                    break;
                default:
                    // eslint-disable-next-line
                    return new Error(`'${child.type}' is not a valid child for '${componentName}'`);
            }
        });

        if (!count) {
            return new Error(
                `No 'Input or Select' child found for '${componentName}'. Please update your component to use the compound version of this component and pass an Input or Select component as the child`
            );
        }
        if (labelCount > 1) {
            return new Error(`Exactly 0 or 1 'Label' children should be supplied to '${componentName}'`);
        }
        if (iconCount > 2) {
            return new Error(`Up to 2 'Icon' children are supported by '${componentName}'`);
        }
        if (iconCount === 2 && (firstIconPosition > position || secondIconPosition < position)) {
            return new Error(
                `If 2 'Icons' are provided, the 'Field' component must be positioned between them as children of '${componentName}'`
            );
        }
    },
};

FormField.defaultProps = {
    alwaysShowLabel: false,
    children: undefined,
    theme,
};

export default FormField;
