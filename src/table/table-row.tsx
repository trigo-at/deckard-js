import React, {ReactNode, FC} from 'react';
import cx from '../utils/cx';

type Props = {
    entryAnimation?: boolean;
    stripedType?: 'odd' | 'even';
    children: ReactNode;
};

const TableRow: FC<Props> = ({
    stripedType,
    entryAnimation,
    children,
    ...props
}: Props) => {
    return (
        <tr
            className={cx({
                'animation--blink': entryAnimation,
                'bg-white': stripedType === 'odd',
                'bg-gray-50': stripedType === 'even',
            })}
            {...props}>
            {children}
        </tr>
    );
};

TableRow.defaultProps = {
    stripedType: 'odd',
};

export default TableRow;
