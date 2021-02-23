import React, {FC, ReactNode, RefObject} from 'react';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

export type OffCanvasMenuProps = {
    children: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    finalFocusRef?: RefObject<HTMLButtonElement>;
};

export const OffCanvasMenu: FC<OffCanvasMenuProps> = ({
    children = undefined,
    isOpen = false,
    onClose,
    finalFocusRef = undefined,
}) => {
    return (
        <Drawer
            finalFocusRef={finalFocusRef}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    {children}
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
};

export default OffCanvasMenu;
