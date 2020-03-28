import React, {forwardRef} from 'react';
import {Button} from '@chakra-ui/core';

const SecondaryButton = forwardRef((props, ref) => {
    return (
        <Button ref={ref} variantColor="teal" variant="outline" {...props} />
    );
});

SecondaryButton.propTypes = {};

export default SecondaryButton;
