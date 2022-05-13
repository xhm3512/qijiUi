(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [819],
  {
    86845: function() {},
    8036: function() {},
    52951: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        l = n(96089),
        a = n(32851),
        c = n(4187),
        o = r.memo(e => {
          var t = e.demos,
            n = t['button-demo'].component,
            o = t['button-demo-1'].component,
            i = t['button-demo-2'].component;
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
                  { id: 'primary' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#primary', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'primary',
                ),
                r.createElement('p', null, 'Demo:'),
              ),
              r.createElement(
                a.default,
                t['button-demo'].previewerProps,
                r.createElement(n, null),
              ),
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  'h2',
                  { id: 'outline' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#outline', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'outline',
                ),
                r.createElement('p', null, 'Demo:'),
              ),
              r.createElement(
                a.default,
                t['button-demo-1'].previewerProps,
                r.createElement(o, null),
              ),
              r.createElement(
                'div',
                { className: 'markdown' },
                r.createElement(
                  'h2',
                  { id: 'secondary' },
                  r.createElement(
                    l.AnchorLink,
                    { to: '#secondary', 'aria-hidden': 'true', tabIndex: -1 },
                    r.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'secondary',
                ),
                r.createElement('p', null, 'Demo:'),
              ),
              r.createElement(
                a.default,
                t['button-demo-2'].previewerProps,
                r.createElement(i, null),
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
                  '\u901a\u8fc7\u8bbe\u7f6e Button \u7684\u5c5e\u6027\u6765\u4ea7\u751f\u4e0d\u540c\u7684\u6309\u94ae\u6837\u5f0f\uff0c\u63a8\u8350\u987a\u5e8f\u4e3a\uff1atype -> shape -> size -> loading -> disabled\u3002',
                ),
                r.createElement(
                  'p',
                  null,
                  '\u6309\u94ae\u7684\u5c5e\u6027\u8bf4\u660e\u5982\u4e0b\uff1a',
                ),
                r.createElement(
                  c.Z,
                  null,
                  r.createElement(
                    'thead',
                    null,
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('th', null, '\u5c5e\u6027'),
                      r.createElement(
                        'th',
                        { align: 'center' },
                        '\u8bf4\u660e',
                      ),
                      r.createElement(
                        'th',
                        { align: 'center' },
                        '\u7c7b\u578b',
                      ),
                      r.createElement(
                        'th',
                        { align: 'center' },
                        '\u9ed8\u8ba4\u503c',
                      ),
                      r.createElement('th', { align: 'right' }, '\u7248\u672c'),
                    ),
                  ),
                  r.createElement(
                    'tbody',
                    null,
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'type'),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        '\u8bbe\u7f6e\u6309\u94ae\u7c7b\u578b',
                      ),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        r.createElement('code', null, 'primary'),
                        ' | ',
                        r.createElement('code', null, 'secondary'),
                        ' | ',
                        r.createElement('code', null, 'outline'),
                      ),
                      r.createElement('td', { align: 'center' }, 'default'),
                      r.createElement('td', { align: 'right' }),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'onClick'),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        '\u70b9\u51fb\u6309\u94ae\u65f6\u7684\u56de\u8c03',
                      ),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        r.createElement('code', null, '(event) => void'),
                      ),
                      r.createElement('td', { align: 'center' }, '-'),
                      r.createElement('td', { align: 'right' }),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'disabled'),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        '\u6309\u94ae\u5931\u6548\u72b6\u6001',
                      ),
                      r.createElement('td', { align: 'center' }, 'boolean'),
                      r.createElement('td', { align: 'center' }, 'false'),
                      r.createElement('td', { align: 'right' }),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'icon'),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        '\u8bbe\u7f6e\u6309\u94ae\u7684\u56fe\u6807\u7ec4\u4ef6',
                      ),
                      r.createElement('td', { align: 'center' }, 'ReactNode'),
                      r.createElement('td', { align: 'center' }, '-'),
                      r.createElement('td', { align: 'right' }),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'size'),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        '\u8bbe\u7f6e\u6309\u94ae\u5927\u5c0f',
                      ),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        r.createElement('code', null, 'large'),
                        ' | ',
                        r.createElement('code', null, 'middle'),
                        ' | ',
                        r.createElement('code', null, 'small'),
                      ),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        r.createElement('code', null, 'middle'),
                      ),
                      r.createElement('td', { align: 'right' }),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'loading'),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        '\u8bbe\u7f6e\u6309\u94ae\u8f7d\u5165\u72b6\u6001',
                      ),
                      r.createElement('td', { align: 'center' }, 'boolean'),
                      r.createElement('td', { align: 'center' }, 'false'),
                      r.createElement('td', { align: 'right' }),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'hover'),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        '\u662f\u5426\u76f4\u63a5\u5c55\u793a hover \u6548\u679c',
                      ),
                      r.createElement('td', { align: 'center' }, 'boolean'),
                      r.createElement('td', { align: 'center' }, 'false'),
                      r.createElement('td', { align: 'right' }),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'htmlType'),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        '\u8bbe\u7f6e ',
                        r.createElement('code', null, 'button'),
                        ' \u539f\u751f\u7684 ',
                        r.createElement('code', null, 'type'),
                        ' \u503c\uff0c\u53ef\u9009\u503c\u8bf7\u53c2\u8003 ',
                        r.createElement(
                          l.Link,
                          {
                            to:
                              'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type',
                          },
                          'HTML \u6807\u51c6',
                        ),
                      ),
                      r.createElement('td', { align: 'center' }, 'string'),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        r.createElement('code', null, 'button'),
                      ),
                      r.createElement('td', { align: 'right' }),
                    ),
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('td', null, 'className'),
                      r.createElement(
                        'td',
                        { align: 'center' },
                        '\u81ea\u5b9a\u4e49 className',
                      ),
                      r.createElement('td', { align: 'center' }, 'string'),
                      r.createElement('td', { align: 'center' }, '-'),
                      r.createElement('td', { align: 'right' }),
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
          r.createElement(o, { demos: n })
        );
      };
    },
    32851: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(67294),
        l = n(55697),
        a = n(37899),
        c = n(96089),
        o = n(65659);
      n(86845);
      function i(e, t) {
        return E(e) || s(e, t) || u(e, t) || d();
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function u(e, t) {
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
            c = !0,
            o = !1;
          try {
            for (n = n.call(e); !(c = (r = n.next()).done); c = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (i) {
            (o = !0), (l = i);
          } finally {
            try {
              c || null == n['return'] || n['return']();
            } finally {
              if (o) throw l;
            }
          }
          return a;
        }
      }
      function E(e) {
        if (Array.isArray(e)) return e;
      }
      function f(e, t) {
        var n,
          r =
            null === (n = e.match(/\.(\w+)$/)) || void 0 === n ? void 0 : n[1];
        return r || (r = t.tsx ? 'tsx' : 'jsx'), r;
      }
      var p = function(e) {
        var t,
          n,
          d,
          u = (0, r.useRef)(),
          m = (0, r.useContext)(c.context),
          s = m.locale,
          E = (0, c.useLocaleProps)(s, e),
          p = (0, c.useDemoUrl)(E.identifier),
          g = E.demoUrl || p,
          v =
            (null === a.m8 || void 0 === a.m8 ? void 0 : a.m8.location.hash) ===
            '#'.concat(E.identifier),
          h = 1 === Object.keys(E.sources).length,
          b = (0, c.useCodeSandbox)(
            (null === (t = E.hideActions) || void 0 === t
            ? void 0
            : t.includes('CSB'))
              ? null
              : E,
          ),
          y = (0, c.useRiddle)(
            (null === (n = E.hideActions) || void 0 === n
            ? void 0
            : n.includes('RIDDLE'))
              ? null
              : E,
          ),
          _ = (0, c.useMotions)(E.motions || [], u.current),
          k = i(_, 2),
          w = k[0],
          N = k[1],
          S = (0, c.useCopy)(),
          A = i(S, 2),
          C = A[0],
          x = A[1],
          L = (0, r.useState)(function() {
            return E.sources._ ? '_' : Object.keys(E.sources)[0];
          }),
          I = i(L, 2),
          j = I[0],
          R = I[1],
          T = (0, r.useState)(f(j, E.sources[j])),
          O = i(T, 2),
          M = O[0],
          P = O[1],
          U = (0, r.useState)(Boolean(E.defaultShowCode)),
          D = i(U, 2),
          z = D[0],
          B = D[1],
          $ = (0, r.useState)(Math.random()),
          Z = i($, 2),
          F = Z[0],
          H = Z[1],
          W = E.sources[j][M] || E.sources[j].content,
          q = (0, c.useTSPlaygroundUrl)(s, W),
          J = (0, r.useRef)(),
          X = (0, c.usePrefersColor)(),
          G = i(X, 1),
          K = G[0],
          Q = E.actionBarRender,
          V =
            void 0 === Q
              ? function(e) {
                  return e;
                }
              : Q;
        function Y(e) {
          R(e), P(f(e, E.sources[e]));
        }
        return (
          (0, r.useEffect)(
            function() {
              H(Math.random());
            },
            [K],
          ),
          r.createElement(
            'div',
            {
              style: E.style,
              className: [
                E.className,
                '__dumi-default-previewer',
                v ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: E.identifier,
              'data-debug': E.debug || void 0,
              'data-iframe': E.iframe || void 0,
            },
            E.iframe &&
              r.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            r.createElement(
              'div',
              {
                ref: u,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: E.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    E.compact || (E.iframe && !1 !== E.compact) ? '0' : void 0,
                  background: E.background,
                },
              },
              E.iframe
                ? r.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(E.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: F,
                    src: g,
                    ref: J,
                  })
                : E.children,
            ),
            r.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': E.title,
              },
              E.title &&
                r.createElement(
                  c.AnchorLink,
                  { to: '#'.concat(E.identifier) },
                  E.title,
                ),
              E.description &&
                r.createElement('div', {
                  dangerouslySetInnerHTML: { __html: E.description },
                }),
            ),
            r.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              V(
                r.createElement(
                  r.Fragment,
                  null,
                  b &&
                    r.createElement('button', {
                      title: 'Open demo on CodeSandbox.io',
                      className: '__dumi-default-icon',
                      role: 'codesandbox',
                      onClick: b,
                    }),
                  y &&
                    r.createElement('button', {
                      title: 'Open demo on Riddle',
                      className: '__dumi-default-icon',
                      role: 'riddle',
                      onClick: y,
                    }),
                  E.motions &&
                    r.createElement('button', {
                      title: 'Execute motions',
                      className: '__dumi-default-icon',
                      role: 'motions',
                      disabled: N,
                      onClick: function() {
                        return w();
                      },
                    }),
                  E.iframe &&
                    r.createElement('button', {
                      title: 'Reload demo iframe page',
                      className: '__dumi-default-icon',
                      role: 'refresh',
                      onClick: function() {
                        return H(Math.random());
                      },
                    }),
                  !(null === (d = E.hideActions) || void 0 === d
                    ? void 0
                    : d.includes('EXTERNAL')) &&
                    r.createElement(
                      c.Link,
                      { target: '_blank', to: g },
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
                      return C(W);
                    },
                  }),
                  'tsx' === M &&
                    z &&
                    r.createElement(
                      c.Link,
                      { target: '_blank', to: q },
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
                      z ? ' __dumi-default-btn-expand' : '',
                    ),
                    role: 'source',
                    type: 'button',
                    onClick: function() {
                      return B(!z);
                    },
                  }),
                ),
              ),
            ),
            z &&
              r.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !h &&
                  r.createElement(
                    l.Z,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: j,
                      onChange: Y,
                    },
                    Object.keys(E.sources).map(function(e) {
                      return r.createElement(l.J, {
                        tab:
                          '_' === e ? 'index.'.concat(f(e, E.sources[e])) : e,
                        key: e,
                      });
                    }),
                  ),
                r.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  r.createElement(o.Z, { code: W, lang: M, showCopy: !1 }),
                ),
              ),
          )
        );
      };
      t['default'] = p;
    },
    4187: function(e, t, n) {
      'use strict';
      var r = n(67294),
        l = n(97397),
        a = n.n(l);
      n(8036);
      function c(e, t) {
        return m(e) || u(e, t) || i(e, t) || o();
      }
      function o() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function i(e, t) {
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
      function u(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            l,
            a = [],
            c = !0,
            o = !1;
          try {
            for (n = n.call(e); !(c = (r = n.next()).done); c = !0)
              if ((a.push(r.value), t && a.length === t)) break;
          } catch (i) {
            (o = !0), (l = i);
          } finally {
            try {
              c || null == n['return'] || n['return']();
            } finally {
              if (o) throw l;
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
          o = c(l, 2),
          i = o[0],
          d = o[1],
          u = (0, r.useState)(!1),
          m = c(u, 2),
          s = m[0],
          E = m[1];
        return (
          (0, r.useEffect)(function() {
            var e = n.current,
              t = a()(function() {
                d(e.scrollLeft > 0),
                  E(e.scrollLeft < e.scrollWidth - e.offsetWidth);
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
