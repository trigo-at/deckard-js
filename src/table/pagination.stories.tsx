/* eslint-disable import/no-unresolved */
import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Box} from '@chakra-ui/react';
import {Pagination, PaginationProps} from './pagination';
import ProviderDecorator from '../provider-decorator';

export default {
    title: 'Components/Pagination',
    component: Pagination,
    decorators: [ProviderDecorator],
} as Meta;

const Template: Story<PaginationProps> = (args) => (
    <Box p={6}>
        <Pagination
            {...args}
            pageIndex={2}
            pageCount={12}
            canPreviousPage
            canNextPage
            gotoPage={(page) => console.log(page)}
            previousPage={() => console.log('previous')}
            nextPage={() => console.log('next')}
        />
    </Box>
);

export const BaseStory = Template.bind({});
BaseStory.storyName = 'Base';
