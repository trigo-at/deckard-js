import React, {ReactNode, FC} from 'react';

type Props = {
    className?: string;
    children: ReactNode;
};

const TableCell: FC<Props> = ({className, children}: Props) => {
    return (
        <td className={`px-2 py-4 border-b border-gray-200 ${className}`}>
            <div className="flex flex-col justify-center items-start">
                {children}
            </div>
        </td>
    );
};

TableCell.defaultProps = {
    className: '',
};

export default TableCell;
