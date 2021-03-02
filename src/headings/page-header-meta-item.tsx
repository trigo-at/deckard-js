import React, {FC, ReactElement, ReactNode} from 'react';
import {Flex} from '@chakra-ui/react';

export type PageHeaderMetaItemProps = {
    icon: ReactElement<any>;
    children: ReactNode;
};

export const PageHeaderMetaItem: FC<PageHeaderMetaItemProps> = ({
    icon,
    children,
}) => {
    const metaIcon = React.cloneElement(icon, {
        flexShrink: 0,
        mr: 1.5,
        h: 5,
        w: 5,
        color: 'gray.400',
    });
    return (
        <Flex mt={2} alignItems="center" fontSize="sm" color="gray.500">
            {metaIcon}
            {children}
        </Flex>
    );
};

export default PageHeaderMetaItem;
