/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {forwardRef, Ref, FC} from 'react';
import {Icon} from '@chakra-ui/core';
import {Link as RouterLink} from '@reach/router';
import getButtonStyle from './get-button-style';
import {VariantLinkProps} from './types';

const BaseLink: FC<VariantLinkProps> = forwardRef(
    (
        {
            className,
            to,
            isExternal,
            size,
            variant,
            isDisabled,
            leftIcon,
            rightIcon,
            children,
        }: VariantLinkProps,
        ref: Ref<any>
    ) =>
        isExternal ? (
            <a
                target="_blank"
                rel="noopener noreferrer"
                ref={ref}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? 0 : undefined}
                href={isDisabled ? undefined : to}
                className={getButtonStyle({
                    className,
                    size,
                    variant,
                    isDisabled,
                })}>
                <>
                    {leftIcon ? (
                        <Icon name={leftIcon} mr={2} fontSize={size} />
                    ) : null}
                    {children}
                    {rightIcon ? (
                        <Icon name={rightIcon} ml={2} fontSize={size} />
                    ) : null}
                </>
            </a>
        ) : (
            <RouterLink
                to={to}
                ref={ref}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? 0 : undefined}
                className={getButtonStyle({
                    className,
                    size,
                    variant,
                    isDisabled,
                })}>
                <>
                    {leftIcon ? (
                        <Icon name={leftIcon} mr={2} fontSize={size} />
                    ) : null}
                    {children}
                    {rightIcon ? (
                        <Icon name={rightIcon} ml={2} fontSize={size} />
                    ) : null}
                </>
            </RouterLink>
        )
);

const Link: FC<VariantLinkProps> = forwardRef(
    (props: VariantLinkProps, ref: Ref<HTMLButtonElement>) => {
        if (['primary', 'secondary'].includes(props.variant)) {
            return (
                <span className="inline-flex rounded-md shadow-sm">
                    <BaseLink ref={ref} {...props} />
                </span>
            );
        }
        return <BaseLink ref={ref} {...props} />;
    }
);

Link.defaultProps = {
    size: 'md',
    className: '',
};

export default Link;
