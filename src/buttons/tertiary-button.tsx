import React from 'react';
import {Button, ButtonProps, forwardRef} from '@chakra-ui/react';

const TertiaryButton = forwardRef<ButtonProps, 'button'>((props, ref) => {
    return <Button ref={ref} colorScheme="blue" variant="ghost" {...props} />;
});

export default TertiaryButton;
