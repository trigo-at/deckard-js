import React, {forwardRef, Ref, FC} from 'react';
import Link from './link';
import {LinkProps} from './types';

const SecondaryLink: FC<LinkProps> = forwardRef(
    (props: LinkProps, ref: Ref<any>) => {
        return <Link ref={ref} variant="secondary" {...props} />;
    }
);

export default SecondaryLink;
