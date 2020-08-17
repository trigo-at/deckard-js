import React, {forwardRef, Ref, FC} from 'react';
import Button from './button';
import {ButtonProps} from './types';

const TertiaryButton: FC<ButtonProps> = forwardRef(
    (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
        return <Button ref={ref} variant="tertiary" {...props} />;
    }
);

export default TertiaryButton;
