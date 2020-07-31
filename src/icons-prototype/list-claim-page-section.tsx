import React, {useRef, FC} from 'react';
import {func, array, number} from 'prop-types';
import {
    Flex,
    Stack,
    ButtonGroup,
    Button,
    Menu,
    MenuList,
    MenuItem,
    useDisclosure,
} from '@chakra-ui/core';
import {FormattedMessage} from 'react-intl';
import PageSection from '../patterns/page-section';
import ViewSection from '../patterns/view-section';
import Link from '../components/link';
import Pagination from './pagination';
import ClaimTable from './claim-table';
import BulkUpdateDrawer from './bulk-update-drawer';

const ListClaimPageSection: FC<any> = ({
    claims,
    totalCount,
    offset,
    selected,
    onSelect,
    onSelectAll,
    onSelectNone,
    claimStates,
    reports,
    onUpdateState,
    onBulkUpdate,
    onOffsetChange,
    onRequestReport,
}): any => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = useRef();
    return (
        <PageSection title="common.search">
            <ViewSection
                title="common.claim"
                actions={
                    <Flex justifyContent="space-between">
                        <Stack
                            isInline
                            spacing={2}
                            align="center"
                            shouldWrapChildren>
                            <ButtonGroup>
                                <Button
                                    onClick={onSelectAll}
                                    isDisabled={claims.length === 0}>
                                    <FormattedMessage id="common.select.all" />
                                </Button>
                                <Button
                                    onClick={onSelectNone}
                                    isDisabled={selected.length === 0}>
                                    <FormattedMessage id="common.select.none" />
                                </Button>
                            </ButtonGroup>
                            <Pagination
                                totalCount={totalCount}
                                offset={offset}
                                onOffsetChange={onOffsetChange}
                            />
                        </Stack>
                        <Stack
                            isInline
                            spacing={2}
                            align="center"
                            shouldWrapChildren>
                            {onUpdateState && (
                                <Menu>
                                    <Button
                                        as={Button}
                                        rightIcon="chevron-down">
                                        <FormattedMessage id="common.set-state" />
                                    </Button>
                                    <MenuList>
                                        {claimStates.map((claimState) => (
                                            <MenuItem
                                                key={claimState}
                                                onClick={() =>
                                                    onUpdateState(claimState)
                                                }>
                                                <FormattedMessage
                                                    id={`claimState.${claimState}`}
                                                />
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                            )}
                            {onRequestReport && (
                                <Menu>
                                    <Button
                                        onClick={onOpen}
                                        as={Button}
                                        rightIcon="chevron-down">
                                        <FormattedMessage id="report.request" />
                                    </Button>
                                    <MenuList>
                                        {reports.map((report) => (
                                            <MenuItem
                                                key={report.id}
                                                onClick={() =>
                                                    onRequestReport(report.id)
                                                }>
                                                {report.name}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                            )}
                            <Link to="./" renderAsButton>
                                <FormattedMessage id="common.bulk-update" />
                            </Link>
                        </Stack>
                    </Flex>
                }>
                <ClaimTable
                    claims={claims}
                    onSelect={onSelect}
                    selected={selected}
                />
            </ViewSection>
            <BulkUpdateDrawer
                updateCount={selected.length > 0 ? selected.length : totalCount}
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
                onBulkUpdate={onBulkUpdate}
            />
        </PageSection>
    );
};

ListClaimPageSection.propTypes = {
    selected: array,
    onSelect: func,
    onSelectAll: func,
    onSelectNone: func,
    claims: array,
    claimStates: array,
    onUpdateState: func,
    onBulkUpdate: func,
    totalCount: number,
    offset: number,
    onOffsetChange: func,
    reports: array,
    onRequestReport: func,
};

ListClaimPageSection.defaultProps = {
    selected: [],
    onSelect: undefined,
    onSelectAll: undefined,
    onSelectNone: undefined,
    claims: [],
    claimStates: [],
    onUpdateState: undefined,
    onBulkUpdate: undefined,
    totalCount: 0,
    offset: 0,
    onOffsetChange: undefined,
    reports: [],
    onRequestReport: undefined,
};

export default ListClaimPageSection;
