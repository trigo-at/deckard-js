import React, {ReactNode, ReactElement, useRef, useCallback} from 'react';
import {
    useDisclosure,
    Flex,
    IconButton,
    ButtonGroup,
    Grid,
    Box,
    Text,
} from '@chakra-ui/react';
import Aside from './aside';
import OffCanvasMenu from './off-canvas-menu';
import Header from './header';
import SearchBox from './search-box';
import MenuIcon from '../icons/menu-icon';

import useEventListener from '../use-event-listener';

export type DisplayVariant = 'default' | 'with-fixed-sidebar';

export type PageProps = {
    /**
     * Content Bereich der Anwendung
     */
    children: ReactNode;
    /**
     * Logo Komponente
     */
    logo?: ReactNode;
    /**
     * Secondary Content Bereich (Aside)
     */
    aside?: ReactNode;
    /**
     * Actions für den rechten Header Bereich
     */
    headerActions?: ReactNode;
    /**
     * Container für Sidebar (z.B. LightSidebar)
     */
    sidebar?: ReactElement<any>;
    /**
     * Container für fixed PageHeader
     */
    pageHeader?: ReactElement<any>;
    /**
     * Wenn eine Funktion übergeben wird, wird ein Header mit einer Suchbox
     * angezeigt die auf STRG + SHIFT + F als globalen Shortcut reagiert und
     * bei Eingabe die Funktion aufruft
     */
    onSearch?: (searchTerm) => void;
    /**
     * Container für Sidebar (z.B. LightSidebar)
     */
    displayVariant: DisplayVariant;
    /**
     * Name der Anwendung zur Anzeige im Header
     */
    appName?: ReactNode;
};

const templateColumnsFactory = (
    displayVariant: DisplayVariant,
    aside: boolean
) => {
    return `${
        displayVariant === 'with-fixed-sidebar' ? 'minmax(15rem, 20rem)' : ''
    } 1fr ${aside ? 'minmax(20rem, 25rem)' : ''}`.trim();
};

/**
 * Page Component als Container für Content und Sidebar. Kümmert sich auch um ein mobile Menu.
 */
export const Page = ({
    aside,
    children,
    sidebar,
    pageHeader,
    logo,
    onSearch,
    displayVariant = 'default',
    headerActions,
    appName,
}: PageProps) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = useRef(null);

    const handleGlobalKeyDown = useCallback(
        (e) => {
            if (displayVariant === 'default' && e.key === 'm' && e.ctrlKey) {
                if (isOpen) {
                    onClose();
                } else {
                    onOpen();
                }
            }
        },
        [displayVariant, isOpen, onOpen, onClose]
    );

    useEventListener('keydown', handleGlobalKeyDown);

    return (
        <Flex h="screen" overflow="hidden" flexDirection="column">
            {sidebar && (
                <OffCanvasMenu
                    finalFocusRef={btnRef}
                    isOpen={isOpen}
                    onClose={onClose}>
                    {sidebar}
                </OffCanvasMenu>
            )}

            <Header>
                <Flex alignItems="center">
                    {displayVariant === 'default' && sidebar && (
                        <IconButton
                            aria-label="open sidebar"
                            icon={<MenuIcon fontSize="xl" />}
                            ref={btnRef}
                            onClick={onOpen}
                        />
                    )}
                    {logo && (
                        <Box ml={displayVariant === 'default' ? 4 : 0}>
                            {logo}
                        </Box>
                    )}
                    {appName && (
                        <Text
                            ml={2}
                            fontSize="xl"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            textTransform="uppercase">
                            {appName}
                        </Text>
                    )}
                </Flex>
                <Flex alignItems="center" mt={{base: 2, md: 0}}>
                    {onSearch && <SearchBox onSearch={onSearch} />}
                    {headerActions && (
                        <ButtonGroup ml={onSearch ? 4 : 0}>
                            {headerActions}
                        </ButtonGroup>
                    )}
                </Flex>
            </Header>
            {pageHeader}
            <Grid
                h="full"
                overflow="auto"
                templateColumns={templateColumnsFactory(
                    displayVariant,
                    !!aside
                )}>
                {displayVariant === 'with-fixed-sidebar' &&
                    sidebar &&
                    React.cloneElement(sidebar, {
                        displayVariant: 'compact',
                    })}
                <Box as="main">{children}</Box>
                {aside && <Aside>{aside}</Aside>}
            </Grid>
        </Flex>
    );
};

export default Page;
