import React, {FC} from 'react';
import {ButtonGroup, IconButton, HStack, Text} from '@chakra-ui/react';
import ChevronDoubleLeftIcon from '../icons/chevron-double-left-icon';
import ChevronLeftIcon from '../icons/chevron-left-icon';
import ChevronDoubleRightIcon from '../icons/chevron-double-right-icon';
import ChevronRightIcon from '../icons/chevron-right-icon';

export type PaginationProps = {
    pageIndex: number;
    pageCount: number;
    canPreviousPage?: boolean;
    canNextPage?: boolean;
    gotoPage: (page) => void;
    previousPage: () => void;
    nextPage: () => void;
};

export const Pagination: FC<PaginationProps> = ({
    pageIndex,
    pageCount,
    canPreviousPage,
    canNextPage,
    gotoPage,
    previousPage,
    nextPage,
}) => {
    return (
        <HStack spacing={4}>
            <ButtonGroup>
                <IconButton
                    aria-label="go to first page"
                    onClick={() => gotoPage(0)}
                    isDisabled={!canPreviousPage}
                    icon={<ChevronDoubleLeftIcon />}
                />
                <IconButton
                    aria-label="go to previous page"
                    onClick={() => previousPage()}
                    isDisabled={!canPreviousPage}
                    icon={<ChevronLeftIcon />}
                />
                <IconButton
                    aria-label="go to next page"
                    onClick={() => nextPage()}
                    isDisabled={!canNextPage}
                    icon={<ChevronRightIcon />}
                />
                <IconButton
                    aria-label="go to last page"
                    onClick={() => gotoPage(pageCount - 1)}
                    isDisabled={!canNextPage}
                    icon={<ChevronDoubleRightIcon />}
                />
            </ButtonGroup>
            <Text>
                Seite: {pageIndex + 1} von {pageCount}
            </Text>
        </HStack>
    );
};

export default Pagination;
