/* eslint-disable no-use-before-define */
import React, {ReactNode, FC} from 'react';
import {Flex} from '@chakra-ui/core';

type Props = {
    children: ReactNode;
    fixed: boolean;
};

const Table: FC<Props> = ({children, fixed, ...props}: Props) => {
    return (
        <Flex flexDirection="column">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table
                        className={`min-w-full shadow border-gray-200 overflow-hidden rounded-sm ${
                            fixed ? 'table-fixed' : 'table-auto'
                        }`}
                        {...props}>
                        {children}
                    </table>
                </div>
            </div>
        </Flex>
    );
};

export default Table;
