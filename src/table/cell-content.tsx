import React, {FC} from 'react';
import {Text, TextProps} from '@chakra-ui/react';

const CellContent: FC<TextProps> = ({children, ...props}) => {
    return (
        <Text fontSize="sm" fontWeight="medium" color="gray.900" {...props}>
            {children}
        </Text>
    );
};

export default CellContent;
