/* eslint-disable no-use-before-define */
import React, {forwardRef, Ref} from 'react';
import {Button, ButtonProps} from '@chakra-ui/core';

const SecondaryButton = forwardRef(
    (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
        return <Button ref={ref} variant="outline" {...props} />;
    }
);

export default SecondaryButton;
