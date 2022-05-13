(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [310],
  {
    86845: function() {},
    8036: function() {},
    24623: function(e, t, n) {
      'use strict';
      n.r(t);
      var l = n(67294),
        r = n(96089),
        a = n(32851),
        o = n(4187),
        c = l.memo(e => {
          var t = e.demos,
            n = t['image-demo'].component;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              l.Fragment,
              null,
              l.createElement(
                'div',
                { className: 'markdown' },
                l.createElement(
                  'h2',
                  { id: 'image-\u56fe\u7247\u61d2\u52a0\u8f7d' },
                  l.createElement(
                    r.AnchorLink,
                    {
                      to: '#image-\u56fe\u7247\u61d2\u52a0\u8f7d',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    l.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Image \u56fe\u7247\u61d2\u52a0\u8f7d',
                ),
                l.createElement('p', null, 'Demo:'),
              ),
              l.createElement(
                a.default,
                t['image-demo'].previewerProps,
                l.createElement(n, null),
              ),
              l.createElement(
                'div',
                { className: 'markdown' },
                l.createElement(
                  o.Z,
                  null,
                  l.createElement(
                    'thead',
                    null,
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('th', null, '\u53c2\u6570'),
                      l.createElement('th', null, '\u8bf4\u660e'),
                      l.createElement('th', null, '\u7c7b\u578b'),
                      l.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                      l.createElement('th', null, '\u7248\u672c'),
                    ),
                  ),
                  l.createElement(
                    'tbody',
                    null,
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'alt'),
                      l.createElement('td', null, '\u56fe\u50cf\u63cf\u8ff0'),
                      l.createElement('td', null, 'string'),
                      l.createElement('td', null, '-'),
                      l.createElement('td', null),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'src'),
                      l.createElement('td', null, '\u56fe\u7247\u5730\u5740'),
                      l.createElement('td', null, 'string'),
                      l.createElement('td', null, '-'),
                      l.createElement('td', null),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'lazyLoad'),
                      l.createElement(
                        'td',
                        null,
                        '\u662f\u5426\u61d2\u52a0\u8f7d',
                      ),
                      l.createElement('td', null, 'boolean'),
                      l.createElement('td', null, 'true'),
                      l.createElement('td', null),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'errNum'),
                      l.createElement(
                        'td',
                        null,
                        '\u56fe\u7247\u51fa\u9519\u65f6\u91cd\u8bd5\u6b21\u6570',
                      ),
                      l.createElement('td', null, 'string'),
                      l.createElement('td', null, '1'),
                      l.createElement('td', null),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'defaultSrc'),
                      l.createElement(
                        'td',
                        null,
                        '\u9ed8\u8ba4\u515c\u5e95\u56fe',
                      ),
                      l.createElement('td', null, 'string'),
                      l.createElement('td', null, '-'),
                      l.createElement('td', null),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'errDisplay'),
                      l.createElement(
                        'td',
                        null,
                        '\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u65f6\u662f\u5426\u9690\u85cf',
                      ),
                      l.createElement('td', null, 'boolean'),
                      l.createElement('td', null, '-'),
                      l.createElement('td', null),
                    ),
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('td', null, 'errorCallback'),
                      l.createElement(
                        'td',
                        null,
                        '\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u65f6\u56de\u8c03\u51fd\u6570',
                      ),
                      l.createElement('td', null, '() => void'),
                      l.createElement('td', null, '-'),
                      l.createElement('td', null),
                    ),
                  ),
                ),
                l.createElement(
                  'p',
                  null,
                  'More skills for writing demo: ',
                  l.createElement(
                    r.Link,
                    {
                      to:
                        'https://d.umijs.org/guide/basic#write-component-demo',
                    },
                    'https://d.umijs.org/guide/basic#write-component-demo',
                  ),
                ),
              ),
            ),
          );
        });
      t['default'] = e => {
        var t = l.useContext(r.context),
          n = t.demos;
        return (
          l.useEffect(() => {
            var t;
            null !== e &&
              void 0 !== e &&
              null !== (t = e.location) &&
              void 0 !== t &&
              t.hash &&
              r.AnchorLink.scrollToAnchor(
                decodeURIComponent(e.location.hash.slice(1)),
              );
          }, []),
          l.createElement(c, { demos: n })
        );
      };
    },
    32851: function(e, t, n) {
      'use strict';
      n.r(t);
      var l = n(67294),
        r = n(55697),
        a = n(37899),
        o = n(96089),
        c = n(65659);
      n(86845);
      function i(e, t) {
        return f(e) || s(e, t) || d(e, t) || u();
      }
      function u() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function d(e, t) {
        if (e) {
          if ('string' === typeof e) return m(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? m(e, t)
              : void 0
          );
        }
      }
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, l = new Array(t); n < t; n++) l[n] = e[n];
        return l;
      }
      function s(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var l,
            r,
            a = [],
            o = !0,
            c = !1;
          try {
            for (n = n.call(e); !(o = (l = n.next()).done); o = !0)
              if ((a.push(l.value), t && a.length === t)) break;
          } catch (i) {
            (c = !0), (r = i);
          } finally {
            try {
              o || null == n['return'] || n['return']();
            } finally {
              if (c) throw r;
            }
          }
          return a;
        }
      }
      function f(e) {
        if (Array.isArray(e)) return e;
      }
      function E(e, t) {
        var n,
          l =
            null === (n = e.match(/\.(\w+)$/)) || void 0 === n ? void 0 : n[1];
        return l || (l = t.tsx ? 'tsx' : 'jsx'), l;
      }
      var v = function(e) {
        var t,
          n,
          u,
          d = (0, l.useRef)(),
          m = (0, l.useContext)(o.context),
          s = m.locale,
          f = (0, o.useLocaleProps)(s, e),
          v = (0, o.useDemoUrl)(f.identifier),
          p = f.demoUrl || v,
          b =
            (null === a.m8 || void 0 === a.m8 ? void 0 : a.m8.location.hash) ===
            '#'.concat(f.identifier),
          h = 1 === Object.keys(f.sources).length,
          y = (0, o.useCodeSandbox)(
            (null === (t = f.hideActions) || void 0 === t
            ? void 0
            : t.includes('CSB'))
              ? null
              : f,
          ),
          g = (0, o.useRiddle)(
            (null === (n = f.hideActions) || void 0 === n
            ? void 0
            : n.includes('RIDDLE'))
              ? null
              : f,
          ),
          _ = (0, o.useMotions)(f.motions || [], d.current),
          w = i(_, 2),
          k = w[0],
          S = w[1],
          C = (0, o.useCopy)(),
          N = i(C, 2),
          A = N[0],
          x = N[1],
          L = (0, l.useState)(function() {
            return f.sources._ ? '_' : Object.keys(f.sources)[0];
          }),
          j = i(L, 2),
          I = j[0],
          O = j[1],
          R = (0, l.useState)(E(I, f.sources[I])),
          M = i(R, 2),
          T = M[0],
          U = M[1],
          D = (0, l.useState)(Boolean(f.defaultShowCode)),
          P = i(D, 2),
          $ = P[0],
          B = P[1],
          Z = (0, l.useState)(Math.random()),
          z = i(Z, 2),
          F = z[0],
          q = z[1],
          J = f.sources[I][T] || f.sources[I].content,
          W = (0, o.useTSPlaygroundUrl)(s, J),
          X = (0, l.useRef)(),
          G = (0, o.usePrefersColor)(),
          H = i(G, 1),
          K = H[0],
          Q = f.actionBarRender,
          V =
            void 0 === Q
              ? function(e) {
                  return e;
                }
              : Q;
        function Y(e) {
          O(e), U(E(e, f.sources[e]));
        }
        return (
          (0, l.useEffect)(
            function() {
              q(Math.random());
            },
            [K],
          ),
          l.createElement(
            'div',
            {
              style: f.style,
              className: [
                f.className,
                '__dumi-default-previewer',
                b ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: f.identifier,
              'data-debug': f.debug || void 0,
              'data-iframe': f.iframe || void 0,
            },
            f.iframe &&
              l.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            l.createElement(
              'div',
              {
                ref: d,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: f.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    f.compact || (f.iframe && !1 !== f.compact) ? '0' : void 0,
                  background: f.background,
                },
              },
              f.iframe
                ? l.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(f.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: F,
                    src: p,
                    ref: X,
                  })
                : f.children,
            ),
            l.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': f.title,
              },
              f.title &&
                l.createElement(
                  o.AnchorLink,
                  { to: '#'.concat(f.identifier) },
                  f.title,
                ),
              f.description &&
                l.createElement('div', {
                  dangerouslySetInnerHTML: { __html: f.description },
                }),
            ),
            l.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              V(
                l.createElement(
                  l.Fragment,
                  null,
                  y &&
                    l.createElement('button', {
                      title: 'Open demo on CodeSandbox.io',
                      className: '__dumi-default-icon',
                      role: 'codesandbox',
                      onClick: y,
                    }),
                  g &&
                    l.createElement('button', {
                      title: 'Open demo on Riddle',
                      className: '__dumi-default-icon',
                      role: 'riddle',
                      onClick: g,
                    }),
                  f.motions &&
                    l.createElement('button', {
                      title: 'Execute motions',
                      className: '__dumi-default-icon',
                      role: 'motions',
                      disabled: S,
                      onClick: function() {
                        return k();
                      },
                    }),
                  f.iframe &&
                    l.createElement('button', {
                      title: 'Reload demo iframe page',
                      className: '__dumi-default-icon',
                      role: 'refresh',
                      onClick: function() {
                        return q(Math.random());
                      },
                    }),
                  !(null === (u = f.hideActions) || void 0 === u
                    ? void 0
                    : u.includes('EXTERNAL')) &&
                    l.createElement(
                      o.Link,
                      { target: '_blank', to: p },
                      l.createElement('button', {
                        title: 'Open demo in new tab',
                        className: '__dumi-default-icon',
                        role: 'open-demo',
                        type: 'button',
                      }),
                    ),
                  l.createElement('span', null),
                  l.createElement('button', {
                    title: 'Copy source code',
                    className: '__dumi-default-icon',
                    role: 'copy',
                    'data-status': x,
                    onClick: function() {
                      return A(J);
                    },
                  }),
                  'tsx' === T &&
                    $ &&
                    l.createElement(
                      o.Link,
                      { target: '_blank', to: W },
                      l.createElement('button', {
                        title: 'Get JSX via TypeScript Playground',
                        className: '__dumi-default-icon',
                        role: 'change-tsx',
                        type: 'button',
                      }),
                    ),
                  l.createElement('button', {
                    title: 'Toggle source code panel',
                    className: '__dumi-default-icon'.concat(
                      $ ? ' __dumi-default-btn-expand' : '',
                    ),
                    role: 'source',
                    type: 'button',
                    onClick: function() {
                      return B(!$);
                    },
                  }),
                ),
              ),
            ),
            $ &&
              l.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !h &&
                  l.createElement(
                    r.Z,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: I,
                      onChange: Y,
                    },
                    Object.keys(f.sources).map(function(e) {
                      return l.createElement(r.J, {
                        tab:
                          '_' === e ? 'index.'.concat(E(e, f.sources[e])) : e,
                        key: e,
                      });
                    }),
                  ),
                l.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  l.createElement(c.Z, { code: J, lang: T, showCopy: !1 }),
                ),
              ),
          )
        );
      };
      t['default'] = v;
    },
    4187: function(e, t, n) {
      'use strict';
      var l = n(67294),
        r = n(97397),
        a = n.n(r);
      n(8036);
      function o(e, t) {
        return m(e) || d(e, t) || i(e, t) || c();
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function i(e, t) {
        if (e) {
          if ('string' === typeof e) return u(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? u(e, t)
              : void 0
          );
        }
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, l = new Array(t); n < t; n++) l[n] = e[n];
        return l;
      }
      function d(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var l,
            r,
            a = [],
            o = !0,
            c = !1;
          try {
            for (n = n.call(e); !(o = (l = n.next()).done); o = !0)
              if ((a.push(l.value), t && a.length === t)) break;
          } catch (i) {
            (c = !0), (r = i);
          } finally {
            try {
              o || null == n['return'] || n['return']();
            } finally {
              if (c) throw r;
            }
          }
          return a;
        }
      }
      function m(e) {
        if (Array.isArray(e)) return e;
      }
      var s = function(e) {
        var t = e.children,
          n = (0, l.useRef)(),
          r = (0, l.useState)(!1),
          c = o(r, 2),
          i = c[0],
          u = c[1],
          d = (0, l.useState)(!1),
          m = o(d, 2),
          s = m[0],
          f = m[1];
        return (
          (0, l.useEffect)(function() {
            var e = n.current,
              t = a()(function() {
                u(e.scrollLeft > 0),
                  f(e.scrollLeft < e.scrollWidth - e.offsetWidth);
              }, 100);
            return (
              t(),
              e.addEventListener('scroll', t),
              window.addEventListener('resize', t),
              function() {
                e.removeEventListener('scroll', t),
                  window.removeEventListener('resize', t);
              }
            );
          }, []),
          l.createElement(
            'div',
            { className: '__dumi-default-table' },
            l.createElement(
              'div',
              {
                className: '__dumi-default-table-content',
                ref: n,
                'data-left-folded': i || void 0,
                'data-right-folded': s || void 0,
              },
              l.createElement('table', null, t),
            ),
          )
        );
      };
      t['Z'] = s;
    },
  },
]);
