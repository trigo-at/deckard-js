import React from 'react';
import {string, func, array, bool} from 'prop-types';
import {useField} from 'react-final-form';
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverCloseButton,
    PopoverBody,
    List,
    ListItem,
    Divider,
} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import FieldError from './field-error';
import Optional from './optional';

const InlineSearchField = ({
    name,
    gridArea,
    fieldName,
    helperText,
    toggleText,
    isRequired,
    filterValue,
    onFilterChange,
    items,
    itemRenderer,
    getItemId,
    onItemSelect,
    ...props
}) => {
    const {input, meta} = useField(name);
    const isInvalid =
        (!!meta.error && meta.touched) ||
        (!!meta.submitError && !meta.dirtySinceLastSubmit && !meta.submitting);
    return (
        <FormControl gridArea={gridArea || name} isInvalid={isInvalid}>
            <FormLabel htmlFor={name}>
                <FormattedMessage id={`field.${fieldName || name}`} />
            </FormLabel>
            <InputGroup>
                <Input {...input} {...props} pr="8rem" />
                <InputRightElement width="8em">
                    <Popover usePortal placement="bottom-end">
                        <PopoverTrigger>
                            <Button h="1.75rem" size="sm">
                                {toggleText || (
                                    <FormattedMessage
                                        id={`toggle.${fieldName || name}`}
                                    />
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent zIndex={4}>
                            <PopoverCloseButton />
                            <PopoverBody>
                                <Input
                                    id="filter"
                                    value={filterValue}
                                    onChange={onFilterChange}
                                />
                                <Divider my={4} />
                                <List spacing={4}>
                                    {items &&
                                        items.map((item) => (
                                            <ListItem
                                                key={getItemId(item)}
                                                onClick={() =>
                                                    onItemSelect(item)
                                                }>
                                                {itemRenderer(item)}
                                            </ListItem>
                                        ))}
                                </List>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </InputRightElement>
            </InputGroup>
            {!isRequired && <Optional />}
            {helperText && (
                <FormHelperText>
                    <FormattedMessage id={helperText} />
                </FormHelperText>
            )}
            <FieldError isInvalid={isInvalid} meta={meta} />
        </FormControl>
    );
};

InlineSearchField.propTypes = {
    name: string.isRequired,
    gridArea: string,
    fieldName: string,
    filterValue: string,
    onFilterChange: func,
    isRequired: bool,
    helperText: string,
    toggleText: string,
    items: array,
    itemRenderer: func,
    getItemId: func,
    onItemSelect: func,
};

InlineSearchField.defaultProps = {
    helperText: undefined,
    toggleText: undefined,
    gridArea: undefined,
    fieldName: undefined,
    isRequired: false,
    filterValue: '',
    onFilterChange: undefined,
    items: [],
    itemRenderer: (val) => val,
    getItemId: (val) => val.id,
    onItemSelect: undefined,
};

export default InlineSearchField;
