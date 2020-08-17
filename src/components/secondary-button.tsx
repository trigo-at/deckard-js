import React, {forwardRef, Ref, FC} from 'react';
import Button from './button';
import {ButtonProps} from './types';

const SecondaryButton: FC<ButtonProps> = forwardRef(
    (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
        return <Button ref={ref} variant="secondary" {...props} />;
    }
);

export default SecondaryButton;
