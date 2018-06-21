const blacklistedProps = [
    'theme',
    'wrap',
    'alignItems',
    'borderColor',
    'borderRadius',
    'borderWidth',
    'boxShadowSize',
    'textAlign',
    'flexDirection',
    'justify',
    'justifyContent',
    'justifyItems',
    'align',
    'width',
    'size',
    'color',
    'bg',
    'p',
    'flexDirection',
    'flex',
    'fontSize',
    'mt',
    'ml',
    'mr',
    'mb',
    'pl',
    'pr',
    'pb',
    'pt',
];

const cleanElement = props =>
    Object.entries(props)
        .filter(([key]) => !blacklistedProps.includes(key))
        .reduce((obj, [key, val]) => Object.assign(obj, {[key]: val}), {});

export default cleanElement;
