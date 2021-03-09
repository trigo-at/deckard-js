import React, {FC, ReactNode} from 'react';
import {Box, Grid, GridProps} from '@chakra-ui/react';
import HideOptionalContext from '../form-fields/hide-optional-context';

export type FormGridProps = {
    gridTemplateAreas: Element || string;
    children: ReactNode;
    hideOptionalIndicator?: boolean;
} & GridProps;

export const FormGrid: FC<FormGridProps> = ({
    gridTemplateAreas,
    children,
    hideOptionalIndicator,
    ...props
}) => {
    return (
        <HideOptionalContext.Provider value={hideOptionalIndicator}>
            {gridTemplateAreas ? (
                <Grid
                    gridGap={6}
                    alignItems="flex-start"
                    gridTemplateColumns="repeat(3, 1fr)"
                    gridTemplateAreas={gridTemplateAreas}
                    {...props}>
                    {children}
                </Grid>
            ) : (
                <Box>{children}</Box>
            )}
        </HideOptionalContext.Provider>
    );
};

export default FormGrid;
