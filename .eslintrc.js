const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.default, // 这个默认导出就是 eslint
  // extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    ...fabric.default.rules,
    'no-param-reassign': 1,
    '@typescript-eslint/triple-slash-reference': 1,
  },
  plugins: [...fabric.default.plugins, 'react-hooks', 'prettier'],
  // parserOptions: {
  //   ...fabric.default.parserOptions,
  //   project: './packages/**/tsconfig.json',
  // },
};
