import React, {forwardRef} from 'react';
import {Button} from '@chakra-ui/core';

const SecondaryButton = forwardRef((props, ref) => {
    return (
        <Button
            ref={ref}
            bg="teal.100"
            variant="solid"
            _hover={{bg: 'teal.50'}}
            color="teal.700"
            {...props}
        />
    );
});

SecondaryButton.propTypes = {};

export default SecondaryButton;
