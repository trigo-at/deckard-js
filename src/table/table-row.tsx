import React, {ReactNode, FC} from 'react';

type Props = {
    entryAnimation?: boolean;
    children: ReactNode;
};

const TableRow: FC<Props> = ({entryAnimation, children}: Props) => {
    return (
        <tr className={entryAnimation ? 'animation--blink' : undefined}>
            {children}
        </tr>
    );
};

export default TableRow;
