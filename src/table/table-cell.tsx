import React, {ReactNode, FC} from 'react';

type Props = {
    className?: string;
    children: ReactNode;
};

const TableCell: FC<Props> = ({className, children, ...props}: Props) => {
    return (
        <td
            className={`px-6 py-4 whitespace-no-wrap border-b border-gray-200 ${className}`}
            {...props}>
            {children}
        </td>
    );
};

TableCell.defaultProps = {
    className: '',
};

export default TableCell;
