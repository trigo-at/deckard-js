import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const TableHeaderCell: FC<Props> = ({children, ...props}: Props) => {
    return (
        <th
            className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
            {...props}>
            {children}
        </th>
    );
};

export default TableHeaderCell;