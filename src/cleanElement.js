const blacklistedProps = [
    'theme',
    'wrap',
    'alignItems',
    'borderColor',
    'borderRadius',
    'borderWidth',
    'boxShadow',
    'textAlign',
    'flexDirection',
    'justify',
    'justifyContent',
    'justifyItems',
    'align',
    'width',
    'height',
    'maxWidth',
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
    'opacity',
    'nested',
    'state',
    'bold',
    'fullWidth',
];

const cleanElement = props =>
    Object.entries(props) // eslint-disable-line
        .filter(([key]) => !blacklistedProps.includes(key))
        .reduce((obj, [key, val]) => Object.assign(obj, {[key]: val}), {}); // eslint-disable-line

export default cleanElement;
