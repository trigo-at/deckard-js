import React, {useRef, useCallback} from 'react';
import {Form, Field} from 'react-final-form';
import {bool, func} from 'prop-types';
import {
    InputGroup,
    InputLeftElement,
    InputRightElement,
    ButtonGroup,
    Button,
    IconButton,
    Icon,
    Input,
} from '@chakra-ui/core';
import useEventListener from './use-event-listener';

const SearchBox = ({onSearch, loading}) => {
    const searchInput = useRef();

    const handleGlobalKeyDown = useCallback(e => {
        if (e.key === 'F' && e.ctrlKey && e.shiftKey) {
            searchInput.current.focus();
            searchInput.current.select();
        }
    }, []);

    const onSubmit = values => {
        if (onSearch) {
            onSearch(values.searchTerm);
            searchInput.current.focus();
        }
    };

    // Add event listener using our hook
    useEventListener('keydown', handleGlobalKeyDown);
    return (
        <Form
            initialValues={{searchTerm: ''}}
            onSubmit={onSubmit}
            render={({form, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="searchTerm">
                        {({input}) => (
                            <InputGroup>
                                <InputLeftElement>
                                    <Icon name="search" color="gray.300" />
                                </InputLeftElement>
                                <Input
                                    ref={searchInput}
                                    type="text"
                                    {...input}
                                    placeholder="STRG + SHIFT + F drücken, um zu suchen"
                                />

                                <InputRightElement width="auto" pr={1}>
                                    <ButtonGroup>
                                        {input.value && (
                                            <IconButton
                                                isLoading={loading}
                                                color="gray.900"
                                                variant="ghost"
                                                aria-label="Suche zurücksetzen"
                                                icon="close"
                                                size="sm"
                                                name="reset-search-query"
                                                onClick={() => {
                                                    form.change(
                                                        'searchTerm',
                                                        ''
                                                    );
                                                    searchInput.current.focus();
                                                }}
                                                type="button"
                                            />
                                        )}
                                        <Button
                                            isLoading={loading}
                                            color="gray.900"
                                            size="sm"
                                            name="execute-search-query"
                                            type="submit">
                                            Suchen
                                        </Button>
                                    </ButtonGroup>
                                </InputRightElement>
                            </InputGroup>
                        )}
                    </Field>
                </form>
            )}
        />
    );
};

SearchBox.propTypes = {
    loading: bool,
    onSearch: func.isRequired,
};

SearchBox.defaultProps = {
    loading: false,
};

export default SearchBox;
