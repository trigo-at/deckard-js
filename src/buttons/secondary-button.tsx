import React from 'react';
import {Button, ButtonProps, forwardRef} from '@chakra-ui/react';

const SecondaryButton = forwardRef<ButtonProps, 'button'>((props, ref) => {
    return <Button ref={ref} colorScheme="blue" variant="outline" {...props} />;
});

export default SecondaryButton;
