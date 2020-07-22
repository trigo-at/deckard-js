import React, {SFC} from 'react';
import {FormattedMessage} from 'react-intl';
import {Icon} from '@chakra-ui/core';
import {TranslationMessage} from '../types';
import Link from '../components/link';

type Props = {
    status: 'success' | 'error' | 'warning' | 'info';
    title?: TranslationMessage;
    description?: string;
    to?: string;
    action?: string;
};

const STATUSES = {
    success: {
        backgroundColor: 'green-200',
        icon: <Icon mt={5} size="40px" name="check-circle" color="green.500" />,
    },
    error: {
        backgroundColor: 'red-200',
        icon: <Icon mt={5} size="40px" name="warning" color="red.500" />,
    },
    warning: {
        backgroundColor: 'orange-200',
        icon: <Icon mt={5} size="40px" name="warning-2" color="orange.500" />,
    },
    info: {
        backgroundColor: 'blue-200',
        icon: <Icon mt={5} size="40px" name="info" color="blue.500" />,
    },
};

const FullPageAlert: SFC<Props> = ({
    status,
    title,
    description,
    to,
    action,
}: Props): React.ReactElement => {
    return (
        <>
            <div
                className={`flex flex-col items-center text-center bg-${STATUSES[status].backgroundColor} h-60`}>
                {STATUSES[status].icon}
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
        </>
    );
};

export default FullPageAlert;
