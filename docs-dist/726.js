(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [726],
  {
    67154: function(e) {
      function l() {
        return (
          (e.exports = l =
            Object.assign ||
            function(e) {
              for (var l = 1; l < arguments.length; l++) {
                var a = arguments[l];
                for (var t in a)
                  Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
              }
              return e;
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          l.apply(this, arguments)
        );
      }
      (e.exports = l),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    95318: function(e) {
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (e.exports = l),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    77336: function(e, l, a) {
      'use strict';
      var t = a(95318);
      Object.defineProperty(l, '__esModule', { value: !0 }),
        (l.default = void 0);
      var r = t(a(78350)),
        o = r['default'];
      l.default = o;
    },
    78350: function(e, l, a) {
      'use strict';
      var t = a(95318);
      Object.defineProperty(l, '__esModule', { value: !0 }),
        (l.default = void 0);
      var r = t(a(67154)),
        o = t(a(19406)),
        n = t(a(66322)),
        i = {
          lang: (0, r['default'])(
            {
              placeholder: '\u8bf7\u9009\u62e9\u65e5\u671f',
              yearPlaceholder: '\u8bf7\u9009\u62e9\u5e74\u4efd',
              quarterPlaceholder: '\u8bf7\u9009\u62e9\u5b63\u5ea6',
              monthPlaceholder: '\u8bf7\u9009\u62e9\u6708\u4efd',
              weekPlaceholder: '\u8bf7\u9009\u62e9\u5468',
              rangePlaceholder: [
                '\u5f00\u59cb\u65e5\u671f',
                '\u7ed3\u675f\u65e5\u671f',
              ],
              rangeYearPlaceholder: [
                '\u5f00\u59cb\u5e74\u4efd',
                '\u7ed3\u675f\u5e74\u4efd',
              ],
              rangeMonthPlaceholder: [
                '\u5f00\u59cb\u6708\u4efd',
                '\u7ed3\u675f\u6708\u4efd',
              ],
              rangeQuarterPlaceholder: [
                '\u5f00\u59cb\u5b63\u5ea6',
                '\u7ed3\u675f\u5b63\u5ea6',
              ],
              rangeWeekPlaceholder: [
                '\u5f00\u59cb\u5468',
                '\u7ed3\u675f\u5468',
              ],
            },
            o['default'],
          ),
          timePickerLocale: (0, r['default'])({}, n['default']),
        };
      i.lang.ok = '\u786e\u5b9a';
      var d = i;
      l.default = d;
    },
    53726: function(e, l, a) {
      'use strict';
      var t = a(95318);
      Object.defineProperty(l, '__esModule', { value: !0 }),
        (l.default = void 0);
      var r = t(a(50017)),
        o = t(a(78350)),
        n = t(a(66322)),
        i = t(a(77336)),
        d = '${label}\u4e0d\u662f\u4e00\u4e2a\u6709\u6548\u7684${type}',
        c = {
          locale: 'zh-cn',
          Pagination: r['default'],
          DatePicker: o['default'],
          TimePicker: n['default'],
          Calendar: i['default'],
          global: { placeholder: '\u8bf7\u9009\u62e9' },
          Table: {
            filterTitle: '\u7b5b\u9009',
            filterConfirm: '\u786e\u5b9a',
            filterReset: '\u91cd\u7f6e',
            filterEmptyText: '\u65e0\u7b5b\u9009\u9879',
            filterCheckall: '\u5168\u9009',
            filterSearchPlaceholder:
              '\u5728\u7b5b\u9009\u9879\u4e2d\u641c\u7d22',
            selectAll: '\u5168\u9009\u5f53\u9875',
            selectInvert: '\u53cd\u9009\u5f53\u9875',
            selectNone: '\u6e05\u7a7a\u6240\u6709',
            selectionAll: '\u5168\u9009\u6240\u6709',
            sortTitle: '\u6392\u5e8f',
            expand: '\u5c55\u5f00\u884c',
            collapse: '\u5173\u95ed\u884c',
            triggerDesc: '\u70b9\u51fb\u964d\u5e8f',
            triggerAsc: '\u70b9\u51fb\u5347\u5e8f',
            cancelSort: '\u53d6\u6d88\u6392\u5e8f',
          },
          Modal: {
            okText: '\u786e\u5b9a',
            cancelText: '\u53d6\u6d88',
            justOkText: '\u77e5\u9053\u4e86',
          },
          Popconfirm: { cancelText: '\u53d6\u6d88', okText: '\u786e\u5b9a' },
          Transfer: {
            searchPlaceholder: '\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9',
            itemUnit: '\u9879',
            itemsUnit: '\u9879',
            remove: '\u5220\u9664',
            selectCurrent: '\u5168\u9009\u5f53\u9875',
            removeCurrent: '\u5220\u9664\u5f53\u9875',
            selectAll: '\u5168\u9009\u6240\u6709',
            removeAll: '\u5220\u9664\u5168\u90e8',
            selectInvert: '\u53cd\u9009\u5f53\u9875',
          },
          Upload: {
            uploading: '\u6587\u4ef6\u4e0a\u4f20\u4e2d',
            removeFile: '\u5220\u9664\u6587\u4ef6',
            uploadError: '\u4e0a\u4f20\u9519\u8bef',
            previewFile: '\u9884\u89c8\u6587\u4ef6',
            downloadFile: '\u4e0b\u8f7d\u6587\u4ef6',
          },
          Empty: { description: '\u6682\u65e0\u6570\u636e' },
          Icon: { icon: '\u56fe\u6807' },
          Text: {
            edit: '\u7f16\u8f91',
            copy: '\u590d\u5236',
            copied: '\u590d\u5236\u6210\u529f',
            expand: '\u5c55\u5f00',
          },
          PageHeader: { back: '\u8fd4\u56de' },
          Form: {
            optional: '\uff08\u53ef\u9009\uff09',
            defaultValidateMessages: {
              default: '\u5b57\u6bb5\u9a8c\u8bc1\u9519\u8bef${label}',
              required: '\u8bf7\u8f93\u5165${label}',
              enum:
                '${label}\u5fc5\u987b\u662f\u5176\u4e2d\u4e00\u4e2a[${enum}]',
              whitespace: '${label}\u4e0d\u80fd\u4e3a\u7a7a\u5b57\u7b26',
              date: {
                format: '${label}\u65e5\u671f\u683c\u5f0f\u65e0\u6548',
                parse: '${label}\u4e0d\u80fd\u8f6c\u6362\u4e3a\u65e5\u671f',
                invalid: '${label}\u662f\u4e00\u4e2a\u65e0\u6548\u65e5\u671f',
              },
              types: {
                string: d,
                method: d,
                array: d,
                object: d,
                number: d,
                date: d,
                boolean: d,
                integer: d,
                float: d,
                regexp: d,
                email: d,
                url: d,
                hex: d,
              },
              string: {
                len: '${label}\u987b\u4e3a${len}\u4e2a\u5b57\u7b26',
                min: '${label}\u6700\u5c11${min}\u4e2a\u5b57\u7b26',
                max: '${label}\u6700\u591a${max}\u4e2a\u5b57\u7b26',
                range:
                  '${label}\u987b\u5728${min}-${max}\u5b57\u7b26\u4e4b\u95f4',
              },
              number: {
                len: '${label}\u5fc5\u987b\u7b49\u4e8e${len}',
                min: '${label}\u6700\u5c0f\u503c\u4e3a${min}',
                max: '${label}\u6700\u5927\u503c\u4e3a${max}',
                range: '${label}\u987b\u5728${min}-${max}\u4e4b\u95f4',
              },
              array: {
                len: '\u987b\u4e3a${len}\u4e2a${label}',
                min: '\u6700\u5c11${min}\u4e2a${label}',
                max: '\u6700\u591a${max}\u4e2a${label}',
                range:
                  '${label}\u6570\u91cf\u987b\u5728${min}-${max}\u4e4b\u95f4',
              },
              pattern: {
                mismatch:
                  '${label}\u4e0e\u6a21\u5f0f\u4e0d\u5339\u914d${pattern}',
              },
            },
          },
          Image: { preview: '\u9884\u89c8' },
        },
        u = c;
      l.default = u;
    },
    66322: function(e, l) {
      'use strict';
      Object.defineProperty(l, '__esModule', { value: !0 }),
        (l.default = void 0);
      var a = {
          placeholder: '\u8bf7\u9009\u62e9\u65f6\u95f4',
          rangePlaceholder: [
            '\u5f00\u59cb\u65f6\u95f4',
            '\u7ed3\u675f\u65f6\u95f4',
          ],
        },
        t = a;
      l.default = t;
    },
    50017: function(e, l) {
      'use strict';
      Object.defineProperty(l, '__esModule', { value: !0 }),
        (l.default = void 0);
      var a = {
        items_per_page: '\u6761/\u9875',
        jump_to: '\u8df3\u81f3',
        jump_to_confirm: '\u786e\u5b9a',
        page: '\u9875',
        prev_page: '\u4e0a\u4e00\u9875',
        next_page: '\u4e0b\u4e00\u9875',
        prev_5: '\u5411\u524d 5 \u9875',
        next_5: '\u5411\u540e 5 \u9875',
        prev_3: '\u5411\u524d 3 \u9875',
        next_3: '\u5411\u540e 3 \u9875',
        page_size: '\u9875\u7801',
      };
      l.default = a;
    },
    19406: function(e, l) {
      'use strict';
      Object.defineProperty(l, '__esModule', { value: !0 }),
        (l.default = void 0);
      var a = {
          locale: 'zh_CN',
          today: '\u4eca\u5929',
          now: '\u6b64\u523b',
          backToToday: '\u8fd4\u56de\u4eca\u5929',
          ok: '\u786e\u5b9a',
          timeSelect: '\u9009\u62e9\u65f6\u95f4',
          dateSelect: '\u9009\u62e9\u65e5\u671f',
          weekSelect: '\u9009\u62e9\u5468',
          clear: '\u6e05\u9664',
          month: '\u6708',
          year: '\u5e74',
          previousMonth: '\u4e0a\u4e2a\u6708 (\u7ffb\u9875\u4e0a\u952e)',
          nextMonth: '\u4e0b\u4e2a\u6708 (\u7ffb\u9875\u4e0b\u952e)',
          monthSelect: '\u9009\u62e9\u6708\u4efd',
          yearSelect: '\u9009\u62e9\u5e74\u4efd',
          decadeSelect: '\u9009\u62e9\u5e74\u4ee3',
          yearFormat: 'YYYY\u5e74',
          dayFormat: 'D\u65e5',
          dateFormat: 'YYYY\u5e74M\u6708D\u65e5',
          dateTimeFormat: 'YYYY\u5e74M\u6708D\u65e5 HH\u65f6mm\u5206ss\u79d2',
          previousYear:
            '\u4e0a\u4e00\u5e74 (Control\u952e\u52a0\u5de6\u65b9\u5411\u952e)',
          nextYear:
            '\u4e0b\u4e00\u5e74 (Control\u952e\u52a0\u53f3\u65b9\u5411\u952e)',
          previousDecade: '\u4e0a\u4e00\u5e74\u4ee3',
          nextDecade: '\u4e0b\u4e00\u5e74\u4ee3',
          previousCentury: '\u4e0a\u4e00\u4e16\u7eaa',
          nextCentury: '\u4e0b\u4e00\u4e16\u7eaa',
        },
        t = a;
      l.default = t;
    },
  },
]);
