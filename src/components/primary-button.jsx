import React, {forwardRef} from 'react';
import {Button} from '@chakra-ui/core';

const PrimaryButton = forwardRef((props, ref) => {
    return (
        <Button
            ref={ref}
            bg="teal.600"
            _hover={{bg: 'teal.500'}}
            color="white"
            variant="solid"
            {...props}
        />
    );
});

PrimaryButton.propTypes = {};

export default PrimaryButton;
