(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [275],
  {
    57304: function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function() {
            return b;
          },
        });
      var r = t(13378),
        a = t(67294),
        o = JSON.parse(
          '{"menus":{"en-US":{"/files":[{"path":"/files","title":"Qiji of React","meta":{"order":1}},{"path":"/files/indexreduce","title":"\u5feb\u901f\u4e0a\u624b","meta":{"order":2}}],"/components":[{"title":"\u901a\u7528","meta":{"__fallback":true,"order":1},"children":[{"path":"/components/button","title":"Button \u6309\u94ae","meta":{}},{"path":"/components/icons","title":"Icon \u56fe\u6807","meta":{}},{"path":"/components/img-icons","title":"ImgIcon \u56fe\u6807","meta":{}}]},{"title":"\u6570\u636e\u5f55\u5165","meta":{"order":8,"__fallback":true},"children":[{"path":"/components/date-picker","title":"DatePicker\u65e5\u671f\u9009\u62e9\u6846","meta":{}},{"path":"/components/select","title":"Select\u9009\u62e9\u5668","meta":{}}]},{"title":"\u5e03\u5c40","meta":{"order":8,"__fallback":true},"children":[{"path":"/components/foo","title":"Grid \u73ca\u683c","meta":{}},{"path":"/components/layout","title":"Layout \u5e03\u5c40","meta":{}}]},{"title":"\u6570\u636e\u5c55\u793a","meta":{"order":9,"__fallback":true},"children":[{"path":"/components/broken-line","title":"BrokenLine\u6298\u7ebf\u56fe","meta":{}},{"path":"/components/tabs","title":"tabs \u5bf9\u8bdd\u6846","meta":{}}]},{"title":"\u53cd\u9988","meta":{"order":9,"__fallback":true},"children":[{"path":"/components/cascader-address","title":"CascaderAddress \u5730\u5740\u5f55\u5165","meta":{}},{"path":"/components/demo","title":"Statistic \u7edf\u8ba1\u6570\u503c1","meta":{}},{"path":"/components/drawer","title":"Drawer \u62bd\u5c49","meta":{}},{"path":"/components/modal","title":"Modal \u5bf9\u8bdd\u6846","meta":{}},{"path":"/components/statistic","title":"Statistic \u7edf\u8ba1\u6570\u503c","meta":{}},{"path":"/components/tool-tip","title":"QuiTooltip \u6587\u5b57\u63d0\u793a","meta":{}}]},{"title":"\u5176\u4ed6","meta":{"order":10,"__fallback":true},"children":[{"path":"/components/editor","title":"Editor \u5bcc\u6587\u672c\u7f16\u8f91\u5668","meta":{}},{"path":"/components/remark","title":"Remark \u6807\u6ce8","meta":{}}]}],"/script":[{"title":"\u6570\u636e\u5c55\u793a","meta":{"order":8,"__fallback":true},"children":[{"path":"/script/image","title":"Image \u56fe\u7247","meta":{}}]},{"title":"\u5176\u4ed6","meta":{"__fallback":true,"order":8},"children":[{"path":"/script/catch-err","title":"CatchErr \u5f02\u5e38\u6355\u83b7","meta":{}},{"path":"/script/loadable","title":"Loadable \u7ec4\u4ef6\u61d2\u52a0\u8f7d","meta":{}}]}],"*":[{"path":"/","title":"\u8f7b\u677e\u4e0a\u624b","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6587\u6863","path":"/files"},{"title":"ui\u7ec4\u4ef6","path":"/components"},{"title":"\u903b\u8f91\u7ec4\u4ef6","path":"/script"}]},"title":"qiji","logo":"https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}',
        ),
        i = t(68699),
        s = t(94043),
        c = t.n(s),
        l = t(25045),
        u =
          ".item-box {\n  text-align: center;\n  margin: 0 10px;\n  cursor: pointer;\n  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  position: relative;\n  padding: 6px;\n  .icon {\n    font-size: 30px;\n    transition: font-size 0.3s ease-in-out, background-color 0.3s ease-in-out;\n    height: 50px;\n  }\n  .icon-name {\n    font-size: 16px;\n  }\n  &:hover {\n    background: #096dd9;\n    color: #fff;\n    border-radius: 4px;\n    .icon {\n      font-size: 40px;\n      transition: font-size 0.3s ease-in-out, background-color 0.3s ease-in-out;\n    }\n  }\n  &:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    color: #fff;\n    line-height: 110px;\n    text-align: center;\n    opacity: 0;\n    transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n    content: 'Copied!';\n  }\n}",
        d =
          '.layout-box {\n  position: relative;\n  color: #fff;\n  text-align: center;\n  box-shadow: 0 1px 6px 0 rgba(175, 183, 200, 0.37);\n}\n.header {\n  height: 90px;\n  background: #7dbcea;\n  color: #fff;\n  // position: fixed;\n  // top: 0;\n  // left: 0;\n  // width: 100%;\n}\n.layout-content-box {\n  // min-height: calc(100vh - 90px - 70px);\n  min-height: calc(20vh);\n}\n.sider-box {\n  overflow-y: auto;\n  background: #3ba0e9;\n  // position: fixed;\n  // top: 90px;\n  // float: left;\n}\n.content-box {\n  background: rgba(16, 142, 233, 1);\n  padding: 0 0 0 210px;\n}\n.footer {\n  height: 70px;\n  background: #7dbcea;\n}',
        m =
          ".item-box {\n  text-align: center;\n  margin: 0 10px;\n  cursor: pointer;\n  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  position: relative;\n  padding: 6px;\n  .icon {\n    font-size: 30px;\n    transition: font-size 0.3s ease-in-out, background-color 0.3s ease-in-out;\n    height: 50px;\n  }\n  .icon-name {\n    font-size: 16px;\n  }\n  &:hover {\n    background: #096dd9;\n    color: #fff;\n    border-radius: 4px;\n    .icon {\n      font-size: 40px;\n      transition: font-size 0.3s ease-in-out, background-color 0.3s ease-in-out;\n    }\n  }\n  &:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    color: #fff;\n    line-height: 110px;\n    text-align: center;\n    opacity: 0;\n    transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n    content: 'Copied!';\n  }\n}",
        p = {
          'CascaderAddress-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(
                                  a.QuiCascaderAddress,
                                  { title: 'First Demo' },
                                );
                              }),
                              e.abrupt('return', o)
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { QuiCascaderAddress } from 'qiji';\n\nexport default () => <QuiCascaderAddress title=\"First Demo\" />;",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'CascaderAddress',
              identifier: 'CascaderAddress-demo',
            },
          },
          'Editor-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                var e = function(e) {};
                                return r.default.createElement(a.Editor, {
                                  contentStyle: { height: 132 },
                                  placeholder:
                                    '\u4f5c\u54c1\u4ecb\u7ecd\u4e0d\u80fd\u4e3a\u7a7a\u6216\u8005\u4e0d\u80fd\u591a\u4e8e300\u5b57',
                                  onChange: e,
                                  value:
                                    '\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\uff0cdumi \u63d0\u4f9b\u4e86\u4e24\u79cd\u4e0d\u540c\u7684\u811a\u624b\u67b6\u3002\u6211\u4eec\u9700\u8981\u5148\u627e\u4e2a\u5730\u65b9\u5efa\u4e2a\u7a7a\u76ee\u5f55\uff0c\u7136\u540e\u518d\u4f7f\u7528\u811a\u624b\u67b6\uff1a',
                                });
                              }),
                              e.abrupt('return', o)
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { Editor } from 'qiji';\n\nexport default () => {\n  const onChange = val => {};\n  return (\n    <Editor\n      // id='description'\n      // prohibitedWords={'\u811a\u624b\u67b6,\u7a7a\u76ee\u5f55'}\n      contentStyle={{ height: 132 }}\n      placeholder=\"\u4f5c\u54c1\u4ecb\u7ecd\u4e0d\u80fd\u4e3a\u7a7a\u6216\u8005\u4e0d\u80fd\u591a\u4e8e300\u5b57\"\n      // maxLength={300}\n      onChange={onChange}\n      value=\"\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\uff0cdumi \u63d0\u4f9b\u4e86\u4e24\u79cd\u4e0d\u540c\u7684\u811a\u624b\u67b6\u3002\u6211\u4eec\u9700\u8981\u5148\u627e\u4e2a\u5730\u65b9\u5efa\u4e2a\u7a7a\u76ee\u5f55\uff0c\u7136\u540e\u518d\u4f7f\u7528\u811a\u624b\u67b6\uff1a\"\n    />\n  );\n};",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'Editor',
              identifier: 'Editor-demo',
            },
          },
          'Foo-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(a.Foo, {
                                  title: 'First Demo',
                                });
                              }),
                              e.abrupt('return', o)
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { Foo } from 'qiji';\n\nexport default () => <Foo title=\"First Demo\" />;",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'Foo',
              identifier: 'Foo-demo',
            },
          },
          'Icons-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i, s, l, u, d, m, p, f, v;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (e.next = 11),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(152),
                                t.e(700),
                              ]).then(t.bind(t, 25152))
                            );
                          case 11:
                            return (
                              (o = e.sent),
                              (e.next = 14),
                              Promise.all([t.e(654), t.e(268)]).then(
                                t.t.bind(t, 56268, 23),
                              )
                            );
                          case 14:
                            return (
                              (e.next = 16),
                              t.e(606).then(t.t.bind(t, 64582, 23))
                            );
                          case 16:
                            return (
                              (i = a.Icons.WorksManagerCustom),
                              (s = a.Icons.DataCustom),
                              (l = a.Icons.SalaryCustom),
                              (u = a.Icons.UserCustom),
                              (d = a.Icons.NewsCustom),
                              (m = a.Icons.ArrowCustom),
                              (p = a.Icons.ToolTipCustom),
                              (f = [
                                {
                                  id: 'WorksManagerCustom',
                                  components: r.default.createElement(i, null),
                                },
                                {
                                  id: 'DataCustom',
                                  components: r.default.createElement(s, {
                                    className: 'ert',
                                  }),
                                },
                                {
                                  id: 'SalaryCustom',
                                  components: r.default.createElement(l, null),
                                },
                                {
                                  id: 'UserCustom',
                                  components: r.default.createElement(u, null),
                                },
                                {
                                  id: 'NewsCustom',
                                  components: r.default.createElement(d, null),
                                },
                                {
                                  id: 'ArrowCustom',
                                  components: r.default.createElement(m, null),
                                },
                                {
                                  id: 'ToolTipCustom',
                                  components: r.default.createElement(p, {
                                    active: !0,
                                  }),
                                },
                              ]),
                              (v = function() {
                                return r.default.createElement(
                                  o.Row,
                                  { style: { fontSize: '30px' } },
                                  f.map(function(e) {
                                    return r.default.createElement(
                                      'div',
                                      { className: 'item-box', key: e.id },
                                      r.default.createElement(
                                        'div',
                                        { className: 'icon' },
                                        e.components,
                                      ),
                                      r.default.createElement(
                                        'div',
                                        { className: 'icon-name' },
                                        e.id,
                                      ),
                                    );
                                  }),
                                );
                              }),
                              e.abrupt('return', v)
                            );
                          case 20:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { Icons } from 'qiji';\nimport { Row, Col, Divider } from 'antd';\nimport 'antd/dist/antd.less';\nimport './md.less';\nconst {\n  WorksManagerCustom,\n  DataCustom,\n  SalaryCustom,\n  UserCustom,\n  NewsCustom,\n  ArrowCustom,\n  ToolTipCustom,\n} = Icons;\nconst arr = [\n  {\n    id: 'WorksManagerCustom',\n    components: <WorksManagerCustom />,\n  },\n  {\n    id: 'DataCustom',\n    components: <DataCustom className=\"ert\" />,\n  },\n  {\n    id: 'SalaryCustom',\n    components: <SalaryCustom />,\n  },\n  {\n    id: 'UserCustom',\n    components: <UserCustom />,\n  },\n  {\n    id: 'NewsCustom',\n    components: <NewsCustom />,\n  },\n  {\n    id: 'ArrowCustom',\n    components: <ArrowCustom />,\n  },\n  {\n    id: 'ToolTipCustom',\n    components: <ToolTipCustom active />,\n  },\n];\nexport default () => (\n  <Row style={{ fontSize: '30px' }}>\n    {arr.map(item => (\n      <div className=\"item-box\" key={item.id}>\n        <div className=\"icon\">{item.components}</div>\n        <div className=\"icon-name\">{item.id}</div>\n      </div>\n    ))}\n  </Row>\n);",
                },
                'md.less': { import: './md.less', content: u },
              },
              dependencies: {
                react: { version: '>=16.9.0' },
                qiji: { version: '0.2.0' },
                antd: { version: '4.20.4', css: 'antd/dist/antd.css' },
                'react-dom': { version: '>=16.9.0' },
              },
              componentName: 'Icons',
              identifier: 'Icons-demo',
            },
          },
          'Layout-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i, s, l, u;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (e.next = 11),
                              t.e(35).then(t.t.bind(t, 46035, 23))
                            );
                          case 11:
                            return (
                              (o = a.Layout.Content),
                              (i = a.Layout.Header),
                              (s = a.Layout.Footer),
                              (l = a.Layout.Sider),
                              (u = function() {
                                return r.default.createElement(
                                  a.Layout,
                                  { className: 'layout-box' },
                                  r.default.createElement(
                                    i,
                                    { className: 'header' },
                                    'Header',
                                  ),
                                  r.default.createElement(
                                    a.Layout,
                                    { className: 'layout-content-box' },
                                    r.default.createElement(
                                      l,
                                      {
                                        width: 190,
                                        breakpoint: 'xl',
                                        className: 'sider-box',
                                      },
                                      'Sider',
                                    ),
                                    r.default.createElement(
                                      o,
                                      { className: 'content-box' },
                                      'Content',
                                    ),
                                  ),
                                  r.default.createElement(
                                    s,
                                    { className: 'footer' },
                                    'Footer',
                                  ),
                                );
                              }),
                              e.abrupt('return', u)
                            );
                          case 14:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    'import React from \'react\';\nimport { Layout } from \'qiji\';\nconst { Content, Header, Footer, Sider } = Layout;\nimport \'./index.less\';\nexport default () => (\n  <Layout className="layout-box">\n    <Header className="header">Header</Header>\n    <Layout className="layout-content-box">\n      <Sider width={190} breakpoint="xl" className="sider-box">\n        Sider\n      </Sider>\n      <Content className="content-box">Content</Content>\n    </Layout>\n    <Footer className="footer">Footer</Footer>\n  </Layout>\n);',
                },
                'index.less': { import: './index.less', content: d },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'Layout',
              identifier: 'Layout-demo',
            },
          },
          'Remark-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(a.Remark, {
                                  machineWords: {
                                    high: ['\u6807\u9898'],
                                    low: ['\u521d\u59cb\u5316'],
                                  },
                                  manSpamWords: { risk: ['create-dumi-lib'] },
                                  onSubmitHtml: function(e) {
                                    return console.log(123, e);
                                  },
                                  text:
                                    'span  data-check\u901a\u8fc7\u5b98\u7f51\u7684 npx @umijs/create-dumi-lib \u521d\u59cb\u5316\u4e00\u4e2a\u9879\u76ee\u4e4b\u540e\u53d1\u73b0\u4e86\u51e0\u4e2a\u5751\u8bb0\u5f55\u4e00\u4e0b 1.\u6807\u9898\u6309\u7167\u5b98\u7f51\u793a\u4f8b\u64cd\u4f5c vscode \u63d0\u793a\u627e\u4e0d\u5230\u6b63\u5728\u5f00\u53d1\u7684\u7ec4\u4ef6\u7c7b\u578b \u89e3\u51b3\u65b9\u6cd5 1.\u67e5\u770b\u9879\u76ee\u4e2d\u7684 package.json \u6587\u4ef6 typings \u5c5e\u6027\u8def\u5f84\u6307\u5411\u7684 index.d.ts...',
                                });
                              }),
                              e.abrupt('return', o)
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { Remark } from 'qiji';\n\nexport default () => (\n  <Remark\n    machineWords={{\n      high: ['\u6807\u9898'],\n      low: ['\u521d\u59cb\u5316'],\n    }}\n    manSpamWords={{\n      risk: ['create-dumi-lib'],\n    }}\n    onSubmitHtml={val => console.log(123, val)}\n    text=\"span  data-check\u901a\u8fc7\u5b98\u7f51\u7684 npx @umijs/create-dumi-lib \u521d\u59cb\u5316\u4e00\u4e2a\u9879\u76ee\u4e4b\u540e\u53d1\u73b0\u4e86\u51e0\u4e2a\u5751\u8bb0\u5f55\u4e00\u4e0b 1.\u6807\u9898\u6309\u7167\u5b98\u7f51\u793a\u4f8b\u64cd\u4f5c vscode \u63d0\u793a\u627e\u4e0d\u5230\u6b63\u5728\u5f00\u53d1\u7684\u7ec4\u4ef6\u7c7b\u578b \u89e3\u51b3\u65b9\u6cd5 1.\u67e5\u770b\u9879\u76ee\u4e2d\u7684 package.json \u6587\u4ef6 typings \u5c5e\u6027\u8def\u5f84\u6307\u5411\u7684 index.d.ts...\"\n  ></Remark>\n);",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'Remark',
              identifier: 'Remark-demo',
            },
          },
          'brokenLine-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i, s;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function(e) {
                                var n = e.data,
                                  t = e.type,
                                  a = {
                                    data: n,
                                    seriesField: 'type',
                                    legend: {
                                      position: 'bottom',
                                      custom: !0,
                                      items: [
                                        {
                                          name: t,
                                          marker: {
                                            symbol: 'circle',
                                            style: {
                                              fill: 'rgba(255, 72, 70, 1)',
                                            },
                                          },
                                        },
                                      ],
                                    },
                                    xField: 'Date',
                                    yField: 'scales',
                                    color: 'rgba(255, 72, 70, .6)',
                                    smooth: !0,
                                    point: {
                                      size: 4,
                                      shape: 'custom-point',
                                      style: {
                                        fill: 'rgba(255, 72, 70, 1)',
                                        background: 'rgba(255, 72, 70, 1)',
                                      },
                                    },
                                    tooltip: {
                                      customContent: function(e, n) {
                                        var a,
                                          o =
                                            (null === n ||
                                            void 0 === n ||
                                            null === (a = n[0]) ||
                                            void 0 === a
                                              ? void 0
                                              : a.data) || {};
                                        return r.default.createElement(
                                          'div',
                                          { className: 'tooltip-box', key: e },
                                          r.default.createElement(
                                            'div',
                                            { className: 'data-item-title' },
                                            o.Date,
                                          ),
                                          r.default.createElement(
                                            'div',
                                            { className: 'data-value' },
                                            t,
                                            '\uff1a',
                                            o.scales,
                                          ),
                                        );
                                      },
                                    },
                                    yAxis: { title: { text: t } },
                                    xAxis: {
                                      label: {
                                        autoRotate: !0,
                                        autoHide: !1,
                                        autoEllipsis: !1,
                                      },
                                      tickCount: n.length,
                                      legend: !0,
                                      tickLine: null,
                                    },
                                    shape: 'circle',
                                    state: { shape: 'circle' },
                                  };
                                return a;
                              }),
                              (i = [
                                { Date: '04-13', scales: 94 },
                                { Date: '04-14', scales: 82 },
                                { Date: '04-15', scales: 146 },
                                { Date: '04-16', scales: 255 },
                                { Date: '04-17', scales: 430 },
                                { Date: '04-18', scales: 558 },
                                { Date: '04-19', scales: 1047 },
                                { Date: '04-20', scales: 945 },
                                { Date: '04-21', scales: 1157 },
                                { Date: '04-22', scales: 1397 },
                                { Date: '04-23', scales: 1338 },
                                { Date: '04-24', scales: 882 },
                                { Date: '04-25', scales: 681 },
                                { Date: '04-26', scales: 660 },
                                { Date: '04-27', scales: 593 },
                                { Date: '04-28', scales: 1380 },
                                { Date: '04-29', scales: 771 },
                                { Date: '04-30', scales: 2344 },
                                { Date: '05-01', scales: 1196 },
                                { Date: '05-02', scales: 196 },
                                { Date: '05-03', scales: 119 },
                                { Date: '05-04', scales: 23 },
                                { Date: '05-05', scales: 25 },
                                { Date: '05-06', scales: 32 },
                                { Date: '05-07', scales: 42 },
                                { Date: '05-08', scales: 86 },
                                { Date: '05-09', scales: 51 },
                                { Date: '05-10', scales: 78 },
                                { Date: '05-11', scales: 31 },
                                { Date: '05-12', scales: 52 },
                              ]),
                              (s = function() {
                                return r.default.createElement(a.BrokenLine, {
                                  config: o({
                                    data: i,
                                    type: '\u652f\u6301\u7387',
                                  }),
                                });
                              }),
                              e.abrupt('return', s)
                            );
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { BrokenLine } from 'qiji';\nconst getConfig = ({ data, type }: any) => {\n  const config = {\n    data,\n    seriesField: 'type',\n    legend: {\n      position: 'bottom',\n      custom: true,\n      items: [\n        {\n          name: type,\n          marker: {\n            // \u662f\u5426\u4e3a\u65b9\u5757\n            symbol: 'circle',\n            style: {\n              // \u586b\u5145\u989c\u8272\uff0c\u6ce8\u610f\u8981\u4e0e\u7ebf\u6761\u989c\u8272\u5bf9\u5e94\u3002\n              fill: 'rgba(255, 72, 70, 1)',\n            },\n          },\n        },\n      ],\n    },\n    // padding: 'auto',\n    xField: 'Date',\n    yField: 'scales',\n    color: 'rgba(255, 72, 70, .6)',\n    smooth: true,\n    point: {\n      size: 4,\n      shape: 'custom-point',\n      style: {\n        fill: 'rgba(255, 72, 70, 1)',\n        background: 'rgba(255, 72, 70, 1)',\n        // lineWidth: 2,\n      },\n    },\n    tooltip: {\n      customContent: (title: string, item: any) => {\n        const data = item?.[0]?.data || {};\n        return (\n          <div className=\"tooltip-box\" key={title}>\n            <div className=\"data-item-title\">{data.Date}</div>\n            <div className=\"data-value\">\n              {type}\uff1a{data.scales}\n            </div>\n          </div>\n        );\n      },\n    },\n    yAxis: {\n      title: {\n        text: type,\n      },\n    },\n    xAxis: {\n      label: {\n        autoRotate: true,\n        autoHide: false,\n        autoEllipsis: false,\n      },\n      tickCount: data.length,\n      legend: true,\n      tickLine: null,\n    },\n    shape: 'circle',\n    state: {\n      shape: 'circle',\n      // \u8bbe\u7f6e active \u6fc0\u6d3b\u72b6\u6001\u7684\u6837\u5f0f\n      // active: {\n      //   shape:'circle',\n      //   animate: { duration: 100, easing: 'easeLinear' },\n      //   style: {\n      //     lineWidth: 2,\n      //     stroke: '#000',\n      //   },\n      // },\n    },\n  };\n  return config;\n};\nconst data = [\n  {\n    Date: '04-13',\n    scales: 94,\n  },\n  {\n    Date: '04-14',\n    scales: 82,\n  },\n  {\n    Date: '04-15',\n    scales: 146,\n  },\n  {\n    Date: '04-16',\n    scales: 255,\n  },\n  {\n    Date: '04-17',\n    scales: 430,\n  },\n  {\n    Date: '04-18',\n    scales: 558,\n  },\n  {\n    Date: '04-19',\n    scales: 1047,\n  },\n  {\n    Date: '04-20',\n    scales: 945,\n  },\n  {\n    Date: '04-21',\n    scales: 1157,\n  },\n  {\n    Date: '04-22',\n    scales: 1397,\n  },\n  {\n    Date: '04-23',\n    scales: 1338,\n  },\n  {\n    Date: '04-24',\n    scales: 882,\n  },\n  {\n    Date: '04-25',\n    scales: 681,\n  },\n  {\n    Date: '04-26',\n    scales: 660,\n  },\n  {\n    Date: '04-27',\n    scales: 593,\n  },\n  {\n    Date: '04-28',\n    scales: 1380,\n  },\n  {\n    Date: '04-29',\n    scales: 771,\n  },\n  {\n    Date: '04-30',\n    scales: 2344,\n  },\n  {\n    Date: '05-01',\n    scales: 1196,\n  },\n  {\n    Date: '05-02',\n    scales: 196,\n  },\n  {\n    Date: '05-03',\n    scales: 119,\n  },\n  {\n    Date: '05-04',\n    scales: 23,\n  },\n  {\n    Date: '05-05',\n    scales: 25,\n  },\n  {\n    Date: '05-06',\n    scales: 32,\n  },\n  {\n    Date: '05-07',\n    scales: 42,\n  },\n  {\n    Date: '05-08',\n    scales: 86,\n  },\n  {\n    Date: '05-09',\n    scales: 51,\n  },\n  {\n    Date: '05-10',\n    scales: 78,\n  },\n  {\n    Date: '05-11',\n    scales: 31,\n  },\n  {\n    Date: '05-12',\n    scales: 52,\n  },\n];\nexport default () => (\n  <BrokenLine\n    config={getConfig({\n      data,\n      type: '\u652f\u6301\u7387',\n    })}\n  />\n);",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'brokenLine',
              identifier: 'brokenLine-demo',
            },
          },
          'button-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(
                                  'span',
                                  { type: 'primary' },
                                  '+',
                                );
                              }),
                              (i = function() {
                                return r.default.createElement(
                                  r.default.Fragment,
                                  null,
                                  r.default.createElement(
                                    a.QuiButton,
                                    { type: 'primary', size: 'large' },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    { type: 'primary', size: 'middle' },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    { type: 'primary', size: 'small' },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'primary',
                                      size: 'small',
                                      disabled: !0,
                                    },
                                    'disable',
                                  ),
                                  r.default.createElement('br', null),
                                  r.default.createElement('br', null),
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'primary',
                                      size: 'large',
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' \xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'primary',
                                      size: 'middle',
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' ',
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'primary',
                                      size: 'small',
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' \xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'primary',
                                      size: 'small',
                                      disabled: !0,
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' ',
                                  '\xa0',
                                  r.default.createElement('br', null),
                                  r.default.createElement('br', null),
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'primary',
                                      size: 'large',
                                      icon: r.default.createElement(o, null),
                                      loading: !0,
                                    },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'primary',
                                      size: 'middle',
                                      icon: r.default.createElement(o, null),
                                      loading: !0,
                                    },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'primary',
                                      size: 'small',
                                      icon: r.default.createElement(o, null),
                                      loading: !0,
                                    },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'primary',
                                      size: 'small',
                                      icon: r.default.createElement(o, null),
                                      loading: !0,
                                    },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'primary',
                                      size: 'small',
                                      icon: r.default.createElement(o, null),
                                      loading: !0,
                                      disabled: !0,
                                    },
                                    'text',
                                  ),
                                  '\xa0',
                                );
                              }),
                              e.abrupt('return', i)
                            );
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    'import React from \'react\';\nimport { QuiButton } from \'qiji\';\nconst Icon = () => {\n  return <span type="primary">+</span>;\n};\nexport default () => (\n  <>\n    <QuiButton type="primary" size="large">\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="primary" size="middle">\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="primary" size="small">\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="primary" size="small" disabled>\n      disable\n    </QuiButton>\n    <br />\n    <br />\n    <QuiButton type="primary" size="large" icon={<Icon />}>\n      icon\n    </QuiButton> &nbsp;\n    <QuiButton type="primary" size="middle" icon={<Icon />}>\n      icon\n    </QuiButton>{\' \'}\n    &nbsp;\n    <QuiButton type="primary" size="small" icon={<Icon />}>\n      icon\n    </QuiButton> &nbsp;\n    <QuiButton type="primary" size="small" disabled icon={<Icon />}>\n      icon\n    </QuiButton>{\' \'}\n    &nbsp;\n    <br />\n    <br />\n    <QuiButton type="primary" size="large" icon={<Icon />} loading>\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="primary" size="middle" icon={<Icon />} loading>\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="primary" size="small" icon={<Icon />} loading>\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="primary" size="small" icon={<Icon />} loading>\n      text\n    </QuiButton>&nbsp;\n    <QuiButton type="primary" size="small" icon={<Icon />} loading disabled>\n      text\n    </QuiButton>\n    &nbsp;\n  </>\n);',
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'button',
              identifier: 'button-demo',
            },
          },
          'button-demo-1': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(
                                  'span',
                                  { type: 'primary' },
                                  '+',
                                );
                              }),
                              (i = function() {
                                return r.default.createElement(
                                  r.default.Fragment,
                                  null,
                                  r.default.createElement(
                                    a.QuiButton,
                                    { type: 'outline', size: 'large' },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    { type: 'outline', size: 'middle' },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    { type: 'outline', size: 'small' },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'outline',
                                      size: 'small',
                                      disabled: !0,
                                    },
                                    'disable',
                                  ),
                                  r.default.createElement('br', null),
                                  r.default.createElement('br', null),
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'outline',
                                      size: 'large',
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' \xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'outline',
                                      size: 'middle',
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' ',
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'outline',
                                      size: 'small',
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' \xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'outline',
                                      size: 'small',
                                      disabled: !0,
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' ',
                                  '\xa0',
                                  r.default.createElement('br', null),
                                  r.default.createElement('br', null),
                                );
                              }),
                              e.abrupt('return', i)
                            );
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    'import React from \'react\';\nimport { QuiButton } from \'qiji\';\nconst Icon = () => {\n  return <span type="primary">+</span>;\n};\nexport default () => (\n  <>\n    <QuiButton type="outline" size="large">\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="outline" size="middle">\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="outline" size="small">\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="outline" size="small" disabled>\n      disable\n    </QuiButton>\n    <br />\n    <br />\n    <QuiButton type="outline" size="large" icon={<Icon />}>\n      icon\n    </QuiButton> &nbsp;\n    <QuiButton type="outline" size="middle" icon={<Icon />}>\n      icon\n    </QuiButton>{\' \'}\n    &nbsp;\n    <QuiButton type="outline" size="small" icon={<Icon />}>\n      icon\n    </QuiButton> &nbsp;\n    <QuiButton type="outline" size="small" disabled icon={<Icon />}>\n      icon\n    </QuiButton>{\' \'}\n    &nbsp;\n    <br />\n    <br />\n  </>\n);',
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'button',
              identifier: 'button-demo-1',
            },
          },
          'button-demo-2': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(
                                  'span',
                                  { type: 'primary' },
                                  '+',
                                );
                              }),
                              (i = function() {
                                return r.default.createElement(
                                  r.default.Fragment,
                                  null,
                                  r.default.createElement(
                                    a.QuiButton,
                                    { type: 'secondary', size: 'large' },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    { type: 'secondary', size: 'middle' },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    { type: 'secondary', size: 'small' },
                                    'text',
                                  ),
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'secondary',
                                      size: 'small',
                                      disabled: !0,
                                    },
                                    'disable',
                                  ),
                                  r.default.createElement('br', null),
                                  r.default.createElement('br', null),
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'secondary',
                                      size: 'large',
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' \xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'secondary',
                                      size: 'middle',
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' ',
                                  '\xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'secondary',
                                      size: 'small',
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' \xa0',
                                  r.default.createElement(
                                    a.QuiButton,
                                    {
                                      type: 'secondary',
                                      size: 'small',
                                      disabled: !0,
                                      icon: r.default.createElement(o, null),
                                    },
                                    'icon',
                                  ),
                                  ' ',
                                  '\xa0',
                                  r.default.createElement('br', null),
                                  r.default.createElement('br', null),
                                );
                              }),
                              e.abrupt('return', i)
                            );
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    'import React from \'react\';\nimport { QuiButton } from \'qiji\';\nconst Icon = () => {\n  return <span type="primary">+</span>;\n};\nexport default () => (\n  <>\n    <QuiButton type="secondary" size="large">\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="secondary" size="middle">\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="secondary" size="small">\n      text\n    </QuiButton>\n    &nbsp;\n    <QuiButton type="secondary" size="small" disabled>\n      disable\n    </QuiButton>\n    <br />\n    <br />\n    <QuiButton type="secondary" size="large" icon={<Icon />}>\n      icon\n    </QuiButton> &nbsp;\n    <QuiButton type="secondary" size="middle" icon={<Icon />}>\n      icon\n    </QuiButton>{\' \'}\n    &nbsp;\n    <QuiButton type="secondary" size="small" icon={<Icon />}>\n      icon\n    </QuiButton> &nbsp;\n    <QuiButton type="secondary" size="small" disabled icon={<Icon />}>\n      icon\n    </QuiButton>{\' \'}\n    &nbsp;\n    <br />\n    <br />\n  </>\n);',
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'button',
              identifier: 'button-demo-2',
            },
          },
          'datePicker-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(
                                  a.QuiDatePicker,
                                  { bordered: !1 },
                                );
                              }),
                              e.abrupt('return', o)
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { QuiDatePicker } from 'qiji';\n\nexport default () => (\n  <QuiDatePicker\n    bordered={false}\n    // disabled={true}\n  />\n);",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'datePicker',
              identifier: 'datePicker-demo',
            },
          },
          'datePicker-demo-1': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.next = 3),
                              Promise.all([t.e(834), t.e(532)]).then(
                                t.t.bind(t, 38098, 23),
                              )
                            );
                          case 3:
                            return (
                              (e.t0 = n),
                              (e.next = 6),
                              t.e(942).then(t.bind(t, 80942))
                            );
                          case 6:
                            (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              DatePicker,
                              r.default;
                          case 9:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  jsx:
                    "import 'moment/locale/zh-cn';\nimport locale from 'antd/es/date-picker/locale/zh_CN';\n\n<DatePicker locale={locale} />;",
                },
              },
              dependencies: {
                moment: { version: '2.29.3' },
                antd: { version: '4.20.4', css: 'antd/dist/antd.css' },
                react: { version: '>=16.9.0' },
                'react-dom': { version: '>=16.9.0' },
              },
              componentName: 'datePicker',
              identifier: 'datePicker-demo-1',
            },
          },
          'datePicker-demo-2': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.all([t.e(834), t.e(532)]).then(
                                t.t.bind(t, 56051, 23),
                              )
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([t.e(834), t.e(532)]).then(
                                t.t.bind(t, 38098, 23),
                              )
                            );
                          case 8:
                            return (
                              (e.t2 = n),
                              (e.next = 11),
                              t.e(726).then(t.bind(t, 53726))
                            );
                          case 11:
                            (e.t3 = e.sent),
                              (a = (0, e.t2)(e.t3)),
                              ConfigProvider,
                              a.default,
                              DatePicker,
                              (0, r.default)('2015-01-01', 'YYYY-MM-DD');
                          case 14:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  jsx:
                    "// \u9ed8\u8ba4\u8bed\u8a00\u4e3a en-US\uff0c\u5982\u679c\u4f60\u9700\u8981\u8bbe\u7f6e\u5176\u4ed6\u8bed\u8a00\uff0c\u63a8\u8350\u5728\u5165\u53e3\u6587\u4ef6\u5168\u5c40\u8bbe\u7f6e locale\nimport moment from 'moment';\nimport 'moment/locale/zh-cn';\nimport locale from 'antd/lib/locale/zh_CN';\n\n<ConfigProvider locale={locale}>\n  <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />\n</ConfigProvider>;",
                },
              },
              dependencies: {
                moment: { version: '2.29.3' },
                antd: { version: '4.20.4', css: 'antd/dist/antd.css' },
                react: { version: '>=16.9.0' },
                'react-dom': { version: '>=16.9.0' },
              },
              componentName: 'datePicker',
              identifier: 'datePicker-demo-2',
            },
          },
          'demo-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(a.Foo, {
                                  title: 'First Demo',
                                });
                              }),
                              e.abrupt('return', o)
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { Foo } from 'qiji';\n\nexport default () => <Foo title=\"First Demo\" />;",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'demo',
              identifier: 'demo-demo',
            },
          },
          'drawer-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i, s, l;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = function(e, n) {
                                if (!n && e && e.__esModule) return e;
                                if (
                                  null === e ||
                                  ('object' !== typeof e &&
                                    'function' !== typeof e)
                                )
                                  return { default: e };
                                var t = i(n);
                                if (t && t.has(e)) return t.get(e);
                                var r = {},
                                  a =
                                    Object.defineProperty &&
                                    Object.getOwnPropertyDescriptor;
                                for (var o in e)
                                  if (
                                    'default' !== o &&
                                    Object.prototype.hasOwnProperty.call(e, o)
                                  ) {
                                    var s = a
                                      ? Object.getOwnPropertyDescriptor(e, o)
                                      : null;
                                    s && (s.get || s.set)
                                      ? Object.defineProperty(r, o, s)
                                      : (r[o] = e[o]);
                                  }
                                return (r.default = e), t && t.set(e, r), r;
                              }),
                              (i = function(e) {
                                if ('function' !== typeof WeakMap) return null;
                                var n = new WeakMap(),
                                  t = new WeakMap();
                                return (i = function(e) {
                                  return e ? t : n;
                                })(e);
                              }),
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 6),
                              Promise.resolve().then(t.bind(t, 44742))
                            );
                          case 6:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.t2 = s),
                              (e.next = 11),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 11:
                            return (
                              (e.t3 = e.sent),
                              (a = (0, e.t2)(e.t3)),
                              (e.next = 15),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 15:
                            return (
                              (o = e.sent),
                              (l = function() {
                                var e = (0, a.useState)(!0),
                                  n = (0, r.default)(e, 2),
                                  t = n[0],
                                  i = n[1],
                                  s = function() {
                                    i(!t);
                                  };
                                return a.default.createElement(
                                  a.default.Fragment,
                                  null,
                                  a.default.createElement(
                                    'div',
                                    { onClick: s },
                                    'qwqw',
                                  ),
                                  a.default.createElement(
                                    o.QuiDrawer,
                                    {
                                      maskClosable: !0,
                                      visible: t,
                                      onClose: s,
                                    },
                                    a.default.createElement('div', null, '44'),
                                  ),
                                );
                              }),
                              e.abrupt('return', l)
                            );
                          case 18:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React, { useState } from 'react';\nimport { QuiDrawer } from 'qiji';\nexport default () => {\n  const [visible, setVisible] = useState(true); // \u5f39\u7a97\u662f\u5426\u53ef\u89c1,\u9ed8\u8ba4\u4e0d\u53ef\u89c1,\u70b9\u51fb\u6309\u94ae\u540e\u5f39\u7a97\u51fa\u73b0\n  const onClick = () => {\n    setVisible(!visible);\n  };\n  return (\n    <>\n      <div onClick={onClick}>qwqw</div>\n      <QuiDrawer maskClosable={true} visible={visible} onClose={onClick}>\n        <div>44</div>\n      </QuiDrawer>\n    </>\n  );\n};",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'drawer',
              identifier: 'drawer-demo',
            },
          },
          'imgIcons-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i, s, l;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (e.next = 11),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(152),
                                t.e(700),
                              ]).then(t.bind(t, 25152))
                            );
                          case 11:
                            return (
                              (o = e.sent),
                              (e.next = 14),
                              Promise.all([t.e(654), t.e(268)]).then(
                                t.t.bind(t, 56268, 23),
                              )
                            );
                          case 14:
                            return (
                              (e.next = 16),
                              t.e(851).then(t.t.bind(t, 11851, 23))
                            );
                          case 16:
                            return (
                              (i = a.ImgIcons.MoDalClose),
                              (s = [
                                {
                                  id: 'MoDalClose',
                                  components: r.default.createElement(i, {
                                    className: 'qw',
                                  }),
                                },
                              ]),
                              (l = function() {
                                return r.default.createElement(
                                  o.Row,
                                  { style: { fontSize: '30px' } },
                                  s.map(function(e) {
                                    return r.default.createElement(
                                      'div',
                                      { className: 'item-box', key: e.id },
                                      r.default.createElement(
                                        'div',
                                        { className: 'icon' },
                                        e.components,
                                      ),
                                      r.default.createElement(
                                        'div',
                                        { className: 'icon-name' },
                                        e.id,
                                      ),
                                    );
                                  }),
                                );
                              }),
                              e.abrupt('return', l)
                            );
                          case 20:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { ImgIcons } from 'qiji';\nimport { Row, Col, Divider } from 'antd';\nimport 'antd/dist/antd.less';\nimport './md.less';\nconst { MoDalClose } = ImgIcons;\nconst arr = [\n  {\n    id: 'MoDalClose',\n    components: <MoDalClose className=\"qw\" />,\n  },\n];\nexport default () => (\n  <Row style={{ fontSize: '30px' }}>\n    {arr.map(item => (\n      <div className=\"item-box\" key={item.id}>\n        <div className=\"icon\">{item.components}</div>\n        <div className=\"icon-name\">{item.id}</div>\n      </div>\n    ))}\n  </Row>\n);",
                },
                'md.less': { import: './md.less', content: m },
              },
              dependencies: {
                react: { version: '>=16.9.0' },
                qiji: { version: '0.2.0' },
                antd: { version: '4.20.4', css: 'antd/dist/antd.css' },
                'react-dom': { version: '>=16.9.0' },
              },
              componentName: 'imgIcons',
              identifier: 'imgIcons-demo',
            },
          },
          'modal-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(a.Foo, {
                                  title: 'First Demo',
                                });
                              }),
                              e.abrupt('return', o)
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { Foo } from 'qiji';\n\nexport default () => <Foo title=\"First Demo\" />;",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'modal',
              identifier: 'modal-demo',
            },
          },
          'select-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(a.Foo, {
                                  title: 'First Demo',
                                });
                              }),
                              e.abrupt('return', o)
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { Foo } from 'qiji';\n\nexport default () => <Foo title=\"First Demo\" />;",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'select',
              identifier: 'select-demo',
            },
          },
          'statistic-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i, s;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function(e) {}),
                              (i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
                              (s = function() {
                                return r.default.createElement(
                                  a.QuiStatistic,
                                  { active: !0 },
                                  i.map(function(e) {
                                    return r.default.createElement(
                                      'div',
                                      { className: '12', onClick: o },
                                      e,
                                    );
                                  }),
                                );
                              }),
                              e.abrupt('return', s)
                            );
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { QuiStatistic } from 'qiji';\nconst onClick = (item: any) => {};\nconst list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];\nexport default () => (\n  <QuiStatistic active={true}>\n    {list.map((item: any) => (\n      <div className=\"12\" onClick={onClick}>\n        {item}\n      </div>\n    ))}\n  </QuiStatistic>\n);",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'statistic',
              identifier: 'statistic-demo',
            },
          },
          'tabs-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = function() {
                                return r.default.createElement(
                                  a.QuiTabs,
                                  null,
                                  r.default.createElement(
                                    'div',
                                    {
                                      title:
                                        '\u4e13\u8f91\u6536\u542c\u6570\u636e\u5206\u6790',
                                    },
                                    r.default.createElement(
                                      'div',
                                      { className: '22' },
                                      'we23',
                                    ),
                                  ),
                                  r.default.createElement(
                                    'div',
                                    {
                                      title:
                                        '\u58f0\u97f3\u8d28\u91cf\u5206\u6790',
                                    },
                                    'we2311',
                                  ),
                                );
                              }),
                              e.abrupt('return', o)
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    'import React from \'react\';\nimport { QuiTabs } from \'qiji\';\n\nexport default () => (\n  <QuiTabs>\n    <div title="\u4e13\u8f91\u6536\u542c\u6570\u636e\u5206\u6790">\n      <div className="22">we23</div>\n    </div>\n    <div title="\u58f0\u97f3\u8d28\u91cf\u5206\u6790">we2311</div>\n  </QuiTabs>\n);',
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'tabs',
              identifier: 'tabs-demo',
            },
          },
          'toolTip-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i, s;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              t.e(463).then(t.bind(t, 99463))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.t2 = n),
                              (e.next = 9),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 9:
                            return (
                              (e.t3 = e.sent),
                              (a = (0, e.t2)(e.t3)),
                              (e.next = 13),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 13:
                            return (
                              (o = e.sent),
                              (i = function() {
                                return a.default.createElement(
                                  'div',
                                  null,
                                  a.default.createElement('div', null, 'tool'),
                                  a.default.createElement('div', null, 'tool'),
                                  a.default.createElement('div', null, 'tool'),
                                  a.default.createElement('div', null, 'tool'),
                                );
                              }),
                              (s = function() {
                                return a.default.createElement(
                                  o.QuiToolTip,
                                  (0, r.default)(
                                    {
                                      placement: 'bottom',
                                      title: 'First Demo',
                                      trigger: ['click'],
                                      overlayClassName: 'tip-demo-box',
                                    },
                                    'title',
                                    a.default.createElement(i, null),
                                  ),
                                  a.default.createElement('a', null, 'hover'),
                                );
                              }),
                              e.abrupt('return', s)
                            );
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    'import React from \'react\';\nimport { QuiToolTip } from \'qiji\';\nconst GG = () => {\n  return (\n    <div>\n      <div>tool</div>\n      <div>tool</div>\n      <div>tool</div>\n      <div>tool</div>\n    </div>\n  );\n};\nexport default () => (\n  <QuiToolTip\n    placement="bottom"\n    title="First Demo"\n    trigger={[\'click\']}\n    overlayClassName="tip-demo-box"\n    title={<GG />}\n  >\n    <a>hover</a>\n  </QuiToolTip>\n);',
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'toolTip',
              identifier: 'toolTip-demo',
            },
          },
          'CatchErr-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i, s, l, u;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (o = function(e, n) {
                                if (!n && e && e.__esModule) return e;
                                if (
                                  null === e ||
                                  ('object' !== typeof e &&
                                    'function' !== typeof e)
                                )
                                  return { default: e };
                                var t = a(n);
                                if (t && t.has(e)) return t.get(e);
                                var r = {},
                                  o =
                                    Object.defineProperty &&
                                    Object.getOwnPropertyDescriptor;
                                for (var i in e)
                                  if (
                                    'default' !== i &&
                                    Object.prototype.hasOwnProperty.call(e, i)
                                  ) {
                                    var s = o
                                      ? Object.getOwnPropertyDescriptor(e, i)
                                      : null;
                                    s && (s.get || s.set)
                                      ? Object.defineProperty(r, i, s)
                                      : (r[i] = e[i]);
                                  }
                                return (r.default = e), t && t.set(e, r), r;
                              }),
                              (a = function(e) {
                                if ('function' !== typeof WeakMap) return null;
                                var n = new WeakMap(),
                                  t = new WeakMap();
                                return (a = function(e) {
                                  return e ? t : n;
                                })(e);
                              }),
                              (e.t0 = o),
                              (e.next = 5),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 5:
                            return (
                              (e.t1 = e.sent),
                              (n = (0, e.t0)(e.t1)),
                              (e.next = 9),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 9:
                            return (
                              (r = e.sent),
                              (i = function() {
                                return n.createElement('div', null, 'errCom');
                              }),
                              (s = {
                                l: 1,
                                d: 'function',
                                f: 'notice_render',
                                textErr: i(),
                              }),
                              (l = function() {
                                return n.createElement(
                                  n.Fragment,
                                  null,
                                  n.createElement('div', null, 'func'),
                                );
                              }),
                              (u = (0, r.CatchErr)(s)(l)),
                              e.abrupt('return', u)
                            );
                          case 15:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import * as React from 'react';\nconst Err = () => {\n  return <div>errCom</div>;\n};\nconst abnormalLog = { l: 1, d: 'function', f: 'notice_render', textErr: Err() };\nimport { CatchErr } from 'qiji';\n\nconst FuncFunc = () => {\n  return (\n    <>\n      <div>func</div>\n      {/* {hooks} */}\n    </>\n  );\n};\n\nexport default CatchErr(abnormalLog)(FuncFunc);",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'CatchErr',
              identifier: 'CatchErr-demo',
            },
          },
          'CatchErr-demo-1': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i, s, l, u, d, m, p, f, v, b, h;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (p = function(e, n) {
                                if (!n && e && e.__esModule) return e;
                                if (
                                  null === e ||
                                  ('object' !== typeof e &&
                                    'function' !== typeof e)
                                )
                                  return { default: e };
                                var t = m(n);
                                if (t && t.has(e)) return t.get(e);
                                var r = {},
                                  a =
                                    Object.defineProperty &&
                                    Object.getOwnPropertyDescriptor;
                                for (var o in e)
                                  if (
                                    'default' !== o &&
                                    Object.prototype.hasOwnProperty.call(e, o)
                                  ) {
                                    var i = a
                                      ? Object.getOwnPropertyDescriptor(e, o)
                                      : null;
                                    i && (i.get || i.set)
                                      ? Object.defineProperty(r, o, i)
                                      : (r[o] = e[o]);
                                  }
                                return (r.default = e), t && t.set(e, r), r;
                              }),
                              (m = function(e) {
                                if ('function' !== typeof WeakMap) return null;
                                var n = new WeakMap(),
                                  t = new WeakMap();
                                return (m = function(e) {
                                  return e ? t : n;
                                })(e);
                              }),
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 6),
                              t.e(360).then(t.bind(t, 60360))
                            );
                          case 6:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.t2 = n),
                              (e.next = 11),
                              t.e(646).then(t.bind(t, 66646))
                            );
                          case 11:
                            return (
                              (e.t3 = e.sent),
                              (a = (0, e.t2)(e.t3)),
                              (e.t4 = n),
                              (e.next = 16),
                              t.e(353).then(t.bind(t, 65353))
                            );
                          case 16:
                            return (
                              (e.t5 = e.sent),
                              (o = (0, e.t4)(e.t5)),
                              (e.t6 = n),
                              (e.next = 21),
                              t.e(604).then(t.bind(t, 18604))
                            );
                          case 21:
                            return (
                              (e.t7 = e.sent),
                              (i = (0, e.t6)(e.t7)),
                              (e.t8 = p),
                              (e.next = 26),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 26:
                            return (
                              (e.t9 = e.sent),
                              (s = (0, e.t8)(e.t9)),
                              (e.next = 30),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 30:
                            return (
                              (l = e.sent),
                              (f = function() {
                                return s.createElement('div', null, 'errCom');
                              }),
                              (v = {
                                l: 1,
                                d: 'function',
                                f: 'notice_render',
                                textErr: f(),
                              }),
                              (u = (0, l.CatchErr)(v, 'eeee')),
                              (b =
                                u(
                                  (d = (function(e) {
                                    (0, o.default)(t, e);
                                    var n = (0, i.default)(t);
                                    function t() {
                                      var e;
                                      (0, r.default)(this, t);
                                      for (
                                        var a = arguments.length,
                                          o = new Array(a),
                                          i = 0;
                                        i < a;
                                        i++
                                      )
                                        o[i] = arguments[i];
                                      return (
                                        (e = n.call.apply(n, [this].concat(o))),
                                        (e.handleClick = function() {}),
                                        e
                                      );
                                    }
                                    return (
                                      (0, a.default)(t, [
                                        {
                                          key: 'componentDidMount',
                                          value: function() {},
                                        },
                                        {
                                          key: 'render',
                                          value: function() {
                                            return s.createElement(
                                              'div',
                                              { onClick: this.handleClick },
                                              'class',
                                            );
                                          },
                                        },
                                      ]),
                                      t
                                    );
                                  })(s.Component)),
                                ) || d),
                              (h = b),
                              e.abrupt('return', h)
                            );
                          case 36:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import * as React from 'react';\nconst Err = () => {\n  return <div>errCom</div>;\n};\nconst abnormalLog = { l: 1, d: 'function', f: 'notice_render', textErr: Err() };\nimport { CatchErr } from 'qiji';\n@CatchErr(abnormalLog, 'eeee')\nclass ClassFunc extends React.Component {\n  componentDidMount() {}\n  handleClick = () => {\n    // throw Error(\"fff\")\n    // setTimeout(()=>{\n    //     console.log(fff);\n    // })\n  };\n  render() {\n    return (\n      <div onClick={this.handleClick}>\n        class\n        {/* {classDemo} */}\n      </div>\n    );\n  }\n}\n\nexport default ClassFunc;",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'CatchErr',
              identifier: 'CatchErr-demo-1',
            },
          },
          'Loadable-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o = (0, a.Loadable)(function() {
                                return t.e(177).then(t.bind(t, 37836));
                              })),
                              (i = function() {
                                return r.default.createElement(o, null);
                              }),
                              e.abrupt('return', i)
                            );
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { Loadable } from 'qiji';\n\nconst Home = Loadable(() =>\n  import(/* webpackChunkName: \"home\" */ '@/components/Remark'),\n);\nexport default () => <Home />;",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'Loadable',
              identifier: 'Loadable-demo',
            },
          },
          'image-demo': {
            component: (0, l.dynamic)({
              loader: (function() {
                var e = (0, i.Z)(
                  c().mark(function e() {
                    var n, r, a, o, i, s, l;
                    return c().wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t(42857)),
                              (e.t0 = n),
                              (e.next = 4),
                              Promise.resolve().then(t.t.bind(t, 67294, 19))
                            );
                          case 4:
                            return (
                              (e.t1 = e.sent),
                              (r = (0, e.t0)(e.t1)),
                              (e.next = 8),
                              Promise.all([
                                t.e(697),
                                t.e(834),
                                t.e(423),
                                t.e(885),
                                t.e(323),
                              ]).then(t.bind(t, 74651))
                            );
                          case 8:
                            return (
                              (a = e.sent),
                              (o =
                                'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'),
                              (i =
                                'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'),
                              (s = { width: '50%', height: '50%' }),
                              (l = function() {
                                return r.default.createElement(
                                  'div',
                                  null,
                                  [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    2021,
                                    22,
                                    23,
                                    24,
                                    25,
                                    26,
                                  ].map(function(e) {
                                    return r.default.createElement(
                                      'div',
                                      { key: e, style: s },
                                      r.default.createElement(a.QuiImage, {
                                        style: s,
                                        src: e >= 26 ? i : o,
                                        errNum: 2,
                                        errDisplay: !0,
                                        defaultSrc: o,
                                        lazyLoad: !0,
                                      }),
                                    );
                                  }),
                                );
                              }),
                              e.abrupt('return', l)
                            );
                          case 14:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: {
                _: {
                  tsx:
                    "import React from 'react';\nimport { QuiImage } from 'qiji';\nconst url =\n  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';\nconst url2 =\n  'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp';\nconst style = {\n  width: '50%',\n  height: '50%',\n};\nexport default () => {\n  return (\n    <div>\n      {[\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9,\n        10,\n        11,\n        12,\n        13,\n        14,\n        15,\n        16,\n        17,\n        18,\n        19,\n        2021,\n        22,\n        23,\n        24,\n        25,\n        26,\n      ].map(item => (\n        <div key={item} style={style}>\n          <QuiImage\n            style={style}\n            src={item >= 26 ? url2 : url}\n            errNum={2}\n            errDisplay={true}\n            defaultSrc={url}\n            lazyLoad={true}\n          />\n        </div>\n      ))}\n    </div>\n  );\n};",
                },
              },
              dependencies: {
                react: {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
                qiji: { version: '0.2.0' },
                'react-dom': {
                  version: '^0.14.0 || ^15.0.0-rc || ^16.0.0-rc || ^16.0.0',
                },
              },
              componentName: 'image',
              identifier: 'image-demo',
            },
          },
        },
        f = {},
        v = t(49215),
        b = e =>
          a.createElement(
            v.Z,
            (0, r.Z)({}, e, { config: o, demos: p, apis: f }),
          );
    },
  },
]);
