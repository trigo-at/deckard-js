/* eslint-disable react/button-has-type */
import React, {forwardRef, Ref, FC} from 'react';
import {Icon} from '@chakra-ui/core';
import LoadingIndicator from './loading-indicator';
import getButtonStyle from './get-button-style';
import {VariantButtonProps} from './types';

// this Component is currently not exported, it is only used within this repo
// to serve as a base-component for primary-button / secondary-button and tertiary-button

const BaseButton: FC<VariantButtonProps> = forwardRef(
    (
        {
            className,
            type,
            size,
            variant,
            isDisabled,
            isLoading,
            leftIcon,
            rightIcon,
            onClick,
            children,
        }: VariantButtonProps,
        ref: Ref<HTMLButtonElement>
    ) => (
        <button
            type={type}
            ref={ref}
            aria-disabled={isDisabled || isLoading}
            className={getButtonStyle({
                className,
                size,
                variant,
                isDisabled,
                isLoading,
            })}
            onClick={isDisabled || isLoading ? undefined : onClick}
            aria-label={
                isLoading && typeof children === 'string' ? children : undefined
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
    )
);

const Button: FC<VariantButtonProps> = forwardRef(
    (props: VariantButtonProps, ref: Ref<HTMLButtonElement>) => {
        if (['primary', 'secondary'].includes(props.variant)) {
            return (
                <span className="inline-flex rounded-md shadow-sm">
                    <BaseButton ref={ref} {...props} />
                </span>
            );
        }
        return <BaseButton ref={ref} {...props} />;
    }
);

Button.defaultProps = {
    type: 'button',
    size: 'md',
    className: '',
};

export default Button;
