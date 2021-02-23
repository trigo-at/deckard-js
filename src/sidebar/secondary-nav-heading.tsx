import React, {FC, ReactNode} from 'react';
import {Heading} from '@chakra-ui/react';

export type SecondaryNavHeadingProps = {
    children: ReactNode;
    id?: string;
};

export const SecondaryNavHeading: FC<SecondaryNavHeadingProps> = ({
    children,
    ...props
}) => {
    return (
        <Heading
            as="h3"
            px={3}
            fontSize="xs"
            fontWeight="semibold"
            color="gray.500"
            textTransform="uppercase"
            letterSpacing="wider"
            {...props}>
            {children}
        </Heading>
    );
};

export default SecondaryNavHeading;
