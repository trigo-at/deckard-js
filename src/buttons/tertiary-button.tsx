import React, {FC} from 'react';
import {Button, ButtonProps, forwardRef} from '@chakra-ui/react';

const TertiaryButton: FC<ButtonProps> = forwardRef<ButtonProps, 'button'>(
    (props, ref) => {
        return (
            <Button ref={ref} colorScheme="blue" variant="ghost" {...props} />
        );
    }
);

export default TertiaryButton;
