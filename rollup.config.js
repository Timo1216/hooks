// import json from 'rollup-plugin-json';
// import { terser } from 'rollup-plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts', // 打包入口文件
    output: [
      // 输出
      {
        // 打包 esmodule
        file: 'es/index.js',
        format: 'esm',
      },
      {
        // 打包 cjs 模块
        file: 'dist/index.js',
        format: 'cjs',
      },
    ],
    plugins: [
      typescript(),
      nodeResolve({
        extensions: ['.ts'], // 扩展   打包 ts 文件
      }),
    ],
    external: ['react'],
  },
  // {
  //   input: './types/index.d.ts',
  //   output: [{ file: 'es/index.d.ts', format: 'es' }],
  //   plugins: [dts()],
  // },
];
