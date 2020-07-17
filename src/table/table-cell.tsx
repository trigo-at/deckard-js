import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const TableCell: FC<Props> = ({children}: Props) => {
    return (
        <td className="px-2 py-4 border-b border-gray-200">
            <div className="flex flex-col justify-center items-start">
                {children}
            </div>
        </td>
    );
};

export default TableCell;
