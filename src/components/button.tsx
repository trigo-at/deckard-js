/* eslint-disable react/button-has-type */
import React, {forwardRef, ReactNode, Ref, FC} from 'react';
import {Icon} from '@chakra-ui/core';
import LoadingIndicator from './loading-indicator';

type Props = {
    className: string;
    ref?: Ref<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    isDisabled?: boolean;
    isLoading?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
};

const Button: FC<Props> = forwardRef(
    (props: Props, ref: Ref<HTMLButtonElement>) => {
        const {
            className,
            type,
            size,
            isDisabled,
            isLoading,
            leftIcon,
            rightIcon,
            onClick,
            children,
        } = props;

        return (
            <button
                type={type}
                ref={ref}
                aria-disabled={isDisabled || isLoading}
                className={className}
                style={{outlineColor: '#05a9f0'}}
                onClick={isDisabled || isLoading ? undefined : onClick}
                aria-label={
                    isLoading && typeof children === 'string'
                        ? children
                        : undefined
                }>
                {isLoading ? (
                    <LoadingIndicator size={size} />
                ) : (
                    <>
                        {leftIcon ? (
                            <Icon name={leftIcon} mr={2} fontSize={size} />
                        ) : null}
                        {children}
                        {rightIcon ? (
                            <Icon name={rightIcon} ml={2} fontSize={size} />
                        ) : null}
                    </>
                )}
            </button>
        );
    }
);

Button.defaultProps = {
    type: 'button',
    size: 'md',
};

export default Button;
