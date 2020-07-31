import React from 'react';
import {number, func} from 'prop-types';
import {Flex, ButtonGroup, Button, Text} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';

const Pagination = ({totalCount, limit, offset, onOffsetChange}) => {
    const currentPage = Math.floor(offset / limit);
    const totalPages = Math.ceil(totalCount / limit);

    return (
        <Flex alignItems="center">
            <ButtonGroup>
                <Button
                    leftIcon="arrow-left"
                    isDisabled={!onOffsetChange || currentPage === 0}
                    onClick={() => onOffsetChange(0)}>
                    <FormattedMessage id="common.first-page" />
                </Button>
                <Button
                    leftIcon="chevron-left"
                    type="button"
                    isDisabled={!onOffsetChange || currentPage === 0}
                    onClick={() => onOffsetChange((currentPage - 1) * limit)}>
                    <FormattedMessage id="common.previous-page" />
                </Button>
                <Button
                    rightIcon="chevron-right"
                    type="button"
                    isDisabled={
                        !onOffsetChange || currentPage + 1 === totalPages
                    }
                    onClick={() => onOffsetChange((currentPage + 1) * limit)}>
                    <FormattedMessage id="common.next-page" />
                </Button>
                <Button
                    rightIcon="arrow-right"
                    type="button"
                    isDisabled={
                        !onOffsetChange || currentPage + 1 === totalPages
                    }
                    onClick={() => onOffsetChange((totalPages - 1) * limit)}>
                    <FormattedMessage id="common.last-page" />
                </Button>
            </ButtonGroup>
            <Text px={2}>
                <FormattedMessage
                    id="common.page"
                    values={{
                        currentPage: totalPages === 0 ? 0 : currentPage + 1,
                        totalPages,
                    }}
                />
            </Text>
            <Text>
                <FormattedMessage
                    id="common.total-count"
                    values={{totalCount}}
                />
            </Text>
        </Flex>
    );
};

Pagination.propTypes = {
    totalCount: number,
    limit: number,
    offset: number,
    onOffsetChange: func,
};

Pagination.defaultProps = {
    totalCount: 0,
    limit: 20,
    offset: 0,
    onOffsetChange: undefined,
};

export default Pagination;
