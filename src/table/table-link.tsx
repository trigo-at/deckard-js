import React, {ReactNode, FC} from 'react';
import {Link as RouterLink} from '@reach/router';

type Props = {
    to: string;
    isExternal?: boolean;
    children: ReactNode;
};

const TableLink: FC<Props> = ({to, isExternal, children, ...props}: Props) =>
    isExternal ? (
        <a
            target="_blank"
            href={to}
            className="text-indigo-600 hover:text-indigo-900 text-sm leading-5 font-medium"
            {...props}
            rel="noopener noreferrer">
            {children}
        </a>
    ) : (
        <RouterLink
            to={to}
            className="text-indigo-600 hover:text-indigo-900 text-sm leading-5 font-medium"
            {...props}>
            {children}
        </RouterLink>
    );

TableLink.defaultProps = {
    isExternal: false,
};

export default TableLink;
