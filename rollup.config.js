import {babel} from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
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
        '@chakra/react',
        'copy-to-clipboard',
        'react-fast-compare',
        'lodash.mergewith',
        'tinycolor2',
        'warning',
        'react-table',
        'react-intl',
        'final-form',
        'final-form-arrays',
        'react-final-form',
        'react-final-form-arrays',
        'react-intl',
        'hoist-non-react-statics',
        '@babel/runtime/helpers/inheritsLoose',
        '@babel/runtime/helpers/defineProperty',
        '@babel/runtime/helpers/taggedTemplateLiteralLoose',
        '@babel/runtime/helpers/objectWithoutPropertiesLoose',
        '@babel/runtime/helpers/extends',
        'date-fns/parseISO',
        'date-fns/format',
        'core-js/modules/es.array.iterator.js',
        'core-js/modules/es.symbol.description.js',
        'core-js/modules/web.dom-collections.iterator.js',
        'core-js/modules/web.url.js',
    ],
    plugins: [
        babel({
            extensions,
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
        nodeResolve({
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
    ],
};
