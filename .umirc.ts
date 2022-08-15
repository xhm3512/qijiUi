import { defineConfig } from 'dumi';

// export default defineConfig({
//   title: 'Library Name',
//   // more config: https://d.umijs.org/config
// });
const { url, api } = {
  url: 'http://authorapi.qijizuopin.com',
  api: '/authorapi'
};
export default defineConfig({
  // mfsu: {},
  webpack5: {
   
  },
  proxy: {
    '/authorapi': {
      target: url,
      changeOrigin: true,
      bypass: function (req, res, proxyOptions) {
        req.headers['origin'] = url;
        req.headers['host'] = url;
        req.headers['referer'] = url;
      },
    },
    '/upload': {
      target: url,
      changeOrigin: true,
      bypass: function (req, res, proxyOptions) {
        req.headers['origin'] = url;
        req.headers['host'] = url;
        req.headers['referer'] = url;
      },
    },
  },
  dynamicImport: {},
  title: 'qiji',
  theme: {
    '@primary-color': '#FA2800',
  },
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    {
      title: '文档',
      path: '/files',
    },
    {
      title: 'ui组件',
      path: '/components',
    },
  ],
  extraBabelPlugins: [
    [
      // 'babel-plugin-import',
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      // 'antd',
    ],
  ],
  // more config: https://d.umijs.org/config
});
