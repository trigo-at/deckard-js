import React from 'react';

type Complex = {
    foo: number;
    bar: string;
};

type Props = {
    a?: boolean;
    b?: 'one' | 'two' | 'three';
    c?: string[];
    d?: Complex[];
    children: React.ReactNode;
};

const Test: React.FC<Props> = ({children}: Props) => {
    return <div className="bg-gray-500 p-20">{children}</div>;
};

export default Test;
