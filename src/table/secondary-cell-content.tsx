import React, {FC} from 'react';
import {Text, TextProps} from '@chakra-ui/react';

const SecondaryCellContent: FC<TextProps> = ({children, ...props}) => {
    return (
        <Text fontSize="sm" fontWeight="medium" color="gray.500" {...props}>
            {children}
        </Text>
    );
};

export default SecondaryCellContent;
