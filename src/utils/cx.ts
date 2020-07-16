type Arg = string | Record<string, boolean | undefined | null>;

export default (...args: Arg[]): string => {
    const classNames = args.map((arg) => {
        return typeof arg === 'string'
            ? arg
            : Object.entries(arg)
                  .map(([k, v]) => (v ? k : ''))
                  .join(' ');
    });

    return classNames.join(' ').trim();
};
