import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: './src/main.ts',
  output: {
    sourcemap: !production,
    format: 'iife',
    file: './dist/bundle.js',
  },
  plugins: [nodeResolve(), commonjs(), typescript({ sourceMap: !production }), production && terser()],
};
