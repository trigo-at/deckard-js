import React, {forwardRef} from 'react';
import {Button} from '@chakra-ui/core';

const TertiaryButton = forwardRef((props, ref) => {
    return <Button ref={ref} variantColor="teal" variant="ghost" {...props} />;
});

TertiaryButton.propTypes = {};

export default TertiaryButton;
