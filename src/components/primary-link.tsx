import React, {forwardRef, Ref, FC} from 'react';
import Link from './link';
import {LinkProps} from './types';

const PrimaryLink: FC<LinkProps> = forwardRef(
    (props: LinkProps, ref: Ref<any>) => {
        return <Link ref={ref} variant="primary" {...props} />;
    }
);

export default PrimaryLink;
