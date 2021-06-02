import React, {FC, ReactNode} from 'react';
import {Box, Heading, Text, ButtonGroup, Flex} from '@chakra-ui/react';

export type SectionHeaderProps = {
    heading?: ReactNode | string;
    description?: ReactNode | string;
    actions?: ReactNode;
};

export const SectionHeader: FC<SectionHeaderProps> = ({
    heading,
    description,
    actions,
}) => {
    return (
        <Box
            pb={5}
            bg="header.section.background"
            borderBottom="1px"
            borderColor="header.section.border"
            display={{sm: 'flex'}}
            alignItems={{sm: 'center'}}
            justifyContent={{sm: 'space-between'}}>
            <Box flex={1} minWidth={0}>
                <Heading
                    as="h2"
                    fontSize="lg"
                    fontWeight="medium"
                    lineHeight={6}
                    color="header.section.text">
                    {heading}
                </Heading>
                {description && (
                    <Text
                        mt={1}
                        fontSize="sm"
                        color="header.section.description"
                        overflow="hidden"
                        textOverflow="ellipsis">
                        {description}
                    </Text>
                )}
            </Box>

            {actions && (
                <Flex mt={[3, 0]} ml={{sm: 4}}>
                    <ButtonGroup size="sm" spacing="3">
                        {actions}
                    </ButtonGroup>
                </Flex>
            )}
        </Box>
    );
};

export default SectionHeader;
