import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const Table: FC<Props> = ({children, ...props}: Props) => {
    return (
        <div className="flex flex-col">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table
                        className="min-w-full shadow border-gray-200 overflow-hidden rounded-sm"
                        {...props}>
                        {children}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
