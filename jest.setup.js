'use strict';

global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};
