import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const TableHead: FC<Props> = ({children, ...props}: Props) => {
    return <thead {...props}>{children}</thead>;
};

export default TableHead;
