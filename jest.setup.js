import 'jest-styled-components';

global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
};
