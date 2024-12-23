import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import stylexPlugin from '@stylexjs/rollup-plugin';

const config = {
  input: './index.ts',
  output: {
    file: './.build/bundle.js',
    format: 'es',
  },
  plugins: [
    resolve({ extensions: ['.js', '.ts', '.tsx'] }),
    commonjs(),
    stylexPlugin({
      fileName: 'stylex.css',
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: [
        ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
        '@babel/preset-react'
      ]
    }),
  ]
};

export default config;
