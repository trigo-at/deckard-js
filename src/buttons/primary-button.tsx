import React from 'react';
import {Button, ButtonProps, forwardRef} from '@chakra-ui/react';

const PrimaryButton = forwardRef<ButtonProps, 'button'>((props, ref) => {
    return <Button ref={ref} colorScheme="blue" variant="solid" {...props} />;
});

export default PrimaryButton;
