import React, {FC, ReactNode} from 'react';
import {Flex, Box} from '@chakra-ui/react';

export type CardProps = {
    heading?: ReactNode;
    footer?: ReactNode;
    isEmbedded?: boolean;
    children?: ReactNode;
};

export const Card: FC<CardProps> = ({heading, children, footer, ...props}) => {
    return (
        <Flex
            bg="white"
            shadow="base"
            overflow="hidden"
            flexDirection="column"
            rounded={{sm: 'lg'}}
            {...props}>
            {heading}
            {children && (
                <Flex
                    flexDirection="column"
                    flexGrow={1}
                    px={{base: 4, sm: 6}}
                    py={5}>
                    {children}
                </Flex>
            )}
            {footer && (
                <Box
                    px={{base: 4, sm: 6}}
                    py={3}
                    bg="gray.50"
                    textAlign="right">
                    {footer}
                </Box>
            )}
        </Flex>
    );
};

export default Card;
