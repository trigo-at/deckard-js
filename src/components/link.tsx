import React, {ReactNode, FC, Ref} from 'react';
import {Icon} from '@chakra-ui/core';
import {Link as RouterLink} from '@reach/router';
import cx from '../utils/cx';

// this component is currently not exported and only used inside the repo (ViewSection for example)
// this is because we dont want to break the apps that are using the design-system
// if we export it, we need to make sure that all apps are updated accordingly

type Props = {
    to: string;
    isExternal?: boolean;
    className?: string;
    // eslint-disable-next-line react/no-unused-prop-types
    ref?: Ref<HTMLButtonElement>;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    isDisabled?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    children: ReactNode;
};

export const getSharedLinkClassNames = (props: Record<string, any>): string =>
    cx(
        'inline-flex items-center justify-center',
        'transition-all duration-200',
        'px-4 font-semibold rounded-sm min-w-button shadow',
        {
            'h-6': props.size === 'xs',
            'h-8': props.size === 'sm',
            'h-10': props.size === 'md',
            'h-12': props.size === 'lg',
            'text-xs': props.size === 'xs',
            'text-sm': props.size === 'sm',
            'text-lg': props.size === 'lg',
            'cursor-not-allowed': props.isDisabled,
            'cursor-wait': props.isLoading,
            'opacity-50': props.isDisabled || props.isLoading,
            'focus:outline-none': props.isDisabled || props.isLoading,
        }
    );

const Link: FC<Props> = ({
    to,
    isExternal,
    children,
    className,
    size,
    isDisabled,
    leftIcon,
    rightIcon,
}: Props) =>
    isExternal ? (
        <a
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={isDisabled}
            href={to}
            className={className || 'text-gray-900 hover:underline'}>
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
            className={className || 'text-gray-900 hover:underline'}>
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
    );

export default Link;
