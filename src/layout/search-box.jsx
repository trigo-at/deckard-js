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

const SearchBox = ({
    searchResult,
    searchResultRenderer,
    filter,
    onFilterChange,
    onReset,
    loading,
}) => {
    const [hasFocus, setHasFocus] = useState(false);
    const searchInput = useRef();

    const handleKeydown = useCallback(e => {
        if (e.key === 'F' && e.ctrlKey && e.shiftKey) {
            searchInput.current.focus();
            searchInput.current.select();
        }
    }, []);

    // Add event listener using our hook
    useEventListener('keydown', handleKeydown);
    return (
        <InputGroup>
            <InputLeftElement>
                <Popover
                    initialFocusRef={searchInput}
                    isOpen={searchResult.length > 0 && hasFocus}
                    returnFocusOnClose={false}
                    closeOnBlur={false}
                    placement="bottom-start"
                    usePortal>
                    <PopoverTrigger>
                        <Icon name="search" color="gray.300" />
                    </PopoverTrigger>
                    <PopoverContent zIndex={4}>
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
                onFocus={() => setHasFocus(true)}
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
