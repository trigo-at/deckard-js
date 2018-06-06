import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
    input: 'src/index',
    output: [{file: pkg.main, format: 'cjs'}, {file: pkg.module, format: 'es'}],
    external: [
        'react',
        'prop-types',
        'styled-components',
        'styled-system',
        'clean-element',
    ],
    plugins: [
        resolve({
            module: true,
            jsnext: true,
            main: true,
            extensions: ['.mjs', '.js', '.jsx', '.json'],
            modulesOnly: true,
        }),
        babel({
            exclude: 'node_modules/**',
        }),
    ],
};
