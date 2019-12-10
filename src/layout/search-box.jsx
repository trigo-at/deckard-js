import React, {useRef, useCallback, useState} from 'react';
import {string, bool, func, array} from 'prop-types';
import {
    InputGroup,
    InputLeftElement,
    InputRightElement,
    IconButton,
    Icon,
    Input,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    List,
    ListItem,
} from '@chakra-ui/core';
import useEventListener from './use-event-listener';
import useInterval from '../use-interval';

const SearchBox = ({
    searchResult,
    searchResultRenderer,
    filter,
    onFilterChange,
    onReset,
    loading,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [clickedOutside, setClickedOutside] = useState(false);
    const searchInput = useRef();

    useInterval(
        () => {
            setIsOpen(false);
            setClickedOutside(false);
        },
        clickedOutside ? 50 : null
    );

    function handleClickOutside(event) {
        if (
            searchInput.current &&
            !searchInput.current.contains(event.target)
        ) {
            setClickedOutside(true);
        }
    }

    const handleKeydown = useCallback(e => {
        if (e.key === 'F' && e.ctrlKey && e.shiftKey) {
            searchInput.current.focus();
            searchInput.current.select();
        }
    }, []);

    // Add event listener using our hook
    useEventListener('keydown', handleKeydown);
    useEventListener('mousedown', handleClickOutside);
    return (
        <InputGroup>
            <InputLeftElement>
                <Popover
                    initialFocusRef={searchInput}
                    isOpen={searchResult.length > 0 && isOpen}
                    returnFocusOnClose={false}
                    closeOnBlur={false}
                    placement="bottom-start"
                    usePortal>
                    <PopoverTrigger>
                        <Icon name="search" color="gray.300" />
                    </PopoverTrigger>
                    <PopoverContent zIndex={4} maxWidth="2xl">
                        <PopoverArrow />
                        <PopoverBody>
                            {searchResult && (
                                <List spacing={4}>
                                    {searchResult.map((item, idx) => (
                                        <ListItem key={idx}>
                                            {searchResultRenderer(item)}
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </InputLeftElement>
            <Input
                ref={searchInput}
                name="search-query"
                value={filter}
                onChange={onFilterChange}
                onFocus={() => setIsOpen(true)}
                placeholder="STRG + SHIFT + F drücken, um zu suchen"
            />
            {filter ||
                (loading && (
                    <InputRightElement>
                        <IconButton
                            isLoading={loading}
                            color="gray.900"
                            variant="ghost"
                            aria-label="Suche zurücksetzen"
                            icon="close"
                            size="sm"
                            name="reset-search-query"
                            type="button"
                            onClick={onReset}
                        />
                    </InputRightElement>
                ))}
        </InputGroup>
    );
};

SearchBox.propTypes = {
    searchResult: array,
    searchResultRenderer: func.isRequired,
    loading: bool,
    filter: string,

    onFilterChange: func,
    onReset: func,
};

SearchBox.defaultProps = {
    searchResult: [],
    loading: false,
    filter: '',
    onFilterChange: undefined,
    onReset: undefined,
};

export default SearchBox;
