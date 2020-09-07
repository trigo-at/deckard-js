import React, {
    forwardRef,
    Ref,
    FC,
    useState,
    useCallback,
    ReactNode,
} from 'react';
import MenuContext from './menu-context';

type Props = {
    children: ReactNode;
};

const Menu: FC<Props> = forwardRef((props: Props, ref: Ref<HTMLDivElement>) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [
        setIsOpen,
    ]);

    const closeMenu = useCallback(() => setIsOpen(false), [setIsOpen]);

    return (
        <MenuContext.Provider
            value={{
                isOpen,
                toggleMenu,
                closeMenu,
            }}>
            <div className="relative inline-block text-left" ref={ref}>
                {props.children}
            </div>
        </MenuContext.Provider>
    );
});

export default Menu;
