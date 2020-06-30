import React from 'react';

export const Code = ({children}) => (
    <pre>{children}</pre>
);

export const InlineCode = ({children}) => (
    <pre style={{display: 'inline-block'}}>{children}</pre>
);
