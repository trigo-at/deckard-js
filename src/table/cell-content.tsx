import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const CellContent: FC<Props> = ({children}: Props) => {
    return <span className="text-gray-900">{children}</span>;
};

export default CellContent;
