(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [935],
  {
    35956: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(67294),
        o = t(96089),
        r = t(65659),
        l = a.memo(e => {
          e.demos;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              'div',
              { className: 'markdown' },
              a.createElement(
                'h2',
                { id: '\u8f7b\u677e\u4e0a\u624b' },
                a.createElement(
                  o.AnchorLink,
                  {
                    to: '#\u8f7b\u677e\u4e0a\u624b',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u8f7b\u677e\u4e0a\u624b',
              ),
              a.createElement(r.Z, {
                code:
                  "import React from 'react';\nimport { Remark } from 'qiji';\n\nexport default () => (\n  <Remark\n    text=\"\u5b9e\u8df5\u8bc1\u660e\uff0c\u4e60\u8fd1\u5e73\u6167\u773c\u8bc6\u73e0\u3002\u591a\u5e74\u540e\uff0c\u4ed6\u5728\u300a\u5fc6\u5927\u5c71\u300b\u4e00\u6587\u4e2d\u8fd9\u4e48\u8bc4\u4ef7\u8d3e\u5927\u5c71\u7684\u5de5\u4f5c\uff1a\u201c\u4e0a\u4efb\u4f0a\u59cb\uff0c\u4ed6\u5c31\u4e0b\u57fa\u5c42\u3001\u8bbf\u7fa4\u4f17\u3001\u67e5\u95ee\u9898\u3001\u5b9a\u5236\u5ea6\uff0c\u51e0\u4e2a\u6708\u4e0b\u6765\uff0c\u4fbf\u628a\u539f\u6765\u6bd4\u8f83\u6df7\u4e71\u7684\u6587\u5316\u7cfb\u7edf\u6574\u6cbb\u5f97\u4e95\u4e95\u6709\u6761\u3002\u5728\u4efb\u671f\u95f4\uff0c\u5927\u5c71\u4e3a\u6b63\u5b9a\u6587\u5316\u4e8b\u4e1a\u7684\u53d1\u5c55\u548c\u53e4\u6587\u7269\u7684\u7814\u7a76\u3001\u4fdd\u62a4\u3001\u7ef4\u4fee\u3001\u53d1\u6398\u3001\u62a2\u6551\uff0c\u7aed\u5c3d\u4e86\u81ea\u5df1\u7684\u5168\u529b\u3002\u5e38\u5c71\u5f71\u5267\u9662\u3001\u65b0\u534e\u4e66\u5e97\u3001\u7535\u5f71\u9662\u7b49\u6587\u5316\u8bbe\u65bd\u7684\u5174\u5efa\u548c\u4fee\u590d\uff0c\u9686\u5174\u5bfa\u5927\u60b2\u9601\u3001\u5929\u5b81\u5bfa\u51cc\u9704\u5854\u3001\u5f00\u5143\u5bfa\u949f\u697c\u3001\u4e34\u6d4e\u5bfa\u6f84\u7075\u5854\u3001\u5e7f\u60e0\u5bfa\u534e\u5854\u3001\u53bf\u6587\u5e99\u5927\u6210\u6bbf\u7684\u4fee\u590d\uff0c\u65e0\u4e0d\u6d78\u900f\u7740\u4ed6\u8f9b\u52b3\u5954\u8d70\u7684\u6c57\u6c34\u3002\"\n    spamWords={{ high: ['\u66f4\u6539'] }}\n    onChange={val => {\n      console.log(val);\n    }}\n  />\n);",
                lang: 'js',
              }),
            ),
          );
        });
      n['default'] = e => {
        var n = a.useContext(o.context),
          t = n.demos;
        return (
          a.useEffect(() => {
            var n;
            null !== e &&
              void 0 !== e &&
              null !== (n = e.location) &&
              void 0 !== n &&
              n.hash &&
              o.AnchorLink.scrollToAnchor(
                decodeURIComponent(e.location.hash.slice(1)),
              );
          }, []),
          a.createElement(l, { demos: t })
        );
      };
    },
  },
]);
