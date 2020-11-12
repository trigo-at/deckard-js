/* eslint-disable no-use-before-define */
import React, {ReactNode, FC} from 'react';
import {Box} from '@chakra-ui/core';

type Props = {
    children: ReactNode;
};

const CellContent: FC<Props> = ({children}: Props) => {
    return (
        <Box
            fontSize="sm"
            lineHeight="shorter"
            fontWeight="medium"
            color="gray.900">
            {children}
        </Box>
    );
};

export default CellContent;
