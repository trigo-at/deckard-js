import React, {FC, ReactNode} from 'react';
import {GridItem, Text} from '@chakra-ui/react';

export type DescriptionListItemProps = {
    label?: ReactNode;
    value?: ReactNode;
    colSpan?: number;
};

export const DescriptionListItem: FC<DescriptionListItemProps> = ({
    label,
    value,
    colSpan = 1,
}) => {
    return (
        <GridItem colSpan={{sm: colSpan}}>
            <Text as="dt" fontSize="sm" fontWeight="medium" color="gray.500">
                {label}
            </Text>
            <Text as="dd" mt={1} fontSize="sm" color="gray.900">
                {value}
            </Text>
        </GridItem>
    );
};

export default DescriptionListItem;
