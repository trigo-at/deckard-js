import React, {FC} from 'react';
import {func, array} from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Text, Checkbox, Stack} from '@chakra-ui/core';
import Link from '../components/link';
import Table from '../table/table';
import TableRow from '../table/table-row';
import TableHeader from '../table/table-header';
import TableCell from '../table/table-cell';
import CellContent from '../table/cell-content';
import SecondaryCellContent from '../table/secondary-cell-content';
import ClaimState from './claim-state';

const ClaimTable: FC<any> = ({claims, onSelect, selected}): any => {
    return (
        <Table>
            <thead>
                <TableRow>
                    {onSelect && (
                        <TableHeader>
                            <FormattedMessage id="common.selection" />
                        </TableHeader>
                    )}
                    <TableHeader>
                        <FormattedMessage id="field.claimType" />
                    </TableHeader>
                    <TableHeader>
                        <FormattedMessage id="common.claim-data" />
                    </TableHeader>
                    <TableHeader>
                        <FormattedMessage id="common.device" />
                    </TableHeader>

                    <TableHeader>
                        <FormattedMessage id="common.customer" />
                    </TableHeader>
                    <TableHeader>
                        <FormattedMessage id="field.damageDate" />
                    </TableHeader>
                    <TableHeader>
                        <FormattedMessage id="field.fairValue" />
                    </TableHeader>
                    <TableHeader>
                        <FormattedMessage id="field.replacementValue" />
                    </TableHeader>
                    <TableHeader>
                        <Text fontSize="xs">
                            <FormattedMessage id="field.internalCreditNoteNumber" />
                        </Text>
                    </TableHeader>
                    <TableHeader>
                        <FormattedMessage id="field.resellerName" />
                    </TableHeader>
                    <TableHeader>
                        <FormattedMessage id="common.action" />
                    </TableHeader>
                </TableRow>
            </thead>
            <tbody>
                {claims.map((claim) => (
                    <TableRow key={claim.id}>
                        {onSelect && (
                            <TableCell>
                                <Checkbox
                                    isChecked={selected.includes(claim.id)}
                                    onChange={() => onSelect(claim.id)}
                                />
                            </TableCell>
                        )}
                        <TableCell>
                            <CellContent>
                                <FormattedMessage
                                    id={`claimType.${claim.claimType}`}
                                />
                            </CellContent>
                        </TableCell>
                        <TableCell>
                            <CellContent>{claim.claimNumber}</CellContent>
                            <ClaimState state={claim.state} />
                        </TableCell>
                        <TableCell>
                            <CellContent>
                                {`${claim.deviceManufacturer || ''} ${
                                    claim.deviceModel || ''
                                }`}
                            </CellContent>
                            <SecondaryCellContent>
                                <FormattedMessage
                                    id={`deviceCategory.${claim.deviceCategory}`}
                                />
                            </SecondaryCellContent>
                        </TableCell>
                        <TableCell>
                            <CellContent>{claim.customerName}</CellContent>
                            <SecondaryCellContent>
                                <FormattedMessage
                                    id={`customerType.${claim.customerType}`}
                                />
                            </SecondaryCellContent>
                            <SecondaryCellContent>
                                <FormattedMessage
                                    id={`inputTaxDeduction.${claim.customerHasInputTaxDeduction}`}
                                />
                            </SecondaryCellContent>
                        </TableCell>
                        <TableCell>
                            <CellContent>{claim.damageDate}</CellContent>
                        </TableCell>
                        <TableCell>
                            <CellContent>{claim.fairValue}</CellContent>
                        </TableCell>
                        <TableCell>
                            <CellContent>{claim.replacementValue}</CellContent>
                        </TableCell>
                        <TableCell>
                            <SecondaryCellContent>
                                {claim.internalCreditNoteNumber || '-'}
                            </SecondaryCellContent>
                        </TableCell>
                        <TableCell>
                            <CellContent>{claim.resellerName}</CellContent>
                            <SecondaryCellContent>
                                {claim.resellerNumber}
                            </SecondaryCellContent>
                        </TableCell>
                        <TableCell>
                            <Stack spacing={2}>
                                <Link renderAsButton to="./">
                                    <FormattedMessage id="common.open.claim" />
                                </Link>
                                <Link renderAsButton to="./">
                                    <FormattedMessage id="common.open.customer" />
                                </Link>
                                <Link renderAsButton to="./">
                                    <FormattedMessage id="common.open.device" />
                                </Link>
                            </Stack>
                        </TableCell>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
};

ClaimTable.propTypes = {
    claims: array,
    onSelect: func,
    selected: array,
};

ClaimTable.defaultProps = {
    claims: [],
    onSelect: undefined,
    selected: [],
};

export default ClaimTable;
