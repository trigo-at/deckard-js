/* eslint-disable no-console */
import React, {useState, useEffect} from 'react';
import {Form} from 'react-final-form';
import Chance from 'chance';
import {Button, Box} from '@chakra-ui/react';
import InlineSearchField from './inline-search-field';
import ProviderDecorator from '../provider-decorator';

const chance = new Chance();

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'validation.required';
    }
    return errors;
};

const onSubmit = (values) => console.log(values);

const names = [...new Array(100)].map(() => {
    return chance.name();
});

export const InlineSearchStory = () => {
    const [filterValue, setFilterValue] = useState('');
    const [items, setItems] = useState(names);

    useEffect(() => {
        if (filterValue) {
            setItems(items.filter((i) => i.startsWith(filterValue)));
        } else {
            setItems(names);
        }
    }, [filterValue]);

    return (
        <Form
            initialValues={{
                name: '',
            }}
            validate={validate}
            onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Box p={4}>
                        <InlineSearchField
                            name="name"
                            items={items}
                            filterValue={filterValue}
                            onFilterChange={(e) =>
                                setFilterValue(e.target.value)
                            }
                            onItemSelect={(item) => console.log(item)}
                        />
                        <Button mt={4} type="submit">
                            submit
                        </Button>
                    </Box>
                </form>
            )}
        </Form>
    );
};

InlineSearchStory.storyName = 'default';

export default {
    title: 'Experimental/InlineSearchStory',
    component: InlineSearchStory,
    decorators: [ProviderDecorator],
};
