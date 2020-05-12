import React from 'react';
import {string} from 'prop-types';
import {Link} from '@reach/router';
import {FormattedMessage} from 'react-intl';
import {
    Alert,
    AlertTitle,
    AlertIcon,
    AlertDescription,
    Flex,
    Box,
} from '@chakra-ui/core';
import PrimaryButton from '../components/primary-button';

const FullPageAlert = ({status, title, description, to, action}) => {
    return (
        <Box>
            <Alert
                status={status}
                variant="subtle"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                minHeight="200px">
                <AlertIcon size="40px" mr={0} />
                <AlertTitle mt={4} mb={2} fontSize="2xl">
                    <FormattedMessage id={title} />
                </AlertTitle>
                <AlertDescription maxWidth="xl">
                    <FormattedMessage id={description} />
                </AlertDescription>
            </Alert>
            <Flex mt={10} justifyContent="center" alignItems="center">
                <PrimaryButton as={Link} to={to || '/'}>
                    <FormattedMessage id={action || 'common.next'} />
                </PrimaryButton>
            </Flex>
        </Box>
    );
};

FullPageAlert.propTypes = {
    status: string,
    title: string.isRequired,
    description: string.isRequired,
    to: string,
    action: string,
};

FullPageAlert.defaultProps = {
    status: 'info',
    to: undefined,
    action: undefined,
};

export default FullPageAlert;
