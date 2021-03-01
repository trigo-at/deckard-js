import React, {FC, ReactNode} from 'react';
import {Box, Heading, ButtonGroup} from '@chakra-ui/react';

export type PageHeaderProps = {
    heading?: string;
    actions?: ReactNode;
};

export const PageHeader: FC<PageHeaderProps> = ({heading, actions}) => {
    return (
        <Box
            mt={2}
            display={{md: 'flex'}}
            alignItems={{md: 'center'}}
            justifyContent={{md: 'space-between'}}>
            <Box flex={1} minWidth={0}>
                <Heading
                    as="h1"
                    fontSize="2xl"
                    fontWeight="bold"
                    lineHeight={7}
                    color="gray.900">
                    {heading}
                </Heading>
            </Box>

            {actions && (
                <Box mt={[4, 4, 0]} ml={{md: 4}} flexShrink={0}>
                    <ButtonGroup size="sm" spacing="3">
                        {actions}
                    </ButtonGroup>
                </Box>
            )}
        </Box>
    );
};
export default PageHeader;
