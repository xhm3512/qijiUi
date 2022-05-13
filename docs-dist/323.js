(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [323, 700, 532],
  {
    37836: function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function() {
            return j;
          },
        });
      var n = r(44742),
        a = r(67294),
        o = (e, t) => {
          var r = {};
          if (e.ctrlKey && e.shiftKey) {
            var n = e.keyCode;
            (r = {
              72: { type: 'high', func: 'setFontColor', color: '#D9001B' },
              83: { type: 'middle', func: 'setFontColor', color: '#F59A23' },
              76: { type: 'low', func: 'setFontColor', color: '#70B603' },
              68: { type: 'risk', func: 'setFontColor', color: '#8400FF' },
              78: { type: 'line', func: 'strikeThrough' },
              88: { type: 'clear', func: 'removeFormat' },
            }),
              r[+n] && t(r[+n]);
          }
        },
        l = o,
        s = {
          high: 'rgb(217, 0, 27)',
          middle: 'rgb(245, 154, 35)',
          low: 'rgb(112, 182, 3)',
          risk: 'rgb(132, 0, 255)',
        },
        c = {
          high: '#D9001B',
          middle: '#F59A23',
          low: '#70B603',
          risk: '#8400FF',
        },
        i = {
          'rgb(217, 0, 27)': 'high',
          'rgb(245, 154, 35)': 'middle',
          'rgb(112, 182, 3)': 'low',
          'rgb(132, 0, 255)': 'risk',
        },
        d = r(56361),
        m = () => {
          var e;
          null === (e = document.getSelection()) || void 0 === e || e.empty();
        },
        u = e => {
          var t = e || window.event;
          return { x: t.clientX, y: t.clientY };
        };
      function f(e, t) {
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
                backColor: i[f(e, 'background-color')],
                styleLineThrough:
                  'line-through' === f(e, 'text-decoration-line') ||
                  'STRIKE' === e.nodeName
                    ? 'STRIKE'
                    : '',
              }
            : {};
        },
        g = (e, t) => {
          var r = h(e),
            n = r.backColor,
            a = r.styleLineThrough,
            o = e.offsetLeft,
            l = e.offsetWidth,
            s = e.innerText,
            c = e.offsetTop,
            i = { offsetLeft: o, offsetWidth: l, innerText: s, offsetTop: c };
          n && t.push((0, d.Z)((0, d.Z)({}, i), {}, { type: n })),
            a && t.push((0, d.Z)((0, d.Z)({}, i), {}, { type: a }));
        },
        v = e => {
          var t = [];
          try {
            [].slice.call(e).forEach(e => {
              var r = e.getAttribute('data-check'),
                n = h(e),
                a = n.backColor,
                o = n.styleLineThrough;
              'P' === e.nodeName ||
                '1' === r ||
                (!a && 'STRIKE' !== e.nodeName && 'line-through' !== o) ||
                g(e, t);
            });
          } catch (r) {
            console.log('filterDomFunc\u5f02\u5e38', r);
          }
          return t;
        };
      function p() {
        if (window.getSelection) return window.getSelection();
        var e = document;
        return e.selection ? e.selection.createRange() : null;
      }
      var E = (e, t) => {
          var r = {
              high: 'rgb(217, 0, 27)',
              middle: 'rgb(245, 154, 35)',
              low: 'rgb(112, 182, 3)',
              risk: 'rgb(132, 0, 255)',
            },
            n = r[e],
            a = '<font color="#ffffff" style=""><span style="background-color: '.concat(
              n,
              ';"></span></font>',
            ),
            o = '<span style="background-color: '.concat(
              n,
              ';"><font color="#ffffff">.*<\\/font></span>',
            ),
            l = '<font color="#ffffff" style="background-color: '.concat(
              n,
              ';"><font</font>|<span</span></font>',
            ),
            s = '<font style="background-color: '.concat(
              n,
              ';" color="#ffffff"><font</font>|<span</span></font>',
            ),
            c = '<p></p>',
            i = '<strike></strike>';
          return !(
            a.match(t) ||
            o.match(t) ||
            l.match(t) ||
            s.match(t) ||
            c.match(t) ||
            i.match(t)
          );
        },
        C = e => {
          var t = e.text,
            r = e.manSpamWords,
            o = e.machineWords,
            i = e.onSubmitHtml,
            d = e.manSpamHtml,
            f = (0, a.useRef)(null),
            h = (0, a.useState)('0'),
            g = (0, n.default)(h, 2),
            C = g[0],
            j = g[1],
            b = (0, a.useState)('0'),
            y = (0, n.default)(b, 2),
            k = y[0],
            w = y[1],
            L = (0, a.useState)('0'),
            x = (0, n.default)(L, 2),
            A = x[0],
            N = x[1],
            Z = () => {
              var e = t;
              return r
                ? (Object.keys(r).map(t => {
                    var n = r[t];
                    (null === n || void 0 === n ? void 0 : n.length) > 0 &&
                      n.forEach(r => {
                        if (E(t, r)) {
                          var n = new RegExp(r, 'g');
                          e =
                            'line' === t
                              ? e.replace(n, '<strike>'.concat(r, '</strike>'))
                              : e.replace(
                                  n,
                                  '<font color="#ffffff" style="background-color: '
                                    .concat(s[t], ';">')
                                    .concat(r, '</font>'),
                                );
                        }
                      });
                  }),
                  e)
                : e;
            },
            S = e => {
              var t = e;
              return o
                ? (Object.keys(o).map(e => {
                    var r = o[e];
                    (null === r || void 0 === r ? void 0 : r.length) > 0 &&
                      r.forEach(r => {
                        if (E(e, r)) {
                          var n = new RegExp(r, 'g');
                          t =
                            'line' === e
                              ? t.replace(
                                  n,
                                  "<strike  data-check='1'>".concat(
                                    r,
                                    '</strike>',
                                  ),
                                )
                              : t.replace(
                                  n,
                                  '<font color='
                                    .concat(c[e], '>')
                                    .concat(r, '</font>'),
                                );
                        }
                      });
                  }),
                  t)
                : t;
            },
            R = e => {
              var t = { high: [], middle: [], low: [], risk: [], line: [] };
              return (
                e.forEach(e => {
                  var r = e.text,
                    n = e.type;
                  if ('STRIKE' === n) {
                    var a = t.line;
                    a.indexOf(r) < 0 && a.push(r);
                  } else {
                    var o = t[n];
                    o && o.indexOf(r) < 0 && o.push(r);
                  }
                }),
                t
              );
            },
            T = () => {
              var e = f.current,
                t = e && e.getElementsByTagName('*'),
                r = v(t),
                n = [];
              return (
                r.forEach(e => {
                  var t = e.innerText,
                    r = e.offsetLeft,
                    a = e.offsetWidth,
                    o = e.type,
                    l = e.offsetTop,
                    s = !0;
                  n.forEach((e, c) => {
                    r === e.offsetEnd &&
                      l === e.offsetTop &&
                      e.type === o &&
                      ((n[c] = {
                        text: (e.text += t),
                        offsetLeft:
                          null === e || void 0 === e ? void 0 : e.offsetLeft,
                        offsetWidth:
                          a +
                          (null === e || void 0 === e ? void 0 : e.offsetWidth),
                        offsetEnd: r + a,
                        offsetTop: l,
                        type: o,
                      }),
                      (s = !1));
                  }),
                    s &&
                      (n[n.length] = {
                        text: t,
                        offsetLeft: r,
                        offsetWidth: a,
                        offsetEnd: r + a,
                        type: o,
                        offsetTop: l,
                        qqq: 'STRIKE',
                      });
                }),
                R(n)
              );
            },
            z = e => {
              var t,
                r =
                  (null === f ||
                  void 0 === f ||
                  null === (t = f.current) ||
                  void 0 === t
                    ? void 0
                    : t.innerHTML) || '',
                n = T();
              'function' === typeof i &&
                i({ newDomHtml: r, highwordsArr: n, machineWords: o });
            };
          function I() {
            var e,
              t = f.current;
            t && (t.contentEditable = 'true');
            var r =
              null === f ||
              void 0 === f ||
              null === (e = f.current) ||
              void 0 === e
                ? void 0
                : e.innerHTML;
            document.execCommand('strikeThrough', !1),
              t && (t.contentEditable = 'false'),
              m(),
              z(r);
          }
          function M() {
            var e,
              t = f.current;
            t && (t.contentEditable = 'true');
            var r =
              null === f ||
              void 0 === f ||
              null === (e = f.current) ||
              void 0 === e
                ? void 0
                : e.innerHTML;
            document.execCommand('removeFormat', !1),
              document.execCommand('removeFormat', !1),
              t && (t.contentEditable = 'false'),
              m(),
              z(r);
          }
          function W(e) {
            var t,
              r = f.current;
            r && (r.contentEditable = 'true');
            var n =
              null === f ||
              void 0 === f ||
              null === (t = f.current) ||
              void 0 === t
                ? void 0
                : t.innerHTML;
            document.execCommand('forecolor', !1, '#ffffff'),
              document.execCommand('backColor', !1, e),
              r && (r.contentEditable = 'false'),
              m(),
              z(n);
          }
          function F(e) {
            var t,
              r =
                (null === f ||
                void 0 === f ||
                null === (t = f.current) ||
                void 0 === t
                  ? void 0
                  : t.getBoundingClientRect()) || {},
              n = r.width;
            try {
              var a = p().getRangeAt(0);
              if (a.toString() && n) {
                var o = u(e),
                  l = o.x,
                  s = o.y;
                j(''.concat(s - 54, 'px')),
                  w(''.concat(l < n && l > n - 160 ? l - 160 : l + 10, 'px')),
                  N('1');
              } else N('0');
            } catch (c) {
              N('0');
            }
          }
          var B = e => {
            l(e, e => {
              var t = e.type,
                r = e.color;
              switch (t) {
                case 'high':
                case 'middle':
                case 'low':
                case 'risk':
                  W(r);
                  break;
                case 'line':
                  I();
                  break;
                case 'clear':
                  M();
                  break;
                default:
              }
            });
          };
          return (
            (0, a.useEffect)(() => {
              var e = f.current;
              if (e) {
                var n = S(Z());
                (e.innerHTML = d || n),
                  e.addEventListener('keydown', e => {
                    B(e);
                  }),
                  'function' === typeof i &&
                    i({ newDomHtml: t, highwordsArr: r, machineWords: o });
              }
            }, []),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                'div',
                {
                  className: 'box-button-box',
                  style: {
                    top: C,
                    left: k,
                    opacity: A,
                    zIndex: '0' === A ? -1 : 9999,
                  },
                },
                a.createElement(
                  'div',
                  { className: 'box-button-inner' },
                  a.createElement(
                    'button',
                    {
                      className: 'hight-btn',
                      type: 'button',
                      style: { background: '#D9001B' },
                      onClick: () => W(s.high),
                    },
                    '\u9ad8',
                    ' ',
                  ),
                  a.createElement(
                    'button',
                    {
                      className: 'hight-btn',
                      type: 'button',
                      style: { background: '#F59A23' },
                      onClick: () => W(s.middle),
                    },
                    '\u4e2d',
                    ' ',
                  ),
                  a.createElement(
                    'button',
                    {
                      className: 'hight-btn',
                      type: 'button',
                      style: { background: '#70B603' },
                      onClick: () => W(s.low),
                    },
                    '\u4f4e',
                    ' ',
                  ),
                  a.createElement(
                    'button',
                    {
                      className: 'hight-btn',
                      type: 'button',
                      style: { background: '#8400FF' },
                      onClick: () => W(s.risk),
                    },
                    '\u98ce',
                    ' ',
                  ),
                  a.createElement(
                    'button',
                    {
                      className: 'hight-btn-img',
                      type: 'button',
                      onClick: () => M(),
                    },
                    a.createElement('img', {
                      className: 'hight-img',
                      alt: '',
                      src:
                        '//imagev2.xmcdn.com/storages/fdf0-audiofreehighqps/05/38/CKwRIaIFIbPcAAACzQDlurYS.png',
                    }),
                    ' ',
                  ),
                  a.createElement(
                    'button',
                    {
                      className: 'hight-btn-img',
                      type: 'button',
                      onClick: () => I(),
                    },
                    a.createElement('img', {
                      className: 'hight-img',
                      alt: '',
                      src:
                        '//imagev2.xmcdn.com/storages/c1e0-audiofreehighqps/A7/C3/CKwRIRwFIbPcAAADfgDlurX-.png',
                    }),
                    ' ',
                  ),
                ),
              ),
              a.createElement('div', {
                ref: f,
                className: 'editableText',
                onMouseUp: e => F(e),
                tabIndex: 0,
                contentEditable: 'false',
                suppressContentEditableWarning: !0,
                'data-test': 'box',
              }),
            )
          );
        },
        j = C;
    },
    74651: function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          BrokenLine: function() {
            return ve;
          },
          CatchErr: function() {
            return Ue;
          },
          Editor: function() {
            return x;
          },
          Foo: function() {
            return C;
          },
          Icons: function() {
            return ie;
          },
          ImgIcons: function() {
            return fe;
          },
          Layout: function() {
            return B;
          },
          Loadable: function() {
            return Ge;
          },
          QuiButton: function() {
            return v;
          },
          QuiCascaderAddress: function() {
            return He;
          },
          QuiDatePicker: function() {
            return be;
          },
          QuiDrawer: function() {
            return we;
          },
          QuiImage: function() {
            return Xe;
          },
          QuiModal: function() {
            return K;
          },
          QuiSelect: function() {
            return Q;
          },
          QuiStatistic: function() {
            return Re;
          },
          QuiTabs: function() {
            return Ne;
          },
          QuiToolTip: function() {
            return Ie;
          },
          Remark: function() {
            return p.default;
          },
        });
      var n = r(67294),
        a = r(35510),
        o = r.n(a),
        l = r(51004),
        s = r(628),
        c = r.n(s),
        i = () => ({ width: 0, opacity: 0, transform: 'scale(0)' }),
        d = e => ({ width: e.scrollWidth, opacity: 1, transform: 'scale(1)' }),
        m = e => {
          var t = e.prefixCls,
            r = e.loading,
            a = e.existIcon,
            o = !!r;
          return a
            ? n.createElement(
                'span',
                { className: ''.concat(t, '-loading-icon') },
                n.createElement(c(), null),
              )
            : n.createElement(
                l.Z,
                {
                  visible: o,
                  motionName: ''.concat(t, '-loading-icon-motion'),
                  removeOnLeave: !0,
                  onAppearStart: i,
                  onAppearActive: d,
                  onEnterStart: i,
                  onEnterActive: d,
                  onLeaveStart: d,
                  onLeaveActive: i,
                },
                (e, r) => {
                  var a = e.className,
                    o = e.style;
                  return n.createElement(
                    'span',
                    {
                      className: ''.concat(t, '-loading-icon'),
                      style: o,
                      ref: r,
                    },
                    n.createElement(c(), { className: a }),
                  );
                },
              );
        },
        u = m,
        f = function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t;
        },
        h = (f('submit', 'button', 'reset'), 'qiji-oni-btn'),
        g = e => {
          var t = e.children,
            r = e.onClick,
            a = e.type,
            l = void 0 === a ? 'primary' : a,
            s = e.disabled,
            c = e.icon,
            i = e.loading,
            d = void 0 !== i && i,
            m = e.size,
            f = void 0 === m ? 'middle' : m,
            g = e.htmlType,
            v = void 0 === g ? 'button' : g,
            p = e.className,
            E = e.hover,
            C = void 0 !== E && E,
            j =
              c && !d
                ? c
                : n.createElement(u, {
                    existIcon: !!c,
                    prefixCls: h,
                    loading: !!d,
                  }),
            b = o()(
              ''.concat(h, ' ').concat(h, '-button'),
              ''.concat(h, '-').concat(l),
              ''
                .concat(h, '-')
                .concat(l, '-')
                .concat(f),
              p,
              { [''.concat(h, '-').concat(l, '-hover')]: C },
            );
          return n.createElement(
            'button',
            { className: b, onClick: r, disabled: s, type: v },
            c && n.createElement('span', { className: 'icon' }, j),
            t,
          );
        },
        v = g,
        p = r(37836),
        E = () => n.createElement('div', null, 'foo'),
        C = E,
        j = r(13378),
        b = r(44742),
        y = r(3911),
        k = r(26836),
        w = r.n(k),
        L = e => e.replace(/\s+/g, '').replace(/[\n|\r|\r\n]/g, '');
      function x(e) {
        var t = e.type,
          r = void 0 === t ? 'textArea' : t,
          a = e.id,
          l = e.maxLength,
          s = e.onChange,
          c = e.prohibitedWords,
          i = e.contentStyle,
          d = e.placecolor,
          m = e.isMaxActive,
          u = (0, y.Z)(e, [
            'type',
            'id',
            'maxLength',
            'onChange',
            'prohibitedWords',
            'contentStyle',
            'placecolor',
            'isMaxActive',
          ]),
          f = e =>
            '\u8bf7\u5220\u9664\u4fee\u6539\u5982\u4e0a\u8bcd\u7ec4\uff1a'.concat(
              e
                .replace(new RegExp(',', 'g'), '\u3001')
                .replace(new RegExp('&&', 'g'), '..'),
            ),
          h = o()('tool-tip', 'raftEditor-box-normal', d),
          g = 'string' === typeof e.value && '' != e.value,
          v = '';
        try {
          v = g ? e.value.replace(/\n/g, '<br/>') : e.value || '';
        } catch (N) {
          console.log(
            N,
            '\u5bcc\u6587\u672c\u7f16\u8f91\u6846\u7ec4\u4ef6\u5f02\u5e38',
          );
        }
        var p = (0, n.useState)(
            w().createEditorState(v || '', { editorId: a }),
          ),
          E = (0, b.default)(p, 2),
          C = E[0],
          k = E[1],
          x = e => {
            s(e.toText()), k(e);
          },
          A = L(C.toText()).length;
        return 'textArea' === r
          ? n.createElement(
              'div',
              null,
              n.createElement(
                'div',
                { className: 'raftEditor-box ' + h, style: i },
                n.createElement(
                  'div',
                  { className: 'data-count-box' },
                  n.createElement(
                    'span',
                    {
                      style: {
                        color: ''.concat(
                          A > l && m ? 'rgba(250, 40, 0, 1)' : '#222',
                        ),
                      },
                    },
                    l ? ''.concat(A) : '',
                  ),
                  l ? '/'.concat(l) : '',
                ),
                n.createElement(
                  w(),
                  (0, j.Z)({}, u, {
                    maxLength: !0,
                    contentStyle: i,
                    onChange: x,
                    defaultValue: C,
                    stripPastedStyles: !0,
                  }),
                ),
              ),
              n.createElement(
                'div',
                { className: 'prohibiti-words-top-box' },
                c && f(c),
              ),
            )
          : 'input' === r
          ? n.createElement(
              'div',
              null,
              n.createElement(
                'div',
                {
                  className: 'raftEditor-box raftEditor-box-input ' + h,
                  style: i,
                },
                n.createElement(
                  'div',
                  { className: 'data-count-box' },
                  n.createElement(
                    'span',
                    { className: 'current-data-length' },
                    l ? ''.concat(A) : '',
                  ),
                  l ? '/'.concat(l) : '',
                ),
                n.createElement(
                  w(),
                  (0, j.Z)({}, u, {
                    maxLength: !0,
                    contentStyle: i,
                    onChange: x,
                    defaultValue: C,
                    stripPastedStyles: !0,
                  }),
                ),
              ),
              n.createElement(
                'div',
                { className: 'prohibiti-words-top-box' },
                c && f(c),
              ),
            )
          : n.createElement('div', null);
      }
      r(53862);
      var A = r(22657),
        N = A.Z.Header,
        Z = N,
        S = A.Z.Content,
        R = S,
        T = A.Z.Footer,
        z = T,
        I = A.Z.Sider,
        M = I,
        W = A.Z,
        F = W;
      (F.Header = Z),
        (F.Content = R),
        (F.Footer = z),
        (F.Sider = M),
        (F.Header = Z);
      var B = F,
        D = () => n.createElement('div', null, 'foo'),
        Q = D,
        H = () => n.createElement('div', null, 'foo'),
        K = H,
        P = r(16165),
        q = { width: '1em', height: '1em' };
      function O() {
        return n.createElement(
          'svg',
          (0, j.Z)({ viewBox: '0 0 28 28' }, q),
          n.createElement(
            'g',
            {
              fillRule: 'evenodd',
              fill: 'none',
              strokeWidth: '1',
              stroke: 'none',
              id: '\u9996\u9875',
            },
            n.createElement(
              'g',
              {
                strokeWidth: '1.5',
                stroke: 'currentColor',
                id: '\u4fa7\u5bfc\u822a',
                fillRule: 'nonzero',
                transform: 'translate(-48.000000, -178.000000)',
              },
              n.createElement(
                'g',
                { transform: 'translate(16.000000, 80.000000)' },
                n.createElement(
                  'g',
                  {
                    transform: 'translate(16.000000, 88.000000)',
                    id: '\u7f16\u7ec4-28',
                  },
                  n.createElement(
                    'g',
                    {
                      transform: 'translate(16.000000, 10.000000)',
                      id: 'icn_home',
                    },
                    n.createElement('path', {
                      id: '\u8def\u5f84',
                      d:
                        'M14.8593684,6.27559623 L21.0345263,10.6931931 C21.640513,11.1266954 22,11.8245878 22,12.5680436 L22,19.691846 C22,20.9665765 20.9631579,22 19.6842105,22 L16.5263158,22 L16.5263158,18.6426852 C16.5263158,17.2521273 15.3951579,16.124699 14,16.124699 C12.6048421,16.124699 11.4736842,17.2521273 11.4736842,18.6426852 L11.4736842,22 L8.31578947,22 C7.0368421,22 6,20.9665765 6,19.691846 L6,12.5682534 C6,11.8247236 6.35942665,11.1267386 6.96547368,10.6931931 L13.1406316,6.27559623 C13.6542316,5.90813459 14.3457684,5.90813459 14.8593684,6.27559623 Z',
                    }),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function U() {
        return n.createElement(
          'svg',
          (0, j.Z)({ viewBox: '0 0 28 28' }, q),
          n.createElement(
            'g',
            {
              fillRule: 'evenodd',
              fill: 'none',
              strokeWidth: '1',
              stroke: 'none',
              id: '\u9996\u9875',
            },
            n.createElement(
              'g',
              {
                strokeWidth: '1.5',
                stroke: 'currentColor',
                id: '\u4fa7\u5bfc\u822a',
                transform: 'translate(-48.000000, -226.000000)',
              },
              n.createElement(
                'g',
                { transform: 'translate(16.000000, 80.000000)' },
                n.createElement(
                  'g',
                  {
                    transform: 'translate(16.000000, 88.000000)',
                    id: '\u7f16\u7ec4-28',
                  },
                  n.createElement(
                    'g',
                    {
                      transform: 'translate(0.000000, 48.000000)',
                      id: '\u8282\u76ee\u7ba1\u7406-normal',
                    },
                    n.createElement(
                      'g',
                      {
                        transform: 'translate(16.000000, 10.000000)',
                        id: 'icn_jiemu',
                      },
                      n.createElement('rect', {
                        rx: '1',
                        height: '6.5',
                        width: '6.5',
                        y: '5.75',
                        x: '5.75',
                        id: '\u77e9\u5f62',
                      }),
                      n.createElement('rect', {
                        rx: '1',
                        height: '6.5',
                        width: '6.5',
                        y: '15.75',
                        x: '5.75',
                        id: '\u77e9\u5f62\u5907\u4efd-2',
                      }),
                      n.createElement('rect', {
                        rx: '1',
                        height: '6.5',
                        width: '6.5',
                        y: '5.75',
                        x: '15.75',
                        id: '\u77e9\u5f62\u5907\u4efd',
                      }),
                      n.createElement('rect', {
                        rx: '1',
                        height: '6.5',
                        width: '6.5',
                        y: '15.75',
                        x: '15.75',
                        id: '\u77e9\u5f62\u5907\u4efd-3',
                      }),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function V() {
        return n.createElement(
          'svg',
          (0, j.Z)({ viewBox: '0 0 28 28' }, q),
          n.createElement(
            'g',
            {
              fillRule: 'evenodd',
              fill: 'none',
              strokeWidth: '1',
              stroke: 'none',
              id: '\u9996\u9875',
            },
            n.createElement(
              'g',
              {
                id: '\u4fa7\u5bfc\u822a',
                fillRule: 'nonzero',
                fill: 'currentColor',
                transform: 'translate(-48.000000, -274.000000)',
              },
              n.createElement(
                'g',
                { transform: 'translate(16.000000, 80.000000)' },
                n.createElement(
                  'g',
                  {
                    transform: 'translate(16.000000, 88.000000)',
                    id: '\u7f16\u7ec4-28',
                  },
                  n.createElement(
                    'g',
                    {
                      transform: 'translate(0.000000, 96.000000)',
                      id: '\u7f16\u7ec4-43',
                    },
                    n.createElement(
                      'g',
                      {
                        transform: 'translate(16.000000, 10.000000)',
                        id: 'icn_live',
                      },
                      n.createElement(
                        'g',
                        {
                          transform: 'translate(5.000000, 5.000000)',
                          id: '\u7f16\u7ec4',
                        },
                        n.createElement('path', {
                          id: '\u5f62\u72b6',
                          d:
                            'M10.7129029,1.97224964 L10.7129029,7.2526929 L16.0063182,7.2526929 L15.9166714,6.94333117 C15.1602379,4.54859009 13.2058146,2.66730913 10.7398172,1.98028502 L10.7129029,1.97224964 Z M9.81785069,0.000169018055 L9.93117405,0.00800349677 C14.1534812,0.568671425 17.4793196,3.87643139 17.993322,8.03272643 L17.9983811,8.08656342 L18,8.14060127 C18,8.62968068 17.6006632,9.02618898 17.1079832,9.0262999 L9.95626708,9.0262999 C9.37689245,9.0262999 8.9072165,8.56005645 8.9072165,7.98491599 L8.9072165,0.89771983 C8.9072165,0.85787866 8.90999001,0.818084986 8.91531103,0.778595461 C8.98153713,0.2873659 9.43631024,-0.0576063072 9.93117405,0.00800349677 L9.81785069,0.000169018055 Z M7.87880696,0.89109065 C7.93470986,1.11025186 7.90059083,1.34248295 7.78396019,1.53666494 C7.66732954,1.73084694 7.47774747,1.8710628 7.256945,1.92644804 C4.02318183,2.73882393 1.71705135,5.64039596 1.71705135,8.99918053 C1.71705135,13.0281149 5.00707148,16.2942919 9.06586921,16.2942919 C12.4315732,16.2942919 15.3435789,14.0285185 16.1785293,10.841289 C16.2523014,10.5427344 16.4822693,10.306723 16.7804016,10.2235996 C17.0785339,10.1404762 17.3986586,10.2231143 17.6182324,10.4398801 C17.8378063,10.6566459 17.9228237,10.9739686 17.8407402,11.2703778 C16.8101047,15.2044948 13.2183611,18 9.06586921,18 C4.05859537,18 0,13.9706638 0,9.00038583 C0,4.85654564 2.84461883,1.27739104 6.836232,0.274777785 C7.29550508,0.159643606 7.76196678,0.435390058 7.87880696,0.89109065 Z',
                        }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function J() {
        return n.createElement(
          'svg',
          (0, j.Z)({ viewBox: '0 0 28 28' }, q),
          n.createElement(
            'g',
            {
              fillRule: 'evenodd',
              fill: 'none',
              strokeWidth: '1',
              stroke: 'none',
              id: '\u9996\u9875',
            },
            n.createElement(
              'g',
              {
                id: '\u4fa7\u5bfc\u822a',
                fillRule: 'nonzero',
                transform: 'translate(-48.000000, -322.000000)',
              },
              n.createElement(
                'g',
                { transform: 'translate(16.000000, 80.000000)' },
                n.createElement(
                  'g',
                  {
                    transform: 'translate(16.000000, 88.000000)',
                    id: '\u7f16\u7ec4-28',
                  },
                  n.createElement(
                    'g',
                    {
                      transform: 'translate(0.000000, 144.000000)',
                      id: '\u7f16\u7ec4-44',
                    },
                    n.createElement(
                      'g',
                      {
                        transform: 'translate(16.000000, 10.000000)',
                        id: 'icn_writting',
                      },
                      n.createElement(
                        'g',
                        {
                          transform: 'translate(5.000000, 5.000000)',
                          id: '\u7f16\u7ec4',
                        },
                        n.createElement('path', {
                          strokeWidth: '1.5',
                          stroke: 'currentColor',
                          id: '\u8def\u5f84',
                          d:
                            'M9,0 C4.02944318,0 0,4.02944318 0,9 C0,13.9705568 4.02944318,18 9,18 C13.9705568,18 18,13.9705568 18,9 C18,4.02944318 13.9705568,0 9,0 Z',
                        }),
                        n.createElement('path', {
                          fill: 'currentColor',
                          id: '\u8def\u5f84',
                          d:
                            'M11.4541442,4 C11.2577233,3.99970999 11.0692945,4.08004818 10.9305865,4.22322389 L9.125,6.08207349 L7.31941346,4.22322389 C7.18069225,4.0800686 6.99227201,3.99973409 6.79585577,4 C6.49642802,4 6.22649044,4.18571588 6.11189329,4.47050678 C5.99729614,4.75529769 6.06060266,5.08311323 6.27229808,5.30111928 L7.86645192,6.94219024 L5.74038462,6.94219024 C5.33148148,6.94219024 5,7.28345011 5,7.70441549 C5,8.12538087 5.33148148,8.46664074 5.74038462,8.46664074 L8.38461538,8.46664074 L8.38461538,9.88220191 L5.74038462,9.88220191 C5.33148148,9.88220191 5,10.2234618 5,10.6444272 C5,11.0653925 5.33148148,11.4066524 5.74038462,11.4066524 L8.38461538,11.4066524 L8.38461538,14.2377748 C8.38461538,14.6587401 8.71609687,15 9.125,15 C9.53390313,15 9.86538462,14.6587401 9.86538462,14.2377748 L9.86538462,11.4066524 L12.5096154,11.4066524 C12.9185185,11.4066524 13.25,11.0653925 13.25,10.6444272 C13.25,10.2234618 12.9185185,9.88220191 12.5096154,9.88220191 L9.86538462,9.88220191 L9.86538462,8.46664074 L12.5096154,8.46664074 C12.9185185,8.46664074 13.25,8.12538087 13.25,7.70441549 C13.25,7.28345011 12.9185185,6.94219024 12.5096154,6.94219024 L10.3835481,6.94219024 L11.9775962,5.30111928 C12.189278,5.08312724 12.2525912,4.7553381 12.1380212,4.47055707 C12.0234512,4.18577604 11.7535527,4 11.4541442,4 L11.4541442,4 Z',
                        }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function _() {
        return n.createElement(
          'svg',
          (0, j.Z)({ viewBox: '0 0 28 28' }, q),
          n.createElement(
            'g',
            {
              fillRule: 'evenodd',
              fill: 'none',
              strokeWidth: '1',
              stroke: 'none',
              id: '\u9996\u9875',
            },
            n.createElement(
              'g',
              {
                strokeWidth: '1.5',
                stroke: 'currentColor',
                id: '\u4fa7\u5bfc\u822a',
                fillRule: 'nonzero',
                transform: 'translate(-48.000000, -370.000000)',
              },
              n.createElement(
                'g',
                { transform: 'translate(16.000000, 80.000000)' },
                n.createElement(
                  'g',
                  {
                    transform: 'translate(16.000000, 88.000000)',
                    id: '\u7f16\u7ec4-28',
                  },
                  n.createElement(
                    'g',
                    {
                      transform: 'translate(0.000000, 192.000000)',
                      id: '\u7f16\u7ec4-45',
                    },
                    n.createElement(
                      'g',
                      {
                        transform: 'translate(16.000000, 10.000000)',
                        id: 'icn_data',
                      },
                      n.createElement(
                        'g',
                        {
                          transform: 'translate(6.000000, 5.000000)',
                          id: '\u7f16\u7ec4',
                        },
                        n.createElement('path', {
                          id: '\u8def\u5f84',
                          d:
                            'M16,15.7141784 L16,16.0665865 C16,17.7777778 13.1411256,17.7777778 9.83018752,17.7777778 L6.1693019,17.7777778 C2.72274915,17.7777778 0,17.7777778 0,16.0665865 L0,15.7141784 C0,12.4404601 2.76694767,9.77777778 6.1693019,9.77777778 L9.83018752,9.77777778 C13.2322975,9.77777778 16,12.4412194 16,15.7141784 Z',
                        }),
                        n.createElement('path', {
                          id: '\u8def\u5f84',
                          d:
                            'M13.3333333,4.88888889 C13.3333333,7.58490954 10.9408308,9.77777778 8,9.77777778 C5.05945886,9.77777778 2.66666667,7.5841426 2.66666667,4.88888889 C2.66666667,2.19338645 5.05945886,0 8,0 C10.9408308,0 13.3333333,2.19288896 13.3333333,4.88888889 Z',
                        }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function G() {
        return n.createElement(
          'svg',
          (0, j.Z)({ version: '1.1', viewBox: '0 0 28 28' }, q),
          n.createElement(
            'g',
            {
              fillRule: 'evenodd',
              fill: 'none',
              strokeWidth: '1',
              stroke: 'none',
              id: '\u9996\u9875',
            },
            n.createElement(
              'g',
              {
                id: '\u4fa7\u5bfc\u822a',
                transform: 'translate(-48.000000, -418.000000)',
              },
              n.createElement(
                'g',
                { transform: 'translate(16.000000, 80.000000)' },
                n.createElement(
                  'g',
                  {
                    transform: 'translate(16.000000, 88.000000)',
                    id: '\u7f16\u7ec4-28',
                  },
                  n.createElement(
                    'g',
                    {
                      transform: 'translate(0.000000, 240.000000)',
                      id: '\u7f16\u7ec4-46',
                    },
                    n.createElement(
                      'g',
                      {
                        transform: 'translate(16.000000, 10.000000)',
                        id: 'icn_cmt',
                      },
                      n.createElement(
                        'g',
                        {
                          transform: 'translate(6.000000, 7.000000)',
                          id: '\u7f16\u7ec4',
                        },
                        n.createElement('path', {
                          strokeWidth: '1.5',
                          stroke: 'currentColor',
                          id: '\u77e9\u5f62',
                          d:
                            'M14,-0.75 C14.7593915,-0.75 15.4468915,-0.442195766 15.9445436,0.0554563517 C16.4421958,0.553108469 16.75,1.24060847 16.75,2 L16.75,2 L16.75,10 C16.75,10.7593915 16.4421958,11.4468915 15.9445436,11.9445436 C15.4468915,12.4421958 14.7593915,12.75 14,12.75 L14,12.75 L10.6070728,12.75 L8.18864662,15.3711898 L5.32000345,12.75 L2,12.75 C1.24060847,12.75 0.553108469,12.4421958 0.0554563517,11.9445436 C-0.442195766,11.4468915 -0.75,10.7593915 -0.75,10 L-0.75,10 L-0.75,2 C-0.75,1.24060847 -0.442195766,0.553108469 0.0554563517,0.0554563517 C0.553108469,-0.442195766 1.24060847,-0.75 2,-0.75 L2,-0.75 Z',
                        }),
                        n.createElement('path', {
                          fillRule: 'nonzero',
                          fill: 'currentColor',
                          id: '\u8def\u5f84',
                          d:
                            'M4.45570651,7.00514221 C3.91025196,7.00514221 3.5466156,6.55059676 3.5466156,6.00514221 C3.5466156,5.45968767 4.00116106,5.00514221 4.5466156,5.00514221 C5.09207015,5.00514221 5.5466156,5.45968767 5.5466156,6.00514221 C5.45570651,6.55059676 5.00116106,7.00514221 4.45570651,7.00514221 L4.45570651,7.00514221 Z',
                        }),
                        n.createElement('path', {
                          fillRule: 'nonzero',
                          fill: 'currentColor',
                          id: '\u8def\u5f84',
                          d:
                            'M8.5466156,7.00514221 C8.00116106,7.00514221 7.5466156,6.55059676 7.5466156,6.00514221 C7.5466156,5.45968767 8.00116106,5.00514221 8.5466156,5.00514221 C9.09207015,5.00514221 9.5466156,5.45968767 9.5466156,6.00514221 C9.5466156,6.55059676 9.09207015,7.00514221 8.5466156,7.00514221 Z',
                        }),
                        n.createElement('path', {
                          fillRule: 'nonzero',
                          fill: 'currentColor',
                          id: '\u8def\u5f84',
                          d:
                            'M12.5466156,7.00514221 C12.0011611,7.00514221 11.5466156,6.55059676 11.5466156,6.00514221 C11.5466156,5.45968767 12.0011611,5.00514221 12.5466156,5.00514221 C13.0920701,5.00514221 13.5466156,5.45968767 13.5466156,6.00514221 C13.4557065,6.55059676 13.0011611,7.00514221 12.5466156,7.00514221 Z',
                        }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      r(5317);
      var Y = r(87555),
        X = e => {
          var t = e.active,
            r = void 0 !== t && t,
            a = 'qiu-tooltip',
            l = o()({
              [''.concat(a, '-box')]: r,
              [''.concat(a, '-active-box')]: !r,
            });
          return n.createElement(
            Y.Z,
            { justify: 'center', align: 'middle', className: l },
            '?',
          );
        },
        $ = X,
        ee = () =>
          n.createElement(
            'svg',
            (0, j.Z)({ viewBox: '0 0 1024 1024' }, q),
            n.createElement('path', {
              d: 'M921.6 409.6L512 0 102.4 409.6h204.8v614.4h409.6V409.6z',
              fill: 'currentColor',
              'p-id': '1386',
            }),
          ),
        te = e => t => n.createElement(P.Z, (0, j.Z)({ component: e }, t)),
        re = te(O),
        ne = te(U),
        ae = te(V),
        oe = te(J),
        le = te(_),
        se = te(G),
        ce = te(ee),
        ie = {
          HomeCustom: re,
          WorksManagerCustom: ne,
          DataCustom: ae,
          SalaryCustom: oe,
          UserCustom: le,
          NewsCustom: se,
          ArrowCustom: ce,
          ToolTipCustom: $,
        },
        de = r(56361),
        me = e => {
          var t = e.className,
            r = e.style,
            a = void 0 === r ? void 0 : r,
            l = e.width,
            s = void 0 === l ? '1em' : l,
            c = e.height,
            i = void 0 === c ? '1em' : c,
            d = 'qiji-oni-img-close',
            m = o()(d, t);
          return n.createElement('img', {
            className: m,
            style: (0, de.Z)((0, de.Z)({}, a), {}, { width: s, height: i }),
            src:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAatJREFUaEPtWEtOwzAQnThcA87TTVU2OAK6ZtnDsGQNQjEbqm56HrhGkyCLVDJV3LFnxgQLZ9n5+L1547HrCjL/qszxQyEwt4JFgaIAswKlhZgFZIf/HwWM2S46gCdbMjWoTdMs39nlcxK07e66r/pH+1MN8KD1ah+SP1iBV7P9AIDLMemhBrXWetmGLIL5GLNrOuifAeBi9P281asrLM7aqQRsrAiJCfA2tzyBUeI3p0psEh7wBzWom9AWDVbAovUtSGknqVxRBKRISIGP2gPuhuIA4MRObepoBY5JKEAoMdgkIhOIbacU4MktFNtOqcCLEMCUsPaTQ4o9ft0CslooQIlu9KkdX5ED8JhPjMAZJVyeouDFWmhCiZfvO9mPr6tB3Uvdn5Io4KiQJwHPtMmjhTzg89jE5+b8nx+jIYdUiA92ZfDZWWM0BliMbwwZMgEKIEoMRoZEgAOEEytynZYAIJGDdJBJLiyVK7iFsv9Tf/IuJHYl/rVnlewfttynxWFQm7vcnhaxeTyXPXgTzwUQW7cQwCqU2l4USF1hLH9RAKtQantRIHWFsfxfdKN9QFsChAsAAAAASUVORK5CYII=',
          });
        },
        ue = me,
        fe = { MoDalClose: ue },
        he = r(33465),
        ge = e => {
          var t = e.config;
          return n.createElement(he.Z, t);
        },
        ve = ge,
        pe = (r(66936), r(55337)),
        Ee = (r(38098), r(80942)),
        Ce = pe.Z.RangePicker,
        je = e => {
          var t = e.className,
            r = e.dropdownClassName,
            a = (0, y.Z)(e, ['className', 'dropdownClassName']);
          return n.createElement(
            Ce,
            (0, j.Z)(
              {
                className: o()('custom-data-picker', t),
                dropdownClassName: o()('custom-data-picker-pop', r),
              },
              a,
              { locale: Ee.default },
            ),
          );
        },
        be = je,
        ye = r(73935),
        ke =
          (r(86591),
          e => {
            var t = e.maskClosable,
              r = void 0 !== t && t,
              a = e.children,
              l = e.visible,
              s = void 0 !== l && l,
              c = e.onClose,
              i = 'qiu-drawer-box',
              d = () => {
                document.body.style.touchAction = 'none';
              },
              m = () => {
                document.body.style.touchAction = 'auto';
              },
              u = o()(''.concat(i, '-dialog'), {
                [''.concat(i, '-dialog_show')]: s,
                [''.concat(i, '-dialog_hidden')]: !s,
              }),
              f = o()(''.concat(i, '-mask'), {
                [''.concat(i, '-mask-show')]: s,
                [''.concat(i, '-mask-hidden')]: !s,
              });
            return (
              (0, n.useEffect)(() => {
                s ? d() : m();
              }, [s]),
              n.createElement(
                'div',
                null,
                ye.createPortal(
                  n.createElement(
                    'div',
                    { className: i },
                    n.createElement('div', {
                      className: f,
                      onClick: () => r && c && c(),
                    }),
                    n.createElement('div', { className: u }, s && a),
                  ),
                  document.body,
                ),
              )
            );
          }),
        we = ke,
        Le = (r(84786), r(70353)),
        xe = Le.Z.TabPane,
        Ae = e => {
          var t = e.children,
            r = () => {};
          return n.createElement(
            Le.Z,
            {
              defaultActiveKey: '0',
              onChange: r,
              tabBarGutter: 42,
              tabBarStyle: {},
            },
            t.map((e, t) =>
              n.createElement(xe, { tab: e.props.title, key: t }, e),
            ),
          );
        },
        Ne = Ae,
        Ze = (r(52222), r(65507)),
        Se = e => {
          var t = e.children,
            r = e.onClick,
            a = e.active,
            l = void 0 !== a && a,
            s = e.wrapClassName,
            c = e.currentActive,
            i = void 0 === c ? '' : c,
            d = 'qiji-oni-statistic',
            m = (0, n.useState)(i),
            u = (0, b.default)(m, 2),
            f = u[0],
            h = u[1],
            g = e =>
              o()(''.concat(d, '-item'), {
                [''.concat(d, '-active')]: e === f && l,
              }),
            v = (e, t) => {
              h(e), 'function' === typeof r && r(t);
            };
          return n.createElement(
            Y.Z,
            { className: s, gutter: [16, 16] },
            null === t || void 0 === t
              ? void 0
              : t.map((e, t) =>
                  n.createElement(
                    Ze.Z,
                    { key: t },
                    n.createElement(
                      'div',
                      { onClick: () => v(t + 1, e.key), className: g(t + 1) },
                      e,
                    ),
                  ),
                ),
          );
        },
        Re = Se,
        Te = (r(81984), r(86865)),
        ze = e => {
          var t = e.children,
            r = e.title,
            a = e.placement,
            l = e.trigger,
            s = void 0 === l ? 'hover' : l,
            c = e.overlayClassName,
            i =
              ((0, y.Z)(e, [
                'children',
                'title',
                'placement',
                'trigger',
                'overlayClassName',
              ]),
              'qiji-oni-tooltip');
          return n.createElement(
            Te.Z,
            { placement: a, overlayClassName: o()(i, c), title: r, trigger: s },
            t,
          );
        };
      ze.defaultProps = {
        placement: 'top',
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        arrowPointAtCenter: !1,
        autoAdjustOverflow: !0,
      };
      var Ie = ze,
        Me = (r(36661), r(18987)),
        We = (r(53690), r(39356)),
        Fe = (r(60674), r(51947)),
        Be = r(69273),
        De = r(19438);
      console.log(Fe, Be, De);
      var Qe = () => {
          De.forEach(e => {
            var t = Be.filter(t => t.code === e.cityCode)[0];
            t &&
              ((t.children = t.children || []),
              t.children.push({ label: e.name, value: e.code }));
          }),
            Be.forEach(e => {
              var t = Fe.filter(t => t.code === e.provinceCode)[0];
              t &&
                ((t.children = t.children || []),
                t.children.push({
                  label: e.name,
                  value: e.code,
                  children: e.children,
                }));
            });
          var e = Fe.map(e => ({
            label: e.name,
            value: e.code,
            children: e.children,
          }));
          return n.createElement(
            'div',
            { style: { margin: 24 } },
            n.createElement(
              'p',
              { style: { marginBottom: 24 } },
              'Current antd version: ',
              We.Z,
              ' ',
              n.createElement('br', null),
              'You can change antd version on the left panel (Dependencies section).',
            ),
            n.createElement(Me.Z, {
              options: e,
              showSearch: !0,
              placeholder: '\u8bf7\u9009\u62e9\u5730\u5740',
              style: { width: 400 },
            }),
          );
        },
        He = Qe;
      class Ke extends n.Component {
        constructor() {
          super(...arguments), (this.state = { hasError: !1 });
        }
        static getDerivedStateFromError(e) {
          return { hasError: !0, err: e };
        }
        componentDidCatch(e, t) {
          console.log('\u5f02\u5e38\u4e0a\u62a5', e, t),
            this.setState({ hasError: !0 });
        }
        render() {
          return this.state.hasError ? this.props.textErr : this.props.children;
        }
      }
      var Pe = Ke;
      function qe(e) {
        return e.prototype && e.prototype.render;
      }
      var Oe = e => t => {
          if (qe(t)) {
            class r extends n.Component {
              render() {
                var r = this.props.forwardedRef;
                return n.createElement(
                  Pe,
                  e,
                  qe(t)
                    ? n.createElement(t, (0, j.Z)({}, this.props, { ref: r }))
                    : n.createElement(t, this.props),
                );
              }
            }
            return (0, n.forwardRef)((e, t) =>
              n.createElement(r, (0, j.Z)({ forwardedRef: t }, e)),
            );
          }
          return (
            console.log(111, 'function'),
            r => n.createElement(Pe, e, n.createElement(t, r))
          );
        },
        Ue = Oe,
        Ve = r(71765),
        Je = r.n(Ve),
        _e = () => n.createElement('div', null, 'loading'),
        Ge = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _e;
          return Je()({ loader: e, loading: t });
        },
        Ye = e => {
          var t = e.className,
            r = e.errNum,
            a = e.lazyLoad,
            l = e.defaultSrc,
            s = e.src,
            c = e.errDisplay,
            i = e.errorCallback,
            d = e.children,
            m =
              (e.alt,
              (0, y.Z)(e, [
                'className',
                'errNum',
                'lazyLoad',
                'defaultSrc',
                'src',
                'errDisplay',
                'errorCallback',
                'children',
                'alt',
              ])),
            u = (0, n.useState)(l || ''),
            f = (0, b.default)(u, 2),
            h = f[0],
            g = f[1],
            v = (0, n.useRef)(null),
            p = () => {
              var e,
                t,
                r =
                  window.innerHeight ||
                  document.documentElement.clientHeight ||
                  document.body.clientHeight;
              return (
                (null === (e = v.current) ||
                void 0 === e ||
                null === (t = e.getBoundingClientRect()) ||
                void 0 === t
                  ? void 0
                  : t.top) <=
                r + 100
              );
            },
            E = () => {
              var e = new Image(),
                t = 1;
              (e.src = s),
                (e.onload = () => {
                  g(s), (e = null);
                }),
                (e.onerror = n => {
                  if (
                    ('function' == typeof i
                      ? i()
                      : console.error(
                          'props errorCallback is not a function!!!',
                        ),
                    t >= r)
                  ) {
                    if (c) return;
                    g(l || ''), (e = null);
                  } else e && (e.src = s);
                  t++;
                });
            },
            C = () => {
              p()
                ? (E(), window.removeEventListener('scroll', C, !0))
                : (v.current.src = l || '');
            };
          (0, n.useEffect)(() => {
            if (a) {
              if (!p())
                return (
                  window.addEventListener('scroll', C, !0),
                  () => {
                    window.removeEventListener('scroll', C, !0);
                  }
                );
              E();
            } else E();
          }, []);
          var k = o()('pui-image', t);
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              'img',
              (0, j.Z)({ ref: v, className: k }, m, { src: h }),
            ),
            d,
          );
        };
      Ye.defaultProps = {
        src: '',
        defaultSrc: '',
        lazyLoad: !0,
        errNum: 1,
        errDisplay: !1,
        errorCallback: () => {},
      };
      var Xe = Ye;
    },
    46700: function(e, t, r) {
      var n = {
        './af': 60757,
        './af.js': 60757,
        './ar': 22490,
        './ar-dz': 15633,
        './ar-dz.js': 15633,
        './ar-kw': 12602,
        './ar-kw.js': 12602,
        './ar-ly': 34074,
        './ar-ly.js': 34074,
        './ar-ma': 98317,
        './ar-ma.js': 98317,
        './ar-sa': 29752,
        './ar-sa.js': 29752,
        './ar-tn': 66061,
        './ar-tn.js': 66061,
        './ar.js': 22490,
        './az': 92136,
        './az.js': 92136,
        './be': 57080,
        './be.js': 57080,
        './bg': 48473,
        './bg.js': 48473,
        './bm': 38856,
        './bm.js': 38856,
        './bn': 17146,
        './bn-bd': 5223,
        './bn-bd.js': 5223,
        './bn.js': 17146,
        './bo': 30594,
        './bo.js': 30594,
        './br': 48831,
        './br.js': 48831,
        './bs': 67530,
        './bs.js': 67530,
        './ca': 82766,
        './ca.js': 82766,
        './cs': 3830,
        './cs.js': 3830,
        './cv': 74487,
        './cv.js': 74487,
        './cy': 60146,
        './cy.js': 60146,
        './da': 66186,
        './da.js': 66186,
        './de': 86621,
        './de-at': 72833,
        './de-at.js': 72833,
        './de-ch': 78113,
        './de-ch.js': 78113,
        './de.js': 86621,
        './dv': 32345,
        './dv.js': 32345,
        './el': 69981,
        './el.js': 69981,
        './en-au': 16498,
        './en-au.js': 16498,
        './en-ca': 94555,
        './en-ca.js': 94555,
        './en-gb': 93204,
        './en-gb.js': 93204,
        './en-ie': 89988,
        './en-ie.js': 89988,
        './en-il': 3777,
        './en-il.js': 3777,
        './en-in': 23231,
        './en-in.js': 23231,
        './en-nz': 30533,
        './en-nz.js': 30533,
        './en-sg': 73034,
        './en-sg.js': 73034,
        './eo': 21496,
        './eo.js': 21496,
        './es': 65678,
        './es-do': 76879,
        './es-do.js': 76879,
        './es-mx': 55440,
        './es-mx.js': 55440,
        './es-us': 66963,
        './es-us.js': 66963,
        './es.js': 65678,
        './et': 41003,
        './et.js': 41003,
        './eu': 90013,
        './eu.js': 90013,
        './fa': 29692,
        './fa.js': 29692,
        './fi': 68102,
        './fi.js': 68102,
        './fil': 22918,
        './fil.js': 22918,
        './fo': 87496,
        './fo.js': 87496,
        './fr': 67474,
        './fr-ca': 1853,
        './fr-ca.js': 1853,
        './fr-ch': 44675,
        './fr-ch.js': 44675,
        './fr.js': 67474,
        './fy': 97061,
        './fy.js': 97061,
        './ga': 96867,
        './ga.js': 96867,
        './gd': 18364,
        './gd.js': 18364,
        './gl': 96383,
        './gl.js': 96383,
        './gom-deva': 64220,
        './gom-deva.js': 64220,
        './gom-latn': 87202,
        './gom-latn.js': 87202,
        './gu': 25249,
        './gu.js': 25249,
        './he': 96022,
        './he.js': 96022,
        './hi': 65395,
        './hi.js': 65395,
        './hr': 29361,
        './hr.js': 29361,
        './hu': 93797,
        './hu.js': 93797,
        './hy-am': 85874,
        './hy-am.js': 85874,
        './id': 77084,
        './id.js': 77084,
        './is': 12592,
        './is.js': 12592,
        './it': 54296,
        './it-ch': 35272,
        './it-ch.js': 35272,
        './it.js': 54296,
        './ja': 17620,
        './ja.js': 17620,
        './jv': 46898,
        './jv.js': 46898,
        './ka': 62752,
        './ka.js': 62752,
        './kk': 5632,
        './kk.js': 5632,
        './km': 16667,
        './km.js': 16667,
        './kn': 88963,
        './kn.js': 88963,
        './ko': 35953,
        './ko.js': 35953,
        './ku': 72004,
        './ku.js': 72004,
        './ky': 71803,
        './ky.js': 71803,
        './lb': 12835,
        './lb.js': 12835,
        './lo': 98185,
        './lo.js': 98185,
        './lt': 40538,
        './lt.js': 40538,
        './lv': 74582,
        './lv.js': 74582,
        './me': 23663,
        './me.js': 23663,
        './mi': 35840,
        './mi.js': 35840,
        './mk': 88701,
        './mk.js': 88701,
        './ml': 2209,
        './ml.js': 2209,
        './mn': 38391,
        './mn.js': 38391,
        './mr': 14481,
        './mr.js': 14481,
        './ms': 20135,
        './ms-my': 29977,
        './ms-my.js': 29977,
        './ms.js': 20135,
        './mt': 81029,
        './mt.js': 81029,
        './my': 27402,
        './my.js': 27402,
        './nb': 18929,
        './nb.js': 18929,
        './ne': 29030,
        './ne.js': 29030,
        './nl': 18208,
        './nl-be': 92510,
        './nl-be.js': 92510,
        './nl.js': 18208,
        './nn': 46456,
        './nn.js': 46456,
        './oc-lnc': 98952,
        './oc-lnc.js': 98952,
        './pa-in': 9734,
        './pa-in.js': 9734,
        './pl': 67042,
        './pl.js': 67042,
        './pt': 97351,
        './pt-br': 63673,
        './pt-br.js': 63673,
        './pt.js': 97351,
        './ro': 62080,
        './ro.js': 62080,
        './ru': 78025,
        './ru.js': 78025,
        './sd': 51922,
        './sd.js': 51922,
        './se': 82651,
        './se.js': 82651,
        './si': 29320,
        './si.js': 29320,
        './sk': 23337,
        './sk.js': 23337,
        './sl': 8683,
        './sl.js': 8683,
        './sq': 10119,
        './sq.js': 10119,
        './sr': 72660,
        './sr-cyrl': 9322,
        './sr-cyrl.js': 9322,
        './sr.js': 72660,
        './ss': 33350,
        './ss.js': 33350,
        './sv': 19607,
        './sv.js': 19607,
        './sw': 16552,
        './sw.js': 16552,
        './ta': 25391,
        './ta.js': 25391,
        './te': 78149,
        './te.js': 78149,
        './tet': 27113,
        './tet.js': 27113,
        './tg': 4503,
        './tg.js': 4503,
        './th': 33665,
        './th.js': 33665,
        './tk': 68356,
        './tk.js': 68356,
        './tl-ph': 62917,
        './tl-ph.js': 62917,
        './tlh': 42669,
        './tlh.js': 42669,
        './tr': 34573,
        './tr.js': 34573,
        './tzl': 16022,
        './tzl.js': 16022,
        './tzm': 881,
        './tzm-latn': 30897,
        './tzm-latn.js': 30897,
        './tzm.js': 881,
        './ug-cn': 45472,
        './ug-cn.js': 45472,
        './uk': 1300,
        './uk.js': 1300,
        './ur': 96961,
        './ur.js': 96961,
        './uz': 51699,
        './uz-latn': 87476,
        './uz-latn.js': 87476,
        './uz.js': 51699,
        './vi': 91544,
        './vi.js': 91544,
        './x-pseudo': 22086,
        './x-pseudo.js': 22086,
        './yo': 85911,
        './yo.js': 85911,
        './zh-cn': 38098,
        './zh-cn.js': 38098,
        './zh-hk': 53720,
        './zh-hk.js': 53720,
        './zh-mo': 10794,
        './zh-mo.js': 10794,
        './zh-tw': 36087,
        './zh-tw.js': 36087,
      };
      function a(e) {
        var t = o(e);
        return r(t);
      }
      function o(e) {
        if (!r.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return n[e];
      }
      (a.keys = function() {
        return Object.keys(n);
      }),
        (a.resolve = o),
        (e.exports = a),
        (a.id = 46700);
    },
  },
]);
