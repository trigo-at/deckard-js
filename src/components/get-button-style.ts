import cx from '../utils/cx';

export default ({
    className,
    size,
    variant,
    isDisabled,
    isLoading,
}: Record<string, any>): string =>
    cx(
        className,
        'inline-flex items-center border font-medium rounded focus:outline-none transition ease-in-out duration-150',
        {
            'px-2.5 py-1.5 text-xs leading-4': size === 'xs',
            'px-3 py-2 text-sm leading-4': size === 'sm',
            'px-4 py-2 text-sm leading-5': size === 'md',
            'px-4 py-2 text-base leading-6': size === 'lg',
            'px-6 py-3 text-base leading-6': size === 'xl',
            'border-transparent text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700':
                variant === 'primary',
            'border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200':
                variant === 'secondary',
            'border-gray-300 text-gray-700 bg-white hover:text-gray-500 focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50':
                variant === 'tertiary',
            'cursor-not-allowed': isDisabled,
            'cursor-wait': isLoading,
            'opacity-50': isDisabled || isLoading,
            'focus:outline-none': isDisabled || isLoading,
        }
    );
