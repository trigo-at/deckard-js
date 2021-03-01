import React, {FC, ReactNode} from 'react';
import {Grid} from '@chakra-ui/react';

export type DescriptionListProps = {
    children?: ReactNode;
};

export const DescriptionList: FC<DescriptionListProps> = ({children}) => {
    return (
        <Grid
            as="dl"
            templateColumns={{
                base: 'repeat(1, minmax(0, 1fr))',
                sm: 'repeat(2, minmax(0, 1fr))',
            }}
            columnGap={4}
            rowGap={8}>
            {children}
        </Grid>
    );
};

export default DescriptionList;
