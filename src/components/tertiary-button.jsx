import React, {forwardRef} from 'react';
import {Button} from '@chakra-ui/core';

const TertiaryButton = forwardRef((props, ref) => {
    return (
        <Button
            ref={ref}
            _hover={{bg: 'gray.400'}}
            _active={{bg: 'gray.500'}}
            shadow="sm"
            bg="gray.300"
            {...props}
        />
    );
});

TertiaryButton.propTypes = {};

export default TertiaryButton;
