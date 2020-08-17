import React, {ReactNode, FC} from 'react';

type Props = {
    children: ReactNode;
};

const CellContent: FC<Props> = ({children}: Props) => {
    return (
        <div className="text-sm leading-5 font-medium text-gray-900">
            {children}
        </div>
    );
};

export default CellContent;
