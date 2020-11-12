/* eslint-disable no-use-before-define */
import React, {ReactNode, FC} from 'react';
import {Box} from '@chakra-ui/core';

type Props = {
    children: ReactNode;
};

const TableBody: FC<Props> = ({children, ...props}: Props) => {
    return (
        <Box
            as="tbody"
            bg="white"
            className="divide-y divide-gray-200"
            {...props}>
            {children}
        </Box>
    );
};

export default TableBody;
