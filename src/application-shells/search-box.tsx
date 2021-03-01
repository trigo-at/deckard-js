/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {FC, useRef, useCallback} from 'react';
import {Form, Field} from 'react-final-form';
import {
    Flex,
    VisuallyHidden,
    InputGroup,
    InputLeftElement,
    Input,
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

    // Add event listener using our hook
    useEventListener('keydown', handleGlobalKeyDown);
    return (
        <Form
            initialValues={{searchTerm: ''}}
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <Flex as="form" onSubmit={handleSubmit} w="full">
                    <Field name="searchTerm">
                        {({input}) => (
                            <>
                                <VisuallyHidden
                                    as="label"
                                    htmlFor="search_field"
                                    className="sr-only">
                                    Suchen
                                </VisuallyHidden>
                                <InputGroup color="gray.400" w="full">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        h="full">
                                        <SearchIcon color="gray.300" />
                                    </InputLeftElement>
                                    <Input
                                        {...input}
                                        h="full"
                                        placeholder="Suchen"
                                        ref={searchInput}
                                        id="search_field"
                                        type="search"
                                        color="gray.900"
                                        _placeholder={{color: 'gray.500'}}
                                        fontSize={{sm: 'sm'}}
                                        border="none"
                                        _focus={{
                                            border: 'none',
                                            outline: 'none',
                                            _placeholder: {color: 'gray.400'},
                                        }}
                                    />
                                </InputGroup>
                            </>
                        )}
                    </Field>
                </Flex>
            )}
        />
    );
};

export default SearchBox;
