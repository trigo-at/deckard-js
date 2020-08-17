import React, {ReactNode, FC} from 'react';

type Props = {
    className?: string;
    children: ReactNode;
    twelfthPart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

const getWidthClass = (twelfthPart) => {
    switch (twelfthPart) {
        case 1:
            return 'w-1/12';
        case 2:
            return 'w-2/12';
        case 3:
            return 'w-3/12';
        case 4:
            return 'w-4/12';
        case 5:
            return 'w-5/12';
        case 6:
            return 'w-6/12';
        case 7:
            return 'w-7/12';
        case 8:
            return 'w-8/12';
        case 9:
            return 'w-9/12';
        case 10:
            return 'w-10/12';
        case 11:
            return 'w-11/12';
        case 12:
            return 'w-full';
        default:
            return '';
    }
};

const TableCell: FC<Props> = ({
    className,
    children,
    twelfthPart,
    ...props
}: Props) => {
    return (
        <td
            className={`px-6 py-4 whitespace-no-wrap border-b border-gray-200 ${getWidthClass(
                twelfthPart
            )} ${className}`}
            {...props}>
            {children}
        </td>
    );
};

TableCell.defaultProps = {
    className: '',
};

export default TableCell;
