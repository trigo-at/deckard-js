import React, {forwardRef, Ref, FC, ReactNode} from 'react';
import Button from './button';
import cx from '../utils/cx';

type Props = {
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

const TertiaryButton: FC<Props> = forwardRef(
    (props: Props, ref: Ref<HTMLButtonElement>) => {
        const {children, ...others} = props;

        const className = cx(
            'px-4 bg-gray-400 text-white font-semibold rounded-sm inline-flex items-center justify-center transition-all duration-200 min-w-button shadow',
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
                'hover:bg-gray-600': !props.isDisabled && !props.isLoading,
                'opacity-50': props.isDisabled || props.isLoading,
                'focus:outline-none': props.isDisabled || props.isLoading,
            }
        );

        return (
            <Button ref={ref} className={className} {...others}>
                {children}
            </Button>
        );
    }
);

TertiaryButton.defaultProps = {
    type: 'button',
    size: 'md',
};

export default TertiaryButton;
