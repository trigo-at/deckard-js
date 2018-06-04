const breakpoints = ['40em', '52em', '64em'];

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128];

export const boxShadows = {
    default: `0 2px 4px 0 rgba(0,0,0,0.10)`,
    md: `0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);`,
    lg: `0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)`,
    inner: `inset 0 2px 4px 0 rgba(0,0,0,0.06)`,
};

// colors

// const trigoFontBlue = '#172537';
const yellow = '#f7ca10';
const green = '#7fbd42';
const blue = '#3ab2d2';
const borderGrey = '#b8c2cc';

const colors = {
    yellow,
    green,
    blue,
    borderGrey,
};

const theme = {
    breakpoints,
    space,
    fontSizes,
    boxShadows,
    colors,
};

export default theme;
