import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import pkg from './package.json';

export default {
    input: 'src/index',
    output: [{file: pkg.main, format: 'cjs'}, {file: pkg.module, format: 'es'}],
    external: ['react', 'prop-types', 'styled-components', 'styled-system', 'clean-element'],
    plugins: [
        resolve({
            module: true,
            jsnext: true,
            main: true,
            extensions: ['.mjs', '.js', '.jsx'],
            modulesOnly: true,
        }),
        json({
            // All JSON files will be parsed by default,
            // but you can also specifically include/exclude files
            exclude: ['node_modules'],

            // for tree-shaking, properties will be declared as
            // variables, using either `var` or `const`
            preferConst: true, // Default: false

            // specify indentation for the generated default export —
            // defaults to '\t'
            indent: '  ',
        }),
        babel({
            exclude: 'node_modules/**',
        }),
    ],
};
