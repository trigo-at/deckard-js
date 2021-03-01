import React, {FC} from 'react';
import {FormattedMessage} from 'react-intl';
import {Icon, Link} from '@chakra-ui/react';
import {TranslationMessage} from '../types';
// import Link from '../buttons/link';

type Props = {
    status: 'success' | 'error' | 'warning' | 'info';
    title?: TranslationMessage;
    description?: string;
    to?: string;
    action?: string;
};

const STATUSES = {
    success: {
        backgroundColor: 'bg-green-200',
        icon: <Icon mt={5} size="40px" name="check-circle" color="green.500" />,
    },
    error: {
        backgroundColor: 'bg-red-200',
        icon: <Icon mt={5} size="40px" name="warning" color="red.500" />,
    },
    warning: {
        backgroundColor: 'bg-orange-200',
        icon: <Icon mt={5} size="40px" name="warning-2" color="orange.500" />,
    },
    info: {
        backgroundColor: 'bg-blue-200',
        icon: <Icon mt={5} size="40px" name="info" color="blue.500" />,
    },
};

const FullPageAlert: FC<Props> = ({
    status,
    title,
    description,
    to,
    action,
}: Props) => {
    return (
        <>
            <div
                className={`flex flex-col items-center text-center h-60 ${STATUSES[status].backgroundColor}`}>
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
