import React from 'react';

type Props = {
    bg: string;
    children: React.ReactNode;
};

const Test: React.FC<Props> = ({bg, children}: Props) => {
    return <div className={`${bg} p-20`}>{children}</div>;
};

export default Test;
