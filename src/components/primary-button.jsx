import React from 'react';
import {Button} from '@chakra-ui/core';

const PrimaryButton = props => {
    return <Button variantColor="teal" variant="solid" {...props} />;
};

PrimaryButton.propTypes = {};

export default PrimaryButton;
