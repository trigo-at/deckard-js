import React, {forwardRef, Ref, FC} from 'react';
import Link from './link';
import {LinkProps} from './types';

const TertiaryLink: FC<LinkProps> = forwardRef(
    (props: LinkProps, ref: Ref<any>) => {
        return <Link ref={ref} variant="tertiary" {...props} />;
    }
);

export default TertiaryLink;
