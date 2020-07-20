import React, {SFC, ReactNode} from 'react';
import {TranslationMessage} from 'src/types';
import {FormattedMessage} from 'react-intl';
import {Alert, AlertIcon} from '@chakra-ui/core';
import Link from '../components/link';
import PrimaryButton from '../components/primary-button';

type Props = {
    status?: 'error' | 'success' | 'warning' | 'info' | undefined;
    title?: TranslationMessage;
    description?: string;
    to?: string;
    action?: string;
};

const FullPageAlert: SFC<Props> = ({
    status,
    title,
    description,
    to,
    action,
}: Props): React.ReactElement => {
    return (
        // <Box>
        //     <Alert
        //         status={status}
        //         variant="subtle"
        //         flexDirection="column"
        //         justifyContent="center"
        //         textAlign="center"
        //         minHeight="200px">
        //         <AlertIcon size="40px" mr={0} />
        //         <AlertTitle mt={4} mb={2} fontSize="2xl">
        //             <FormattedMessage id={title} />
        //         </AlertTitle>
        //         <AlertDescription maxWidth="xl">
        //             <FormattedMessage id={description} />
        //         </AlertDescription>
        //     </Alert>
        //     <Flex mt={10} justifyContent="center" alignItems="center">
        //         <PrimaryButton as={Link} to={to || '/'}>
        //             <FormattedMessage id={action || 'common.next'} />
        //         </PrimaryButton>
        //     </Flex>
        // </Box>
        <div>
            <Alert
                className="flex flex-col justify-center text-center h-64"
                status={status}>
                <AlertIcon size="40px" mr={0} />
                <div className="mt-4 mb-2 font-bold text-2xl">
                    <FormattedMessage id={title} />
                </div>
                <div className="max-w-xl">
                    <FormattedMessage id={description} />
                </div>
            </Alert>
            <div className="flex justify-center items-center mt-10">
                {/* <PrimaryButton as={Link} to={to || '/'}>
                    <FormattedMessage id={action || 'common.next'} />
                </PrimaryButton> */}
                <Link variant to={to || '/'}>
                    <FormattedMessage id={action || 'common.next'} />
                </Link>
            </div>
        </div>
    );
};

export default FullPageAlert;

// change variant="primary" as standard link style for fullpagealert
