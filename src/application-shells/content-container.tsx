import React, {FC, ReactNode} from 'react';
import {Box, BoxProps} from '@chakra-ui/react';

export type ContentContainerProps = {
    children: ReactNode;
} & BoxProps;

/**
 * Container für DetailViews mit Cards damit diese sich vom Hintergrund abheben.
 */
export const ContentContainer: FC<ContentContainerProps> = ({
    children,
    ...props
}) => {
    return (
        <Box
            bg="gray.50"
            minHeight="full"
            px={{base: 4, sm: 6, lg: 8}}
            {...props}>
            {children}
        </Box>
    );
};

export default ContentContainer;
