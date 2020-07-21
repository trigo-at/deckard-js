import React, {SFC} from 'react';
import {FormattedMessage} from 'react-intl';
import {AlertIcon, Icon, Alert} from '@chakra-ui/core';
import {TranslationMessage} from '../types';
import Link from '../components/link';

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
        // <div>
        //     <Alert
        //         className="flex flex-col justify-center text-center h-52"
        //         status={status}>
        //         <AlertIcon size="40px" mr={0} />
        //         <div className="mt-4 mb-2 font-bold text-2xl">
        //             <FormattedMessage id={title} />
        //         </div>
        //         <div className="max-w-xl">
        //             <FormattedMessage id={description} />
        //         </div>
        //     </Alert>
        //     <div className="flex justify-center items-center mt-10">
        //         <Link renderAsButton to={to || '/'}>
        //             <FormattedMessage id={action || 'common.next'} />
        //         </Link>
        //     </div>
        // </div>

        <div>
            <div className="flex flex-col items-center text-center bg-green-200 h-60">
                <Icon
                    mt={6}
                    name="check-circle"
                    size="40px"
                    color="green.500"
                />
                <div className="mt-4 mb-2 font-bold text-2xl">
                    <FormattedMessage id={title} />
                </div>
                <div className="max-w-md">
                    <FormattedMessage id={description} />
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <Link renderAsButton to={to || '/'}>
                    <FormattedMessage id={action || 'common.next'} />
                </Link>
            </div>
        </div>
    );
};

export default FullPageAlert;
