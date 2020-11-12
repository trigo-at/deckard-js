/* eslint-disable no-use-before-define */
import React, {ReactNode, FC} from 'react';
import {Box} from '@chakra-ui/core';

type Props = {
    children: ReactNode;
};

const SecondaryCellContent: FC<Props> = ({children}: Props) => {
    return (
        <Box fontSize="sm" lineHeight="shorter" color="gray.500">
            {children}
        </Box>
    );
};

export default SecondaryCellContent;
