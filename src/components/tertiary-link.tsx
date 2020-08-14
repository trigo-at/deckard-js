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

export const getTertiaryLinkClassName = (props: Record<string, any>): string =>
    cx(getSharedLinkClassNames(props), 'bg-gray-400 text-white', {
        'hover:bg-gray-600': !props.isDisabled,
    });

const TertiaryLink: FC<Props> = forwardRef(
    (props: Props, ref: Ref<HTMLButtonElement>) => {
        const {children, ...others} = props;

        return (
            <Link
                ref={ref}
                className={getTertiaryLinkClassName(props)}
                {...others}>
                {children}
            </Link>
        );
    }
);

TertiaryLink.defaultProps = {
    size: 'md',
};

export default TertiaryLink;
