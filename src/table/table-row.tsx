import React, {ReactNode, FC} from 'react';
import cx from '../utils/cx';

type Props = {
    entryAnimation?: boolean;
    isActive?: boolean;
    stripedType?: 'odd' | 'even';
    children: ReactNode;
};

const TableRow: FC<Props> = ({
    stripedType,
    isActive,
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
                'bg-green-100': isActive,
            })}
            {...props}>
            {children}
        </tr>
    );
};

TableRow.defaultProps = {
    isActive: false,
    stripedType: 'odd',
};

export default TableRow;
