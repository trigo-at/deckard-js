import React, {ReactNode, FC} from 'react';
import {Link as RouterLink} from '@reach/router';
import {getPrimaryButtonClassName} from './primary-button';

// this component is currently not exported and only used inside the repo (ViewSection for example)
// this is because we dont want to break the apps that are using the design-system
// if we export it, we need to make sure that all apps are updated accordingly

type Props = {
    to: string;
    isExternal?: boolean;
    children: ReactNode;
    renderAsButton?: boolean;
};

const Link: FC<Props> = ({to, isExternal, children, renderAsButton}: Props) =>
    isExternal ? (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={to}
            className={
                renderAsButton
                    ? getPrimaryButtonClassName({size: 'md'})
                    : `text-gray-900 hover:underline`
            }>
            {children}
        </a>
    ) : (
        <RouterLink
            to={to}
            className={
                renderAsButton
                    ? getPrimaryButtonClassName({size: 'md'})
                    : `text-gray-900 hover:underline`
            }>
            {children}
        </RouterLink>
    );

export default Link;
