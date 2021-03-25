/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {FC, useRef, useCallback} from 'react';
import {Form, Field} from 'react-final-form';
import {
    VisuallyHidden,
    InputGroup,
    InputLeftElement,
    Input,
    Box,
} from '@chakra-ui/react';
import SearchIcon from '../icons/search-icon';
import useEventListener from '../use-event-listener';

export type SearchBoxProps = {
    onSearch?: (searchTerm) => void;
};

export const SearchBox: FC<SearchBoxProps> = ({onSearch}) => {
    const searchInput = useRef<HTMLInputElement>(null);

    const handleGlobalKeyDown = useCallback((e) => {
        if (e.key === 'F' && e.ctrlKey && e.shiftKey) {
            if (searchInput && searchInput.current) {
                searchInput.current.focus();
                searchInput.current.select();
            }
        }
    }, []);

    const onSubmit = (values) => {
        if (onSearch) {
            onSearch(values.searchTerm);
            if (searchInput.current) {
                searchInput.current.focus();
            }
        }
    };

    useEventListener('keydown', handleGlobalKeyDown);
    return (
        <Form
            initialValues={{searchTerm: ''}}
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <Box as="form" onSubmit={handleSubmit}>
                    <Field name="searchTerm">
                        {({input}) => (
                            <>
                                <VisuallyHidden
                                    as="label"
                                    htmlFor="search_field"
                                    className="sr-only">
                                    Suchen
                                </VisuallyHidden>
                                <InputGroup>
                                    <InputLeftElement>
                                        <SearchIcon />
                                    </InputLeftElement>
                                    <Input
                                        bg="white"
                                        {...input}
                                        display="block"
                                        placeholder="Suchen"
                                        ref={searchInput}
                                        id="search_field"
                                        type="search"
                                    />
                                </InputGroup>
                            </>
                        )}
                    </Field>
                </Box>
            )}
        />
    );
};

export default SearchBox;
