import React, {FC, ReactNode} from 'react';
import {Box} from '@chakra-ui/react';

export type CardContainerProps = {
    children: ReactNode;
};

/**
 * Container für DetailViews mit Cards damit diese sich vom Hintergrund abheben.
 */
export const CardContainer: FC<CardContainerProps> = ({children}) => {
    return (
        <Box bg="gray.50" minHeight="full" px={{base: 4, sm: 6, lg: 8}}>
            {children}
        </Box>
    );
};

export default CardContainer;
