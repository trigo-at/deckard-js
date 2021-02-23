import {useEffect, Ref} from 'react';

export default <ElementRef extends Ref<HTMLElement>>(
    ref: ElementRef,
    onClickOutside: () => void
): void => {
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (
                ref &&
                typeof ref !== 'function' &&
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                onClickOutside();
            }
        };

        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [ref, onClickOutside]);
};
