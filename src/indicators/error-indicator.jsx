import React from 'react';
import {string} from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Alert, AlertIcon, AlertTitle, AlertDescription} from '@chakra-ui/core';

const ErrorIndicator = ({error, description}) => {
    return (
        <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="200px">
            <AlertIcon size="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
                <FormattedMessage id={`error.${error}`} />
            </AlertTitle>
            {description && (
                <AlertDescription maxWidth="sm">{description}</AlertDescription>
            )}
        </Alert>
    );
};

ErrorIndicator.propTypes = {
    error: string.isRequired,
    description: string,
};

ErrorIndicator.defaultProps = {
    description: undefined,
};

export default ErrorIndicator;
