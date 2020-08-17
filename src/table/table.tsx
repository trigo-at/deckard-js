import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const Table: FC<Props> = ({children, ...props}: Props) => {
    return (
        <table
            className="min-w-full shadow border-gray-200 overflow-hidden rounded-sm"
            {...props}>
            {children}
        </table>
    );
};

export default Table;
