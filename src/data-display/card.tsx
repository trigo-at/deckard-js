import React, {FC, ReactNode} from 'react';
import {Box} from '@chakra-ui/react';

export type CardProps = {
    heading?: ReactNode;
    footer?: ReactNode;
    isEmbedded?: boolean;
    children?: ReactNode;
};

export const Card: FC<CardProps> = ({heading, children, footer, ...props}) => {
    return (
        <Box
            bg="white"
            shadow="base"
            overflow="hidden"
            rounded={{sm: 'lg'}}
            {...props}>
            {heading}
            <Box px={{base: 4, sm: 6}} py={5}>
                {children}
            </Box>
            {footer && (
                <Box
                    px={{base: 4, sm: 6}}
                    py={3}
                    bg="gray.50"
                    textAlign="right">
                    {footer}
                </Box>
            )}
        </Box>
    );
};

export default Card;
