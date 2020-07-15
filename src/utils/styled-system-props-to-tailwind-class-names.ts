// this function is a first test to convert styled-system props to tailwind classNames
// it is used for buttons when they are wrapped inside a stack component
// it currently doesnt support breakpoints, we can decide if we want to push this concept further

type StyledSystemProps = {
    mr: number | Array<number>;
    mb: number | Array<number>;
};

const map = {
    mr: (value: number) => `mr-${value}`,
    mb: (value: number) => `mb-${value}`,
};

const styledSystemPropsToTailwindClassNames = (
    props: StyledSystemProps
): string => {
    return Object.keys(props).reduce((accum, key) => {
        const [value] = Array.isArray(props[key]) ? props[key] : [props[key]];
        const className = map[key] ? map[key](value) : '';
        // eslint-disable-next-line no-param-reassign
        accum += className;
        return accum;
    }, '');
};

export default styledSystemPropsToTailwindClassNames;
