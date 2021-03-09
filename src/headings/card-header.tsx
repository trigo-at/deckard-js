import React, {FC, ReactNode} from 'react';
import {Box, Heading, Text} from '@chakra-ui/react';

export type CardHeaderProps = {
    heading?: ReactNode | string;
    description?: ReactNode | string;
    actions?: ReactNode;
};

export const CardHeader: FC<CardHeaderProps> = ({
    heading,
    description,
    actions,
}) => {
    return (
        <Box
            bg="white"
            px={{base: 4, sm: 6}}
            py={5}
            borderBottom="1px"
            borderColor="gray.200">
            <Box
                ml="-1rem"
                mt="-1rem"
                display={{sm: 'flex'}}
                alignItems={{sm: 'center'}}
                justifyContent={{sm: 'space-between'}}>
                <Box ml={4} mt={4}>
                    <Heading
                        as="h3"
                        fontSize="lg"
                        fontWeight="medium"
                        lineHeight={6}
                        color="gray.900">
                        {heading}
                    </Heading>
                    {description && (
                        <Text
                            mt={1}
                            fontSize="sm"
                            color="gray.500"
                            overflow="hidden"
                            textOverflow="ellipsis">
                            {description}
                        </Text>
                    )}
                </Box>

                {actions && (
                    <Box ml={4} mt={4} flexShrink={0}>
                        {actions}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default CardHeader;
