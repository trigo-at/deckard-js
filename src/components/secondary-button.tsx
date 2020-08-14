import React, {forwardRef, Ref, FC, ReactNode} from 'react';
import Button, {getSharedButtonClassNames} from './button';
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

export const getSecondaryButtonClassName = (
    props: Record<string, any>
): string =>
    cx(
        getSharedButtonClassNames(props),
        'bg-transparent text-teal-500 border border-teal-500',
        {
            'hover:bg-teal-100': !props.isDisabled && !props.isLoading,
        }
    );

const SecondaryButton: FC<Props> = forwardRef(
    (props: Props, ref: Ref<HTMLButtonElement>) => {
        const {children, ...others} = props;

        return (
            <Button
                ref={ref}
                className={getSecondaryButtonClassName(props)}
                {...others}>
                {children}
            </Button>
        );
    }
);

SecondaryButton.defaultProps = {
    type: 'button',
    size: 'md',
};

export default SecondaryButton;
