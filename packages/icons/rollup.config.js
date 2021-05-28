import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

const ts_plugin = typescript({
  target: 'es5',
  include: './**/*',
  exclude: [],
  outDir: './dist',
  typescript: require('typescript'),
});

export default [
  {
    input: 'index.ts',
    output: [
      {
        file: 'index.js',
        format: 'cjs',
        exports: 'default',
      },
    ],
    external: ['windicss/utils/parser', 'windicss/plugin'],
    plugins: [
      ts_plugin,
      json(),
      resolve(),
    ],
  },
];
