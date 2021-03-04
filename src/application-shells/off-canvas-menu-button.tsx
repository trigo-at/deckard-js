import React from 'react';
import {Box, VisuallyHidden, Button, forwardRef, Icon} from '@chakra-ui/react';

export type OffCanvasMenuButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const OffCanvasMenuButton = forwardRef<
    OffCanvasMenuButtonProps,
    'button'
>(({onClick}, ref) => {
    return (
        <Box display={{base: 'block', lg: 'none'}} pl={[1, 3]} pt={[1, 3]}>
            <Button
                ref={ref}
                type="button"
                ml="-0.125rem"
                mt="-0.125rem"
                h={12}
                w={12}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                rounded="md"
                color="gray.500"
                _hover={{color: 'gray.900'}}
                _focus={{outline: 'none', boxShadow: 'ring2'}}
                onClick={onClick}>
                <VisuallyHidden>Open sidebar</VisuallyHidden>
                <Icon
                    h={6}
                    w={6}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </Icon>
            </Button>
        </Box>
    );
});

export default OffCanvasMenuButton;
