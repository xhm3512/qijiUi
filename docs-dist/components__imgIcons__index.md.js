(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [432],
  {
    86845: function() {},
    8036: function() {},
    94345: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        l = n(96089),
        a = n(32851),
        o = n(4187),
        c = r.memo(e => {
          var t = e.demos,
            n = t['imgIcons-demo'].component;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  'h2',
                  { id: 'icon-\u56fe\u6807' },
                  r.createElement(
                    l.AnchorLink,
                    {
                      to: '#icon-\u56fe\u6807',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'Icon \u56fe\u6807',
                ),
                r.createElement(
                  'p',
                  null,
                  '\u8bed\u4e49\u5316\u7684\u77e2\u91cf\u56fe\u5f62\uff0c\u57fa\u4e8e antd \u56fe\u6807\u7ec4\u4ef6\u5f00\u53d1',
                ),
                r.createElement(
                  'h3',
                  { id: '\u56fe\u6807\u5217\u8868' },
                  r.createElement(
                    l.AnchorLink,
                    {
                      to: '#\u56fe\u6807\u5217\u8868',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u56fe\u6807\u5217\u8868',
                ),
              ),
              r.createElement(
                a.default,
                t['imgIcons-demo'].previewerProps,
                r.createElement(n, null),
              ),
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  'h2',
                  { id: 'api' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'API',
                ),
                r.createElement(
                  'p',
                  null,
                  r.createElement('code', null, 'Icon'),
                  ' \u4e2d\u7684 ',
                  r.createElement('code', null, 'component'),
                  ' \u7ec4\u4ef6\u7684\u63a5\u53d7\u7684\u5c5e\u6027\u5982\u4e0b\uff1a',
                ),
                r.createElement(
                  o.Z,
                  null,
                  r.createElement(
                    'thead',
                    null,
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('th', null, '\u5b57\u6bb5'),
                      r.createElement('th', null, '\u8bf4\u660e'),
                      r.createElement('th', null, '\u7c7b\u578b'),
                      r.createElement('th', null, '\u53ea\u8bfb\u503c'),
                      r.createElement('th', null, '\u7248\u672c'),
                    ),
                  ),
                  r.createElement(
                    'tbody',
                    null,
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'className'),
                      r.createElement(
                        'td',
                        null,
                        '\u8ba1\u7b97\u540e\u7684 ',
                        r.createElement('code', null, 'svg'),
                        ' \u7c7b\u540d',
                      ),
                      r.createElement('td', null, 'string'),
                      r.createElement('td', null, '-'),
                      r.createElement('td', null),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'height'),
                      r.createElement(
                        'td',
                        null,
                        r.createElement('code', null, 'svg'),
                        ' \u5143\u7d20\u9ad8\u5ea6',
                      ),
                      r.createElement('td', null, 'string | number'),
                      r.createElement(
                        'td',
                        null,
                        r.createElement('code', null, '1em'),
                      ),
                      r.createElement('td', null),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'style'),
                      r.createElement(
                        'td',
                        null,
                        '\u8ba1\u7b97\u540e\u7684 ',
                        r.createElement('code', null, 'svg'),
                        ' \u5143\u7d20\u6837\u5f0f',
                      ),
                      r.createElement('td', null, 'CSSProperties'),
                      r.createElement('td', null, '-'),
                      r.createElement('td', null),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'width'),
                      r.createElement(
                        'td',
                        null,
                        r.createElement('code', null, 'svg'),
                        ' \u5143\u7d20\u5bbd\u5ea6',
                      ),
                      r.createElement('td', null, 'string | number'),
                      r.createElement(
                        'td',
                        null,
                        r.createElement('code', null, '1em'),
                      ),
                      r.createElement('td', null),
                    ),
                  ),
                ),
              ),
            ),
          );
        });
      t['default'] = e => {
        var t = r.useContext(l.context),
          n = t.demos;
        return (
          r.useEffect(() => {
            var t;
            null !== e &&
              void 0 !== e &&
              null !== (t = e.location) &&
              void 0 !== t &&
              t.hash &&
              l.AnchorLink.scrollToAnchor(
                decodeURIComponent(e.location.hash.slice(1)),
              );
          }, []),
          r.createElement(c, { demos: n })
        );
      };
    },
    32851: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        l = n(55697),
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
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            l,
            a = [],
            o = !0,
            c = !1;
          try {
            for (n = n.call(e); !(o = (r = n.next()).done); o = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (i) {
            (c = !0), (l = i);
          } finally {
            try {
              o || null == n['return'] || n['return']();
            } finally {
              if (c) throw l;
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
          r =
            null === (n = e.match(/\.(\w+)$/)) || void 0 === n ? void 0 : n[1];
        return r || (r = t.tsx ? 'tsx' : 'jsx'), r;
      }
      var v = function(e) {
        var t,
          n,
          u,
          d = (0, r.useRef)(),
          m = (0, r.useContext)(o.context),
          s = m.locale,
          f = (0, o.useLocaleProps)(s, e),
          v = (0, o.useDemoUrl)(f.identifier),
          p = f.demoUrl || v,
          h =
            (null === a.m8 || void 0 === a.m8 ? void 0 : a.m8.location.hash) ===
            '#'.concat(f.identifier),
          b = 1 === Object.keys(f.sources).length,
          y = (0, o.useCodeSandbox)(
            (null === (t = f.hideActions) || void 0 === t
            ? void 0
            : t.includes('CSB'))
              ? null
              : f,
          ),
          _ = (0, o.useRiddle)(
            (null === (n = f.hideActions) || void 0 === n
            ? void 0
            : n.includes('RIDDLE'))
              ? null
              : f,
          ),
          g = (0, o.useMotions)(f.motions || [], d.current),
          w = i(g, 2),
          k = w[0],
          S = w[1],
          N = (0, o.useCopy)(),
          A = i(N, 2),
          C = A[0],
          x = A[1],
          I = (0, r.useState)(function() {
            return f.sources._ ? '_' : Object.keys(f.sources)[0];
          }),
          L = i(I, 2),
          j = L[0],
          O = L[1],
          R = (0, r.useState)(E(j, f.sources[j])),
          T = i(R, 2),
          M = T[0],
          P = T[1],
          U = (0, r.useState)(Boolean(f.defaultShowCode)),
          $ = i(U, 2),
          B = $[0],
          Z = $[1],
          D = (0, r.useState)(Math.random()),
          F = i(D, 2),
          q = F[0],
          z = F[1],
          J = f.sources[j][M] || f.sources[j].content,
          W = (0, o.useTSPlaygroundUrl)(s, J),
          X = (0, r.useRef)(),
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
          O(e), P(E(e, f.sources[e]));
        }
        return (
          (0, r.useEffect)(
            function() {
              z(Math.random());
            },
            [K],
          ),
          r.createElement(
            'div',
            {
              style: f.style,
              className: [
                f.className,
                '__dumi-default-previewer',
                h ? '__dumi-default-previewer-target' : '',
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
                ? r.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(f.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: q,
                    src: p,
                    ref: X,
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
                  o.AnchorLink,
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
              V(
                r.createElement(
                  r.Fragment,
                  null,
                  y &&
                    r.createElement('button', {
                      title: 'Open demo on CodeSandbox.io',
                      className: '__dumi-default-icon',
                      role: 'codesandbox',
                      onClick: y,
                    }),
                  _ &&
                    r.createElement('button', {
                      title: 'Open demo on Riddle',
                      className: '__dumi-default-icon',
                      role: 'riddle',
                      onClick: _,
                    }),
                  f.motions &&
                    r.createElement('button', {
                      title: 'Execute motions',
                      className: '__dumi-default-icon',
                      role: 'motions',
                      disabled: S,
                      onClick: function() {
                        return k();
                      },
                    }),
                  f.iframe &&
                    r.createElement('button', {
                      title: 'Reload demo iframe page',
                      className: '__dumi-default-icon',
                      role: 'refresh',
                      onClick: function() {
                        return z(Math.random());
                      },
                    }),
                  !(null === (u = f.hideActions) || void 0 === u
                    ? void 0
                    : u.includes('EXTERNAL')) &&
                    r.createElement(
                      o.Link,
                      { target: '_blank', to: p },
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
                    'data-status': x,
                    onClick: function() {
                      return C(J);
                    },
                  }),
                  'tsx' === M &&
                    B &&
                    r.createElement(
                      o.Link,
                      { target: '_blank', to: W },
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
                      B ? ' __dumi-default-btn-expand' : '',
                    ),
                    role: 'source',
                    type: 'button',
                    onClick: function() {
                      return Z(!B);
                    },
                  }),
                ),
              ),
            ),
            B &&
              r.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !b &&
                  r.createElement(
                    l.Z,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: j,
                      onChange: Y,
                    },
                    Object.keys(f.sources).map(function(e) {
                      return r.createElement(l.J, {
                        tab:
                          '_' === e ? 'index.'.concat(E(e, f.sources[e])) : e,
                        key: e,
                      });
                    }),
                  ),
                r.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  r.createElement(c.Z, { code: J, lang: M, showCopy: !1 }),
                ),
              ),
          )
        );
      };
      t['default'] = v;
    },
    4187: function(e, t, n) {
      'use strict';
      var r = n(67294),
        l = n(97397),
        a = n.n(l);
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
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function d(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            l,
            a = [],
            o = !0,
            c = !1;
          try {
            for (n = n.call(e); !(o = (r = n.next()).done); o = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (i) {
            (c = !0), (l = i);
          } finally {
            try {
              o || null == n['return'] || n['return']();
            } finally {
              if (c) throw l;
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
          n = (0, r.useRef)(),
          l = (0, r.useState)(!1),
          c = o(l, 2),
          i = c[0],
          u = c[1],
          d = (0, r.useState)(!1),
          m = o(d, 2),
          s = m[0],
          f = m[1];
        return (
          (0, r.useEffect)(function() {
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
          r.createElement(
            'div',
            { className: '__dumi-default-table' },
            r.createElement(
              'div',
              {
                className: '__dumi-default-table-content',
                ref: n,
                'data-left-folded': i || void 0,
                'data-right-folded': s || void 0,
              },
              r.createElement('table', null, t),
            ),
          )
        );
      };
      t['Z'] = s;
    },
  },
]);
