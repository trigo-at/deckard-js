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
const TRIGO_YELLOW = '#F7CA10';
const TRIGO_GREEN = '#7FBD42';
const TRIGO_BLUE = '#3AB2D2';

const colors = {
    brandBlue: TRIGO_BLUE,
    brandGreen: TRIGO_GREEN,
    brandYellow: TRIGO_YELLOW,
    primary: '#2D8EFF',
    darkPrimary: '#0B7CFF',
    secondary: '#DCEEFF',
    black: '#000A12',
    white: '#FFFFFF',
    negative: '#FF4949',
    positive: '#13CE66',
    warning: '#FFCC3D',
    active: '#2D8EFF',
    darkGray: '#1F2D3D',
    gray: '#778F9B',
    lightGray: '#B8C1CB',
    snow: '#DDE2E8',
};

const theme = {
    breakpoints,
    space,
    fontSizes,
    fontWeights,
    regular,
    bold,
    fonts: {
        content: fontContent,
        heading: fontHeading,
    },
    letterSpacings,
    boxShadows,
    colors,
    radii,
    radius,
};

export default theme;
