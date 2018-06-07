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
    'align',
    'width',
    'size',
    'color',
];

const cleanElement = props =>
    Object.entries(props)
        .filter(([key]) => !blacklistedProps.includes(key))
        .reduce((obj, [key, val]) => Object.assign(obj, {[key]: val}), {});

export default cleanElement;
