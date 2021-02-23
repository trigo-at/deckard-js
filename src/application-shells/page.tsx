import React, {FC, ReactNode, useRef} from 'react';
import {useDisclosure} from '@chakra-ui/react';
import {PageContainer} from './page-container';
import {ContentContainer} from './content-container';
import {Main} from './main';
import OffCanvasMenu from './off-canvas-menu';
import OffCanvasMenuButton from './off-canvas-menu-button';
import {StaticSidebarForDesktop} from './static-sidebar-for-desktop';

export type PageProps = {
    /**
     * Content Bereich der Anwendung
     */
    children: ReactNode;
    /**
     * Container für Sidebar (z.B. LightSidebar)
     */
    sidebar?: ReactNode;
};

/**
 * Page Component als Container für Content und Sidebar. Kümmert sich auch um ein mobile Menu.
 */
export const Page: FC<PageProps> = ({
    children = undefined,
    sidebar = undefined,
}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = useRef(null);
    return (
        <PageContainer>
            {sidebar && (
                <>
                    <OffCanvasMenu
                        finalFocusRef={btnRef}
                        isOpen={isOpen}
                        onClose={onClose}>
                        {sidebar}
                    </OffCanvasMenu>
                    <StaticSidebarForDesktop>{sidebar}</StaticSidebarForDesktop>
                </>
            )}
            <ContentContainer>
                <OffCanvasMenuButton ref={btnRef} onClick={onOpen} />
                <Main>{children}</Main>
            </ContentContainer>
        </PageContainer>
    );
};

export default Page;
