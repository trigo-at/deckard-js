import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const extensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx'];

export default {
    input: 'src/index',
    output: [
        {file: pkg.main, format: 'cjs'},
        {file: pkg.module, format: 'es'},
    ],
    external: [
        'react',
        'react-dom',
        'prop-types',
        '@chakra/core',
        'object-assign',
        '@reach/router',
        'react-intl',
        'final-form',
        'final-form-arrays',
        'react-final-form',
        'react-final-form-arrays',
        'react-intl',
        'hoist-non-react-statics',
        '@babel/runtime/helpers/inheritsLoose',
        'color',
        'react-focus-lock/dist/cjs',
        'body-scroll-lock',
        'react-animate-height',
        '@babel/runtime/helpers/defineProperty',
        '@babel/runtime/helpers/taggedTemplateLiteralLoose',
        '@babel/runtime/helpers/objectWithoutPropertiesLoose',
        '@babel/runtime/helpers/extends',
        'exenv',
        'react-spring/renderprops.cjs',
        'date-fns',
        'copy-to-clipboard',
        'core-js/modules/es.array.iterator',
        'core-js/modules/es.symbol.description',
        'core-js/modules/web.dom-collections.iterator',
        'core-js/modules/web.url',
    ],
    plugins: [
        babel({
            extensions,
            exclude: 'node_modules/**',
        }),
        resolve({
            extensions,
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
        postcss(),
    ],
};
