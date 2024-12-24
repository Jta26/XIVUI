import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import stylexPlugin from '@stylexjs/rollup-plugin';

const config = {
  input: './index.ts',
  output: [
    {
      file: '.build/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: '.build/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions: ['.js', '.ts', '.tsx'] }),
    commonjs(),
    stylexPlugin({
      fileName: 'stylex.css',
      dev: true
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: [
        ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
        '@babel/preset-react'
      ]
    }),
  ],
  external: ['react', 'react-dom']
};

export default config;
