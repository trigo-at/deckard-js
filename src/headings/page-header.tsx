import React, {FC, ReactNode} from 'react';
import {Box, Heading, Stack, ButtonGroup} from '@chakra-ui/react';

export type PageHeaderProps = {
    heading?: ReactNode | string;
    meta?: ReactNode | string;
    actions?: ReactNode;
};

export const PageHeader: FC<PageHeaderProps> = ({heading, meta, actions}) => {
    return (
        <Box bg="header.background">
            <Box
                px={{base: 4, sm: 6, lg: 8}}
                py={4}
                display={{md: 'flex'}}
                alignItems={{md: 'center'}}
                justifyContent={{md: 'space-between'}}>
                <Box flex={1} minWidth={0}>
                    <Heading
                        as="h1"
                        fontSize="2xl"
                        fontWeight="bold"
                        letterSpacing="wider"
                        lineHeight={7}
                        color="header.page.text">
                        {heading}
                    </Heading>
                    {meta && (
                        <Stack
                            direction={{base: 'column', sm: 'row'}}
                            mt={1}
                            spacing={{base: 2, sm: 4}}>
                            {meta}
                        </Stack>
                    )}
                </Box>

                {actions && (
                    <Box mt={[4, 4, 0]} ml={{md: 4}} flexShrink={0}>
                        <ButtonGroup spacing="3">{actions}</ButtonGroup>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
export default PageHeader;
