import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const TableHeader: FC<Props> = ({children, ...props}: Props) => {
    return (
        <th
            className="p-2 border-b-2 border-t-2 border-gray-100 bg-gray-100"
            {...props}>
            <div className="flex flex-col justify-center items-start">
                {children}
            </div>
        </th>
    );
};

export default TableHeader;
