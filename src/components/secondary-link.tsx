import React, {forwardRef, Ref, FC, ReactNode} from 'react';
import Link, {getSharedLinkClassNames} from './link';
import cx from '../utils/cx';

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

export const getSecondaryLinkClassName = (props: Record<string, any>): string =>
    cx(
        getSharedLinkClassNames(props),
        'bg-transparent text-teal-500 border border-teal-500',
        {
            'hover:bg-teal-700': !props.isDisabled,
        }
    );

const SecondaryLink: FC<Props> = forwardRef(
    (props: Props, ref: Ref<HTMLButtonElement>) => {
        const {children, ...others} = props;

        return (
            <Link
                ref={ref}
                className={getSecondaryLinkClassName(props)}
                {...others}>
                {children}
            </Link>
        );
    }
);

SecondaryLink.defaultProps = {
    size: 'md',
};

export default SecondaryLink;
