import {ReactNode, Ref} from 'react';

export type BaseProps = {
    className?: string;
    ref?: Ref<HTMLButtonElement>;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    isDisabled?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    children: ReactNode;
};

export type ButtonProps = BaseProps & {
    type?: 'button' | 'submit' | 'reset';
    isLoading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type VariantButtonProps = ButtonProps & {
    variant: 'primary' | 'secondary' | 'tertiary';
};

export type LinkProps = ButtonProps & {
    to: string;
    isExternal?: boolean;
};

export type VariantLinkProps = LinkProps & {
    variant: 'primary' | 'secondary' | 'tertiary';
};
