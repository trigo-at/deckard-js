import React, {FC, ReactNode} from 'react';
import {Box, Heading, Text, Flex} from '@chakra-ui/react';

export type CardHeaderProps = {
    heading?: string;
    description?: string;
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
            <Flex
                ml="-1rem"
                mt="-1rem"
                justifyContent="space-between"
                alignItems="center"
                flexWrap={{base: 'wrap', sm: 'nowrap'}}>
                <Box ml={4} mt={4}>
                    <Heading
                        as="h3"
                        fontSize="lg"
                        fontWeight="medium"
                        lineHeight={6}
                        color="gray.900">
                        {heading}
                    </Heading>
                    <Text
                        mt={1}
                        fontSize="sm"
                        color="gray.500"
                        overflow="hidden"
                        textOverflow="ellipsis">
                        {description}
                    </Text>
                </Box>

                {actions && (
                    <Box ml={4} mt={4} flexShrink={0}>
                        {actions}
                    </Box>
                )}
            </Flex>
        </Box>
    );
};

export default CardHeader;
