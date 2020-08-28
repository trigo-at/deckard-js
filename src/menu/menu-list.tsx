import React, {forwardRef, Ref, FC, useContext, ReactNode} from 'react';
import MenuContext from './menu-context';

type Props = {
    children: ReactNode;
};

const MenuList: FC<Props> = forwardRef(
    (props: Props, ref: Ref<HTMLDivElement>) => {
        const {isOpen} = useContext(MenuContext);

        return isOpen ? (
            <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
                ref={ref}>
                <div className="rounded-md bg-white shadow-xs">
                    {props.children}
                </div>
            </div>
        ) : null;
    }
);

export default MenuList;
