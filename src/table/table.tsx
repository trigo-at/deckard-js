import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const Table: FC<Props> = ({children}: Props) => {
    return (
        <table className="min-w-full shadow border-gray-200 overflow-hidden rounded-sm">
            {children}
        </table>
    );
};

export default Table;
