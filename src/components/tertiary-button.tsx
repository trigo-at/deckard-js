/* eslint-disable no-use-before-define */
import React, {forwardRef, Ref} from 'react';
import {Button, ButtonProps} from '@chakra-ui/core';

const TertiaryButton = forwardRef(
    (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
        return <Button ref={ref} variant="ghost" {...props} />;
    }
);

export default TertiaryButton;
