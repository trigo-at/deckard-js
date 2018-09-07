const breakpoints = ['40em', '52em', '64em'];

const space = [0, 4, 8, 16, 32, 64, 128];

const fontSizes = [12, 14, 16, 20, 24, 32, 48];
export const regular = 400;
export const bold = 700;
const fontWeights = {
    regular,
    bold,
};

const letterSpacings = {
    normal: 'normal',
    caps: '0.025em',
};

// colors
const TRIGO_YELLOW = '#F7CA10';
const TRIGO_GREEN = '#7FBD42';
const TRIGO_BLUE = '#3AB2D2';

const colors = {
    brandBlue: TRIGO_BLUE,
    brandGreen: TRIGO_GREEN,
    brandYellow: TRIGO_YELLOW,
    primary: TRIGO_BLUE,
    darkPrimary: '#0073F9',
    secondary: '#DCEEFF',
    darkSecondary: '#A9D5FF',
    black: '#000A12',
    white: '#FFFFFF',
    negative: '#FF4949',
    positive: TRIGO_GREEN,
    warning: TRIGO_YELLOW,
    active: TRIGO_BLUE,
    darkGray: '#1F2D3D',
    gray: '#778F9B',
    lightGray: '#B8C1CB',
    snow: '#DDE2E8',
};

const shadows = [
    `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
    `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
    `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
    `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`,
];

const radii = [0, 2, 6];
const radius = '2px';

const maxContainerWidth = '1280px';

const theme = {
    breakpoints,
    space,
    fontSizes,
    fontWeights,
    regular,
    bold,
    fonts: `'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif`,
    letterSpacings,
    shadows,
    colors,
    radii,
    radius,
    maxContainerWidth,
};

export default theme;
