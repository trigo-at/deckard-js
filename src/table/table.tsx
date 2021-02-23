import React, {FC} from 'react';
import {Table as ChakraTable, TableProps} from '@chakra-ui/react';

const Table: FC<TableProps> = ({children, ...props}) => {
    return (
        <ChakraTable variant="striped" colorScheme="gray" size="sm" {...props}>
            {children}
        </ChakraTable>
    );
};

export default Table;
