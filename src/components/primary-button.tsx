import React, {forwardRef, Ref, FC} from 'react';
import Button from './button';
import {ButtonProps} from './types';

const PrimaryButton: FC<ButtonProps> = forwardRef(
    (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
        return <Button ref={ref} variant="primary" {...props} />;
    }
);

export default PrimaryButton;
