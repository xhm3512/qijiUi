(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [658],
  {
    86845: function() {},
    85716: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        o = n(96089),
        a = n(32851),
        l = r.memo(e => {
          var t = e.demos,
            n = t['brokenLine-demo'].component;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement('p', null, 'Demo:'),
              ),
              r.createElement(
                a.default,
                t['brokenLine-demo'].previewerProps,
                r.createElement(n, null),
              ),
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  'p',
                  null,
                  '\u57fa\u4e8e antdV \u7ec4\u4ef6\u4e8c\u6b21\u5f00\u53d1',
                ),
                r.createElement(
                  'p',
                  null,
                  'More skills for writing demo: ',
                  r.createElement(
                    o.Link,
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
        var t = r.useContext(o.context),
          n = t.demos;
        return (
          r.useEffect(() => {
            var t;
            null !== e &&
              void 0 !== e &&
              null !== (t = e.location) &&
              void 0 !== t &&
              t.hash &&
              o.AnchorLink.scrollToAnchor(
                decodeURIComponent(e.location.hash.slice(1)),
              );
          }, []),
          r.createElement(l, { demos: n })
        );
      };
    },
    32851: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        o = n(55697),
        a = n(37899),
        l = n(96089),
        i = n(65659);
      n(86845);
      function c(e, t) {
        return f(e) || m(e, t) || s(e, t) || u();
      }
      function u() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function s(e, t) {
        if (e) {
          if ('string' === typeof e) return d(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? d(e, t)
              : void 0
          );
        }
      }
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function m(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            a = [],
            l = !0,
            i = !1;
          try {
            for (n = n.call(e); !(l = (r = n.next()).done); l = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (c) {
            (i = !0), (o = c);
          } finally {
            try {
              l || null == n['return'] || n['return']();
            } finally {
              if (i) throw o;
            }
          }
          return a;
        }
      }
      function f(e) {
        if (Array.isArray(e)) return e;
      }
      function p(e, t) {
        var n,
          r =
            null === (n = e.match(/\.(\w+)$/)) || void 0 === n ? void 0 : n[1];
        return r || (r = t.tsx ? 'tsx' : 'jsx'), r;
      }
      var v = function(e) {
        var t,
          n,
          u,
          s = (0, r.useRef)(),
          d = (0, r.useContext)(l.context),
          m = d.locale,
          f = (0, l.useLocaleProps)(m, e),
          v = (0, l.useDemoUrl)(f.identifier),
          b = f.demoUrl || v,
          _ =
            (null === a.m8 || void 0 === a.m8 ? void 0 : a.m8.location.hash) ===
            '#'.concat(f.identifier),
          E = 1 === Object.keys(f.sources).length,
          h = (0, l.useCodeSandbox)(
            (null === (t = f.hideActions) || void 0 === t
            ? void 0
            : t.includes('CSB'))
              ? null
              : f,
          ),
          y = (0, l.useRiddle)(
            (null === (n = f.hideActions) || void 0 === n
            ? void 0
            : n.includes('RIDDLE'))
              ? null
              : f,
          ),
          g = (0, l.useMotions)(f.motions || [], s.current),
          k = c(g, 2),
          w = k[0],
          C = k[1],
          N = (0, l.useCopy)(),
          x = c(N, 2),
          S = x[0],
          A = x[1],
          j = (0, r.useState)(function() {
            return f.sources._ ? '_' : Object.keys(f.sources)[0];
          }),
          L = c(j, 2),
          R = L[0],
          O = L[1],
          I = (0, r.useState)(p(R, f.sources[R])),
          M = c(I, 2),
          T = M[0],
          P = M[1],
          U = (0, r.useState)(Boolean(f.defaultShowCode)),
          B = c(U, 2),
          D = B[0],
          $ = B[1],
          F = (0, r.useState)(Math.random()),
          q = c(F, 2),
          J = q[0],
          X = q[1],
          Z = f.sources[R][T] || f.sources[R].content,
          G = (0, l.useTSPlaygroundUrl)(m, Z),
          H = (0, r.useRef)(),
          K = (0, l.usePrefersColor)(),
          V = c(K, 1),
          z = V[0],
          Q = f.actionBarRender,
          W =
            void 0 === Q
              ? function(e) {
                  return e;
                }
              : Q;
        function Y(e) {
          O(e), P(p(e, f.sources[e]));
        }
        return (
          (0, r.useEffect)(
            function() {
              X(Math.random());
            },
            [z],
          ),
          r.createElement(
            'div',
            {
              style: f.style,
              className: [
                f.className,
                '__dumi-default-previewer',
                _ ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: f.identifier,
              'data-debug': f.debug || void 0,
              'data-iframe': f.iframe || void 0,
            },
            f.iframe &&
              r.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            r.createElement(
              'div',
              {
                ref: s,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: f.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    f.compact || (f.iframe && !1 !== f.compact) ? '0' : void 0,
                  background: f.background,
                },
              },
              f.iframe
                ? r.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(f.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: J,
                    src: b,
                    ref: H,
                  })
                : f.children,
            ),
            r.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': f.title,
              },
              f.title &&
                r.createElement(
                  l.AnchorLink,
                  { to: '#'.concat(f.identifier) },
                  f.title,
                ),
              f.description &&
                r.createElement('div', {
                  dangerouslySetInnerHTML: { __html: f.description },
                }),
            ),
            r.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              W(
                r.createElement(
                  r.Fragment,
                  null,
                  h &&
                    r.createElement('button', {
                      title: 'Open demo on CodeSandbox.io',
                      className: '__dumi-default-icon',
                      role: 'codesandbox',
                      onClick: h,
                    }),
                  y &&
                    r.createElement('button', {
                      title: 'Open demo on Riddle',
                      className: '__dumi-default-icon',
                      role: 'riddle',
                      onClick: y,
                    }),
                  f.motions &&
                    r.createElement('button', {
                      title: 'Execute motions',
                      className: '__dumi-default-icon',
                      role: 'motions',
                      disabled: C,
                      onClick: function() {
                        return w();
                      },
                    }),
                  f.iframe &&
                    r.createElement('button', {
                      title: 'Reload demo iframe page',
                      className: '__dumi-default-icon',
                      role: 'refresh',
                      onClick: function() {
                        return X(Math.random());
                      },
                    }),
                  !(null === (u = f.hideActions) || void 0 === u
                    ? void 0
                    : u.includes('EXTERNAL')) &&
                    r.createElement(
                      l.Link,
                      { target: '_blank', to: b },
                      r.createElement('button', {
                        title: 'Open demo in new tab',
                        className: '__dumi-default-icon',
                        role: 'open-demo',
                        type: 'button',
                      }),
                    ),
                  r.createElement('span', null),
                  r.createElement('button', {
                    title: 'Copy source code',
                    className: '__dumi-default-icon',
                    role: 'copy',
                    'data-status': A,
                    onClick: function() {
                      return S(Z);
                    },
                  }),
                  'tsx' === T &&
                    D &&
                    r.createElement(
                      l.Link,
                      { target: '_blank', to: G },
                      r.createElement('button', {
                        title: 'Get JSX via TypeScript Playground',
                        className: '__dumi-default-icon',
                        role: 'change-tsx',
                        type: 'button',
                      }),
                    ),
                  r.createElement('button', {
                    title: 'Toggle source code panel',
                    className: '__dumi-default-icon'.concat(
                      D ? ' __dumi-default-btn-expand' : '',
                    ),
                    role: 'source',
                    type: 'button',
                    onClick: function() {
                      return $(!D);
                    },
                  }),
                ),
              ),
            ),
            D &&
              r.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !E &&
                  r.createElement(
                    o.Z,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: R,
                      onChange: Y,
                    },
                    Object.keys(f.sources).map(function(e) {
                      return r.createElement(o.J, {
                        tab:
                          '_' === e ? 'index.'.concat(p(e, f.sources[e])) : e,
                        key: e,
                      });
                    }),
                  ),
                r.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  r.createElement(i.Z, { code: Z, lang: T, showCopy: !1 }),
                ),
              ),
          )
        );
      };
      t['default'] = v;
    },
  },
]);
