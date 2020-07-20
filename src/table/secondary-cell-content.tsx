import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const SecondaryCellContent: FC<Props> = ({children}: Props) => {
    return <span className="text-sm text-gray-600">{children}</span>;
};

export default SecondaryCellContent;
