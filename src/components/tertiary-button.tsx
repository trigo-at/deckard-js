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

export const getTertiaryButtonClassName = (
    props: Record<string, any>
): string =>
    cx(getSharedButtonClassNames(props), 'bg-gray-400 text-white', {
        'hover:bg-gray-600': !props.isDisabled && !props.isLoading,
    });

const TertiaryButton: FC<Props> = forwardRef(
    (props: Props, ref: Ref<HTMLButtonElement>) => {
        const {children, ...others} = props;

        return (
            <Button
                ref={ref}
                className={getTertiaryButtonClassName(props)}
                {...others} // eslint-disable-line react/jsx-props-no-spreading
            >
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
