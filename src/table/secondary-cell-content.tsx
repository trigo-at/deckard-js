import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const SecondaryCellContent: FC<Props> = ({children}: Props) => {
    return <div className="text-sm leading-5 text-gray-500">{children}</div>;
};

export default SecondaryCellContent;
