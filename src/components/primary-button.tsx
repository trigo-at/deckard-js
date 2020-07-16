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

const PrimaryButton: FC<Props> = forwardRef(
    (props: Props, ref: Ref<HTMLButtonElement>) => {
        const {children, ...others} = props;

        const className = cx(
            getSharedButtonClassNames(props),
            'bg-teal-500 text-white',
            {'hover:bg-teal-700': !props.isDisabled && !props.isLoading}
        );

        return (
            <Button ref={ref} className={className} {...others}>
                {children}
            </Button>
        );
    }
);

PrimaryButton.defaultProps = {
    type: 'button',
    size: 'md',
};

export default PrimaryButton;
