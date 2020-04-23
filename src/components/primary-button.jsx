import React, {forwardRef} from 'react';
import {Button} from '@chakra-ui/core';

const PrimaryButton = forwardRef((props, ref) => {
    return <Button ref={ref} variantColor="teal" variant="solid" {...props} />;
});

PrimaryButton.propTypes = {};

export default PrimaryButton;
