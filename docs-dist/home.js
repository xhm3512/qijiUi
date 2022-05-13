(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [177, 463],
  {
    37836: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function() {
            return k;
          },
        });
      var o = n(44742),
        r = n(67294),
        c = (e, t) => {
          var n = {};
          if (e.ctrlKey && e.shiftKey) {
            var o = e.keyCode;
            (n = {
              72: { type: 'high', func: 'setFontColor', color: '#D9001B' },
              83: { type: 'middle', func: 'setFontColor', color: '#F59A23' },
              76: { type: 'low', func: 'setFontColor', color: '#70B603' },
              68: { type: 'risk', func: 'setFontColor', color: '#8400FF' },
              78: { type: 'line', func: 'strikeThrough' },
              88: { type: 'clear', func: 'removeFormat' },
            }),
              n[+o] && t(n[+o]);
          }
        },
        a = c,
        l = {
          high: 'rgb(217, 0, 27)',
          middle: 'rgb(245, 154, 35)',
          low: 'rgb(112, 182, 3)',
          risk: 'rgb(132, 0, 255)',
        },
        i = {
          high: '#D9001B',
          middle: '#F59A23',
          low: '#70B603',
          risk: '#8400FF',
        },
        f = {
          'rgb(217, 0, 27)': 'high',
          'rgb(245, 154, 35)': 'middle',
          'rgb(112, 182, 3)': 'low',
          'rgb(132, 0, 255)': 'risk',
        },
        u = n(56361),
        s = () => {
          var e;
          null === (e = document.getSelection()) || void 0 === e || e.empty();
        },
        d = e => {
          var t = e || window.event;
          return { x: t.clientX, y: t.clientY };
        };
      function m(e, t) {
        return e.currentStyle
          ? e.currentStyle[t]
          : getComputedStyle(e, null)[t];
      }
      var h = e => {
          var t =
            e.nodeName &&
            '#text' !== e.nodeName &&
            (e.getAttribute('style') || 'STRIKE' === e.nodeName);
          return t
            ? {
                backColor: f[m(e, 'background-color')],
                styleLineThrough:
                  'line-through' === m(e, 'text-decoration-line') ||
                  'STRIKE' === e.nodeName
                    ? 'STRIKE'
                    : '',
              }
            : {};
        },
        g = (e, t) => {
          var n = h(e),
            o = n.backColor,
            r = n.styleLineThrough,
            c = e.offsetLeft,
            a = e.offsetWidth,
            l = e.innerText,
            i = e.offsetTop,
            f = { offsetLeft: c, offsetWidth: a, innerText: l, offsetTop: i };
          o && t.push((0, u.Z)((0, u.Z)({}, f), {}, { type: o })),
            r && t.push((0, u.Z)((0, u.Z)({}, f), {}, { type: r }));
        },
        b = e => {
          var t = [];
          try {
            [].slice.call(e).forEach(e => {
              var n = e.getAttribute('data-check'),
                o = h(e),
                r = o.backColor,
                c = o.styleLineThrough;
              'P' === e.nodeName ||
                '1' === n ||
                (!r && 'STRIKE' !== e.nodeName && 'line-through' !== c) ||
                g(e, t);
            });
          } catch (n) {
            console.log('filterDomFunc\u5f02\u5e38', n);
          }
          return t;
        };
      function p() {
        if (window.getSelection) return window.getSelection();
        var e = document;
        return e.selection ? e.selection.createRange() : null;
      }
      var v = (e, t) => {
          var n = {
              high: 'rgb(217, 0, 27)',
              middle: 'rgb(245, 154, 35)',
              low: 'rgb(112, 182, 3)',
              risk: 'rgb(132, 0, 255)',
            },
            o = n[e],
            r = '<font color="#ffffff" style=""><span style="background-color: '.concat(
              o,
              ';"></span></font>',
            ),
            c = '<span style="background-color: '.concat(
              o,
              ';"><font color="#ffffff">.*<\\/font></span>',
            ),
            a = '<font color="#ffffff" style="background-color: '.concat(
              o,
              ';"><font</font>|<span</span></font>',
            ),
            l = '<font style="background-color: '.concat(
              o,
              ';" color="#ffffff"><font</font>|<span</span></font>',
            ),
            i = '<p></p>',
            f = '<strike></strike>';
          return !(
            r.match(t) ||
            c.match(t) ||
            a.match(t) ||
            l.match(t) ||
            i.match(t) ||
            f.match(t)
          );
        },
        y = e => {
          var t = e.text,
            n = e.manSpamWords,
            c = e.machineWords,
            f = e.onSubmitHtml,
            u = e.manSpamHtml,
            m = (0, r.useRef)(null),
            h = (0, r.useState)('0'),
            g = (0, o.default)(h, 2),
            y = g[0],
            k = g[1],
            E = (0, r.useState)('0'),
            w = (0, o.default)(E, 2),
            x = w[0],
            C = w[1],
            T = (0, r.useState)('0'),
            O = (0, o.default)(T, 2),
            S = O[0],
            F = O[1],
            N = () => {
              var e = t;
              return n
                ? (Object.keys(n).map(t => {
                    var o = n[t];
                    (null === o || void 0 === o ? void 0 : o.length) > 0 &&
                      o.forEach(n => {
                        if (v(t, n)) {
                          var o = new RegExp(n, 'g');
                          e =
                            'line' === t
                              ? e.replace(o, '<strike>'.concat(n, '</strike>'))
                              : e.replace(
                                  o,
                                  '<font color="#ffffff" style="background-color: '
                                    .concat(l[t], ';">')
                                    .concat(n, '</font>'),
                                );
                        }
                      });
                  }),
                  e)
                : e;
            },
            j = e => {
              var t = e;
              return c
                ? (Object.keys(c).map(e => {
                    var n = c[e];
                    (null === n || void 0 === n ? void 0 : n.length) > 0 &&
                      n.forEach(n => {
                        if (v(e, n)) {
                          var o = new RegExp(n, 'g');
                          t =
                            'line' === e
                              ? t.replace(
                                  o,
                                  "<strike  data-check='1'>".concat(
                                    n,
                                    '</strike>',
                                  ),
                                )
                              : t.replace(
                                  o,
                                  '<font color='
                                    .concat(i[e], '>')
                                    .concat(n, '</font>'),
                                );
                        }
                      });
                  }),
                  t)
                : t;
            },
            A = e => {
              var t = { high: [], middle: [], low: [], risk: [], line: [] };
              return (
                e.forEach(e => {
                  var n = e.text,
                    o = e.type;
                  if ('STRIKE' === o) {
                    var r = t.line;
                    r.indexOf(n) < 0 && r.push(n);
                  } else {
                    var c = t[o];
                    c && c.indexOf(n) < 0 && c.push(n);
                  }
                }),
                t
              );
            },
            L = () => {
              var e = m.current,
                t = e && e.getElementsByTagName('*'),
                n = b(t),
                o = [];
              return (
                n.forEach(e => {
                  var t = e.innerText,
                    n = e.offsetLeft,
                    r = e.offsetWidth,
                    c = e.type,
                    a = e.offsetTop,
                    l = !0;
                  o.forEach((e, i) => {
                    n === e.offsetEnd &&
                      a === e.offsetTop &&
                      e.type === c &&
                      ((o[i] = {
                        text: (e.text += t),
                        offsetLeft:
                          null === e || void 0 === e ? void 0 : e.offsetLeft,
                        offsetWidth:
                          r +
                          (null === e || void 0 === e ? void 0 : e.offsetWidth),
                        offsetEnd: n + r,
                        offsetTop: a,
                        type: c,
                      }),
                      (l = !1));
                  }),
                    l &&
                      (o[o.length] = {
                        text: t,
                        offsetLeft: n,
                        offsetWidth: r,
                        offsetEnd: n + r,
                        type: c,
                        offsetTop: a,
                        qqq: 'STRIKE',
                      });
                }),
                A(o)
              );
            },
            R = e => {
              var t,
                n =
                  (null === m ||
                  void 0 === m ||
                  null === (t = m.current) ||
                  void 0 === t
                    ? void 0
                    : t.innerHTML) || '',
                o = L();
              'function' === typeof f &&
                f({ newDomHtml: n, highwordsArr: o, machineWords: c });
            };
          function D() {
            var e,
              t = m.current;
            t && (t.contentEditable = 'true');
            var n =
              null === m ||
              void 0 === m ||
              null === (e = m.current) ||
              void 0 === e
                ? void 0
                : e.innerHTML;
            document.execCommand('strikeThrough', !1),
              t && (t.contentEditable = 'false'),
              s(),
              R(n);
          }
          function I() {
            var e,
              t = m.current;
            t && (t.contentEditable = 'true');
            var n =
              null === m ||
              void 0 === m ||
              null === (e = m.current) ||
              void 0 === e
                ? void 0
                : e.innerHTML;
            document.execCommand('removeFormat', !1),
              document.execCommand('removeFormat', !1),
              t && (t.contentEditable = 'false'),
              s(),
              R(n);
          }
          function P(e) {
            var t,
              n = m.current;
            n && (n.contentEditable = 'true');
            var o =
              null === m ||
              void 0 === m ||
              null === (t = m.current) ||
              void 0 === t
                ? void 0
                : t.innerHTML;
            document.execCommand('forecolor', !1, '#ffffff'),
              document.execCommand('backColor', !1, e),
              n && (n.contentEditable = 'false'),
              s(),
              R(o);
          }
          function W(e) {
            var t,
              n =
                (null === m ||
                void 0 === m ||
                null === (t = m.current) ||
                void 0 === t
                  ? void 0
                  : t.getBoundingClientRect()) || {},
              o = n.width;
            try {
              var r = p().getRangeAt(0);
              if (r.toString() && o) {
                var c = d(e),
                  a = c.x,
                  l = c.y;
                k(''.concat(l - 54, 'px')),
                  C(''.concat(a < o && a > o - 160 ? a - 160 : a + 10, 'px')),
                  F('1');
              } else F('0');
            } catch (i) {
              F('0');
            }
          }
          var K = e => {
            a(e, e => {
              var t = e.type,
                n = e.color;
              switch (t) {
                case 'high':
                case 'middle':
                case 'low':
                case 'risk':
                  P(n);
                  break;
                case 'line':
                  D();
                  break;
                case 'clear':
                  I();
                  break;
                default:
              }
            });
          };
          return (
            (0, r.useEffect)(() => {
              var e = m.current;
              if (e) {
                var o = j(N());
                (e.innerHTML = u || o),
                  e.addEventListener('keydown', e => {
                    K(e);
                  }),
                  'function' === typeof f &&
                    f({ newDomHtml: t, highwordsArr: n, machineWords: c });
              }
            }, []),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                'div',
                {
                  className: 'box-button-box',
                  style: {
                    top: y,
                    left: x,
                    opacity: S,
                    zIndex: '0' === S ? -1 : 9999,
                  },
                },
                r.createElement(
                  'div',
                  { className: 'box-button-inner' },
                  r.createElement(
                    'button',
                    {
                      className: 'hight-btn',
                      type: 'button',
                      style: { background: '#D9001B' },
                      onClick: () => P(l.high),
                    },
                    '\u9ad8',
                    ' ',
                  ),
                  r.createElement(
                    'button',
                    {
                      className: 'hight-btn',
                      type: 'button',
                      style: { background: '#F59A23' },
                      onClick: () => P(l.middle),
                    },
                    '\u4e2d',
                    ' ',
                  ),
                  r.createElement(
                    'button',
                    {
                      className: 'hight-btn',
                      type: 'button',
                      style: { background: '#70B603' },
                      onClick: () => P(l.low),
                    },
                    '\u4f4e',
                    ' ',
                  ),
                  r.createElement(
                    'button',
                    {
                      className: 'hight-btn',
                      type: 'button',
                      style: { background: '#8400FF' },
                      onClick: () => P(l.risk),
                    },
                    '\u98ce',
                    ' ',
                  ),
                  r.createElement(
                    'button',
                    {
                      className: 'hight-btn-img',
                      type: 'button',
                      onClick: () => I(),
                    },
                    r.createElement('img', {
                      className: 'hight-img',
                      alt: '',
                      src:
                        '//imagev2.xmcdn.com/storages/fdf0-audiofreehighqps/05/38/CKwRIaIFIbPcAAACzQDlurYS.png',
                    }),
                    ' ',
                  ),
                  r.createElement(
                    'button',
                    {
                      className: 'hight-btn-img',
                      type: 'button',
                      onClick: () => D(),
                    },
                    r.createElement('img', {
                      className: 'hight-img',
                      alt: '',
                      src:
                        '//imagev2.xmcdn.com/storages/c1e0-audiofreehighqps/A7/C3/CKwRIRwFIbPcAAADfgDlurX-.png',
                    }),
                    ' ',
                  ),
                ),
              ),
              r.createElement('div', {
                ref: m,
                className: 'editableText',
                onMouseUp: e => W(e),
                tabIndex: 0,
                contentEditable: 'false',
                suppressContentEditableWarning: !0,
                'data-test': 'box',
              }),
            )
          );
        },
        k = y;
    },
    99463: function(e, t, n) {
      'use strict';
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.r(t),
        n.d(t, {
          default: function() {
            return o;
          },
        });
    },
    56361: function(e, t, n) {
      'use strict';
      n.d(t, {
        Z: function() {
          return c;
        },
      });
      var o = n(99463);
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function(t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
    },
  },
]);
