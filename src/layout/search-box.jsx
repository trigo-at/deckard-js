/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useRef, useCallback} from 'react';
import {Form, Field} from 'react-final-form';
import {bool, func} from 'prop-types';
import useEventListener from './use-event-listener';

const SearchBox = ({onSearch, isLoading}) => {
    const searchInput = useRef();

    const handleGlobalKeyDown = useCallback((e) => {
        if (e.key === 'F' && e.ctrlKey && e.shiftKey) {
            searchInput.current.focus();
            searchInput.current.select();
        }
    }, []);

    const onSubmit = (values) => {
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
                <form onSubmit={handleSubmit} className="w-full flex md:ml-0">
                    <Field name="searchTerm">
                        {({input}) => (
                            <>
                                <label
                                    htmlFor="search_field"
                                    className="sr-only">
                                    Suchen
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        <svg
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        {...input}
                                        placeholder="STRG + SHIFT + F drücken, um zu suchen"
                                        ref={searchInput}
                                        id="search_field"
                                        className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                                        type="search"
                                    />
                                </div>
                            </>
                        )}
                    </Field>
                </form>
            )}
        />
    );
};

SearchBox.propTypes = {
    isLoading: bool,
    onSearch: func.isRequired,
};

SearchBox.defaultProps = {
    isLoading: false,
};

export default SearchBox;
