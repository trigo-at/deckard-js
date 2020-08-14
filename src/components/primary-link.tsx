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

export const getPrimaryLinkClassName = (props: Record<string, any>): string =>
    cx(getSharedLinkClassNames(props), 'bg-teal-500 text-white', {
        'hover:bg-teal-700': !props.isDisabled,
    });

const PrimaryLink: FC<Props> = forwardRef(
    (props: Props, ref: Ref<HTMLButtonElement>) => {
        const {children, ...others} = props;

        return (
            <Link
                ref={ref}
                className={getPrimaryLinkClassName(props)}
                {...others}>
                {children}
            </Link>
        );
    }
);

PrimaryLink.defaultProps = {
    size: 'md',
};

export default PrimaryLink;
