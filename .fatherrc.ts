export default {
  esm: 'rollup',
  cjs: 'rollup',
  // esm: 'babel',
  // cjs: 'babel',
  // umd: {
  //   sourcemap: true,
  // },
  extractCSS: true,
  lessInBabelMode: true,
  cssModules: true,
  sideEffects: ['.less', '.css', './src//style/'],
  // lessInRollupMode: {},
};
