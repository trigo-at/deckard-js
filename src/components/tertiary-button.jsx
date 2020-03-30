import React, {forwardRef} from 'react';
import {Button} from '@chakra-ui/core';

const TertiaryButton = forwardRef((props, ref) => {
    return (
        <Button
            ref={ref}
            color="gray.700"
            variant="outline"
            borderColor="gray.300"
            _hover={{color: 'gray.500'}}
            bg="white"
            {...props}
        />
    );
});

TertiaryButton.propTypes = {};

export default TertiaryButton;
