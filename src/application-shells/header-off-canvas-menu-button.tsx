import React from 'react';
import {VisuallyHidden, Button, Icon, forwardRef} from '@chakra-ui/react';

export type HeaderOffCanvasMenuButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const HeaderOffCanvasMenuButton = forwardRef<
    HeaderOffCanvasMenuButtonProps,
    'button'
>(({onClick}, ref) => {
    return (
        <Button
            ref={ref}
            as="button"
            type="button"
            px={4}
            h="full"
            bg="white"
            borderRight="1px"
            borderColor="gray.200"
            color="gray.500"
            borderRadius="0"
            _focus={{outline: 'none', boxShadow: 'ring2'}}
            display={{md: 'none'}}
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
                    d="M4 6h16M4 12h16M4 18h7"
                />
            </Icon>
        </Button>
    );
});

export default HeaderOffCanvasMenuButton;
