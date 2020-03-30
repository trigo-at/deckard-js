import React, {forwardRef} from 'react';
import {Button} from '@chakra-ui/core';

const SecondaryButton = forwardRef((props, ref) => {
    return (
        <Button
            ref={ref}
            bg="teal.200"
            variant="solid"
            _hover={{bg: 'teal.100'}}
            color="teal.800"
            {...props}
        />
    );
});

SecondaryButton.propTypes = {};

export default SecondaryButton;
