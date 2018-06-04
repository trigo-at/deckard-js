const breakpoints = ['40em', '52em', '64em'];

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const fontSizes = ['1rem', 14, 16, 20, 24, 32, 48];
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
const yellow = '#f7ca10';
const green = '#7fbd42';
const lightBlue = '#63c2db';
const blue = '#3ab2d2';
const darkBlue = '#2894b1';
const grey = '#b8c2cc';
const borderGrey = '#b8c2cc';

const colors = {
    yellow,
    green,

    // blue
    lightBlue,
    blue,
    darkBlue,

    grey,
    borderGrey,
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
