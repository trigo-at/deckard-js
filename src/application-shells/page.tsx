import React, {FC, ReactNode, useRef} from 'react';
import {useDisclosure, Flex} from '@chakra-ui/react';
import PageContainer from './page-container';
import Main from './main';
import OffCanvasMenu from './off-canvas-menu';
import OffCanvasMenuButton from './off-canvas-menu-button';
import HeaderOffCanvasMenuButton from './header-off-canvas-menu-button';
import StaticSidebarForDesktop from './static-sidebar-for-desktop';
import Header from './header';
import SearchBox from './search-box';

export type PageProps = {
    /**
     * Content Bereich der Anwendung
     */
    children: ReactNode;
    /**
     * Container für Sidebar (z.B. LightSidebar)
     */
    sidebar?: ReactNode;
    /**
     * Wenn eine Funktion übergeben wird, wird ein Header mit einer Suchbox
     * angezeigt die auf STRG + SHIFT + F als globalen Shortcut reagiert und
     * bei Eingabe die Funktion aufruft
     */
    onSearch?: (searchTerm) => void;
};

/**
 * Page Component als Container für Content und Sidebar. Kümmert sich auch um ein mobile Menu.
 */
export const Page: FC<PageProps> = ({
    children = undefined,
    sidebar = undefined,
    onSearch = undefined,
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
            <Flex flexDirection="column" w="0" flex="1" overflow="hidden">
                {sidebar && !onSearch && (
                    <OffCanvasMenuButton ref={btnRef} onClick={onOpen} />
                )}
                {onSearch && (
                    <Header>
                        {sidebar && (
                            <HeaderOffCanvasMenuButton
                                ref={btnRef}
                                onClick={onOpen}
                            />
                        )}
                        <Flex flex="1" px={4} justifyContent="space-between">
                            <Flex flex="1">
                                <SearchBox onSearch={onSearch} />
                            </Flex>
                        </Flex>
                    </Header>
                )}
                <Main>{children}</Main>
            </Flex>
        </PageContainer>
    );
};

export default Page;
