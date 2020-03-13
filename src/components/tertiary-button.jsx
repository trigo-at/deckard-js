import React from 'react';
import {Button} from '@chakra-ui/core';

const TertiaryButton = props => {
    return <Button variantColor="teal" variant="ghost" {...props} />;
};

TertiaryButton.propTypes = {};

export default TertiaryButton;
