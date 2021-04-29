import React, {useState} from 'react';
import {Input, InputGroup, InputLeftAddon} from '@chakra-ui/react';
import {useAsyncDebounce} from 'react-table';
import FilterIcon from '../icons/filter-icon';

export type GlobalFilterInputProps = {
    globalFilter?: string;
    setGlobalFilter: (value?: string) => void;
    placeholder?: string;
};

export const GlobalFilterInput = ({
    globalFilter,
    setGlobalFilter,
    placeholder = '',
}: GlobalFilterInputProps) => {
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((filter) => {
        setGlobalFilter(filter || undefined);
    }, 200);

    return (
        <InputGroup>
            <InputLeftAddon>
                <FilterIcon />
            </InputLeftAddon>
            <Input
                bg="white"
                maxW={80}
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={placeholder}
            />
        </InputGroup>
    );
};

export default GlobalFilterInput;
