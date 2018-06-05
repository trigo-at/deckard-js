const breakpoints = ['40em', '52em', '64em'];

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const fontSizes = [12, 14, 16, 20, 24, 32, 48];
export const regular = 400;
export const bold = 700;
const fontWeights = {
    regular,
    bold,
};
const fontContent = `Roboto, sans-serif`;
const fontHeading = `"Roboto Slab", serif`;

const letterSpacings = {
    normal: 'normal',
    caps: '0.025em',
};

const boxShadows = {
    default: `0 2px 4px 0 rgba(0,0,0,0.10)`,
    md: `0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);`,
    lg: `0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)`,
    inner: `inset 0 2px 4px 0 rgba(0,0,0,0.06)`,
};

const radii = [0, 2, 6];
const radius = '2px';

// colors

// const trigoFontBlue = '#172537';
const yellowLight = '#f9d541';
const yellow = '#f7ca10';
const yellowDark = '#cda707';
const greenLight = '#99ca68';
const green = '#7fbd42';
const greenDark = '#669735';
const blueLight = '#63c2db';
const blue = '#3ab2d2';
const blueDark = '#2894b1';
const redLight = '#f7103f';
const red = '#cd072f';
const redDark = '#9c0524';
const grayLight = '#d6dbe1';
const gray = '#b8c2cc';
const grayDark = '#9aa9b7';

const borderGray = '#b8c2cc';

const colors = {
    // trigo yellow
    yellowLight,
    yellow,
    yellowDark,

    // trigo green
    greenLight,
    green,
    greenDark,

    // blue
    blueLight,
    blue,
    blueDark,

    // error
    redLight,
    red,
    redDark,

    // gray
    grayLight,
    gray,
    grayDark,

    borderGray,

    white: '#fff',
};

const theme = {
    breakpoints,
    space,
    fontSizes,
    fontWeights,
    regular,
    bold,
    fontContent,
    fontHeading,
    letterSpacings,
    boxShadows,
    colors,
    radii,
    radius,
};

export default theme;
