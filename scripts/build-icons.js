// build icon file
// thanks to https://github.com/pricelinelabs/design-system/blob/master/scripts/parse-icons.js

const fs = require('fs');
const path = require('path');
const SVGI = require('svgi');
const camelCase = require('camelcase');

const newSrc = path.join(__dirname, '..', 'icons');
const filepath = path.join(__dirname, '../src/', 'icons.json');

const writeFile = data => {
    const json = JSON.stringify(data);
    fs.writeFileSync(filepath, json);
};

const removePrefix = str => str.replace(/^ic-/, '');

const flattenChildren = (a, b) => {
    const children = b.children.reduce(flattenChildren, []);
    return [...a, b, ...children];
};

const getPath = nodes =>
    nodes.children
        .reduce(flattenChildren, [])
        .filter(child => child.type === 'path')
        .map(child => child.properties.d)
        .join(' ');

const getViewBox = nodes => nodes.properties.viewBox;

const readIcons = dir =>
    fs
        .readdirSync(dir)
        .filter(file => /\.svg$/.test(file))
        .map(file => {
            const name = path.basename(file, '.svg');
            const key = camelCase(removePrefix(name));
            const svg = fs.readFileSync(path.join(dir, file), 'utf8');

            return {
                key,
                svg,
            };
        });

const parseSVG = svg => {
    const {nodes} = new SVGI(svg).report();
    const svgPath = getPath(nodes);
    const viewBox = getViewBox(nodes);

    return {
        viewBox,
        path: svgPath,
    };
};

const getData = icons =>
    icons.map(icon => Object.assign({}, icon, parseSVG(icon.svg)));

const build = () => {
    const icons = readIcons(newSrc);

    const data = getData(icons).reduce(
        (a, {key, viewBox, path: svgPath, legacy}) =>
            Object.assign({}, a, {
                [key]: {
                    viewBox,
                    path: svgPath,
                    legacy,
                },
            }),
        {}
    );
    writeFile(data);
};

build();
