export default {
  esm: 'rollup',
  cjs: 'rollup',
  // esm: 'babel',
  // cjs: 'babel',
  // umd: {
  //   sourcemap: true,
  // },
   // extractCSS: true,
  extraBabelPlugins: [
    ['babel-plugin-import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }]
  ],
  lessInBabelMode: true,
  cssModules: true,
  // lessInRollupMode: {},
};
