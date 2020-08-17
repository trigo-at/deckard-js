import React from 'react';
import Table from './table';
import TableHead from './table-head';
import TableHeaderCell from './table-header-cell';
import TableBody from './table-body';
import TableRow from './table-row';
import TableCell from './table-cell';
import CellContent from './cell-content';
import SecondaryCellContent from './secondary-cell-content';
import TableLink from './table-link';
import Badge from '../components/badge';
import ProviderDecorator from '../provider-decorator';

export const DefaultStory = () => (
    <div className="max-w-full">
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Title</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Role</TableHeaderCell>
                    <TableHeaderCell />
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow tripedType="even">
                    <TableCell twelfthPart={4}>
                        <CellContent>Jane Cooper</CellContent>
                        <SecondaryCellContent>
                            jane.cooper@example.com
                        </SecondaryCellContent>
                    </TableCell>
                    <TableCell twelfthPart={4}>
                        <CellContent>Regional Paradigm Technician</CellContent>
                        <SecondaryCellContent>
                            Optimization
                        </SecondaryCellContent>
                    </TableCell>
                    <TableCell twelfthPart={1}>
                        <Badge variant="green">Active</Badge>
                    </TableCell>
                    <TableCell twelfthPart={1}>
                        <CellContent>Admin</CellContent>
                    </TableCell>
                    <TableCell twelfthPart={2}>
                        <TableLink isExternal to="https://www.trigo.dev">
                            Edit
                        </TableLink>
                    </TableCell>
                </TableRow>
                <TableRow stripedType="odd">
                    <TableCell>
                        <CellContent>Jane Cooper</CellContent>
                        <SecondaryCellContent>
                            jane.cooper@example.com
                        </SecondaryCellContent>
                    </TableCell>
                    <TableCell>
                        <CellContent>Regional Paradigm Technician</CellContent>
                        <SecondaryCellContent>
                            Optimization
                        </SecondaryCellContent>
                    </TableCell>
                    <TableCell>
                        <Badge variant="green">Active</Badge>
                    </TableCell>
                    <TableCell>
                        <CellContent>Admin</CellContent>
                    </TableCell>
                    <TableCell>
                        <TableLink isExternal to="https://www.trigo.dev">
                            Edit
                        </TableLink>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

DefaultStory.storyName = 'default';

export default {
    title: 'Components/Table',
    component: Table,
    decorators: [ProviderDecorator],
};
