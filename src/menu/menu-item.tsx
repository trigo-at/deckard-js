import React, {
    forwardRef,
    Ref,
    FC,
    useContext,
    useCallback,
    ReactNode,
} from 'react';
import MenuContext from './menu-context';

type Props = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
};

// ensures that the onClick Event works correctly when there is a global mouseDown eventListener (useClickOutside)
// https://stackoverflow.com/questions/41017117/how-does-one-stop-propagation-of-event-to-a-global-listener-in-a-react-component
const onMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    e.nativeEvent.stopImmediatePropagation();

const MenuItem: FC<Props> = forwardRef(
    (props: Props, ref: Ref<HTMLButtonElement>) => {
        const {closeMenu} = useContext(MenuContext);

        const onClick = useCallback(
            (event: React.MouseEvent<HTMLButtonElement>) => {
                if (props.onClick) props.onClick(event);
                closeMenu();
            },
            [props.onClick, closeMenu]
        );

        return (
            <button
                ref={ref}
                type="button"
                role="menuitem"
                className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                onClick={onClick}
                onMouseDown={onMouseDown}>
                {props.children}
            </button>
        );
    }
);

export default MenuItem;
