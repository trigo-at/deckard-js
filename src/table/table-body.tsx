import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const TableBody: FC<Props> = ({children, ...props}: Props) => {
    return (
        <tbody className="bg-white divide-y divide-gray-200" {...props}>
            {children}
        </tbody>
    );
};

export default TableBody;
