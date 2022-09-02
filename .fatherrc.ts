export default {
  esm: 'rollup',
  cjs: 'rollup',
  // esm: 'babel',
  // cjs: 'babel',
  // umd: {
  //   sourcemap: true,
  // },
   extractCSS: true,  //是否提取 css 为单独文件。
  // extraBabelPlugins: [
  //   ['babel-plugin-import', {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: true,
  //   }]
  // ],
  // lessInBabelMode: true, //便衣为css
  cssModules: true, //为 true 后，全部 css 文件都走 css modules。（less 文件同理）
  // lessInRollupMode: {},
};
