(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [210],
  {
    86845: function() {},
    8036: function() {},
    54388: function(e, t, l) {
      'use strict';
      l.r(t);
      var n = l(67294),
        r = l(96089),
        a = l(32851),
        c = l(65659),
        m = l(4187),
        u = n.memo(e => {
          var t = e.demos,
            l = t['datePicker-demo'].component,
            u = t['datePicker-demo-1'].component,
            d = t['datePicker-demo-2'].component;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                'div',
                { className: 'markdown' },
                n.createElement(
                  'h2',
                  { id: 'datepicker-\u65e5\u671f\u9009\u62e9\u6846' },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to: '#datepicker-\u65e5\u671f\u9009\u62e9\u6846',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'DatePicker \u65e5\u671f\u9009\u62e9\u6846',
                ),
                n.createElement(
                  'p',
                  null,
                  'Demo:(\u5177\u4f53\u7528\u6cd5\u53c2\u7167\uff1a',
                  n.createElement(
                    r.Link,
                    { to: 'https://ant.design/components/date-picker-cn/' },
                    'https://ant.design/components/date-picker-cn/',
                  ),
                  ')',
                ),
              ),
              n.createElement(
                a.default,
                t['datePicker-demo'].previewerProps,
                n.createElement(l, null),
              ),
              n.createElement(
                'div',
                { className: 'markdown' },
                n.createElement(
                  'p',
                  null,
                  '\u8f93\u5165\u6216\u9009\u62e9\u65e5\u671f\u7684\u63a7\u4ef6\u3002',
                ),
                n.createElement(
                  'h2',
                  { id: '\u4f55\u65f6\u4f7f\u7528' },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to: '#\u4f55\u65f6\u4f7f\u7528',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4f55\u65f6\u4f7f\u7528',
                ),
                n.createElement(
                  'p',
                  null,
                  '\u5f53\u7528\u6237\u9700\u8981\u8f93\u5165\u4e00\u4e2a\u65e5\u671f\uff0c\u53ef\u4ee5\u70b9\u51fb\u6807\u51c6\u8f93\u5165\u6846\uff0c\u5f39\u51fa\u65e5\u671f\u9762\u677f\u8fdb\u884c\u9009\u62e9\u3002',
                ),
                n.createElement(
                  'h2',
                  { id: 'api' },
                  n.createElement(
                    r.AnchorLink,
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'API',
                ),
                n.createElement(
                  'p',
                  null,
                  '\u65e5\u671f\u7c7b\u7ec4\u4ef6\u5305\u62ec\u4ee5\u4e0b\u4e94\u79cd\u5f62\u5f0f\u3002',
                ),
                n.createElement(
                  'ul',
                  null,
                  n.createElement('li', null, 'DatePicker'),
                  n.createElement('li', null, 'DatePicker[picker="month"]'),
                  n.createElement('li', null, 'DatePicker[picker="week"]'),
                  n.createElement('li', null, 'DatePicker[picker="year"]'),
                  n.createElement(
                    'li',
                    null,
                    'DatePicker[picker="quarter"] (4.1.0 \u65b0\u589e)',
                  ),
                  n.createElement('li', null, 'RangePicker'),
                ),
                n.createElement(
                  'h3',
                  { id: '\u56fd\u9645\u5316\u914d\u7f6e' },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to: '#\u56fd\u9645\u5316\u914d\u7f6e',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u56fd\u9645\u5316\u914d\u7f6e',
                ),
                n.createElement(
                  'p',
                  null,
                  '\u9ed8\u8ba4\u914d\u7f6e\u4e3a en-US\uff0c\u5982\u679c\u4f60\u9700\u8981\u8bbe\u7f6e\u5176\u4ed6\u8bed\u8a00\uff0c\u63a8\u8350\u5728\u5165\u53e3\u5904\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u56fd\u9645\u5316\u7ec4\u4ef6\uff0c\u8be6\u89c1\uff1a',
                  n.createElement(
                    r.Link,
                    { to: 'https://ant.design/components/config-provider-cn/' },
                    'ConfigProvider \u56fd\u9645\u5316',
                  ),
                  '\u3002',
                ),
                n.createElement(
                  'p',
                  null,
                  '\u5982\u6709\u7279\u6b8a\u9700\u6c42\uff08\u4ec5\u4fee\u6539\u5355\u4e00\u7ec4\u4ef6\u7684\u8bed\u8a00\uff09\uff0c\u8bf7\u4f7f\u7528 locale \u53c2\u6570\uff0c\u53c2\u8003\uff1a',
                  n.createElement(
                    r.Link,
                    {
                      to:
                        'https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json',
                    },
                    '\u9ed8\u8ba4\u914d\u7f6e',
                  ),
                  '\u3002',
                ),
              ),
              n.createElement(
                a.default,
                t['datePicker-demo-1'].previewerProps,
                n.createElement(u, null),
              ),
              n.createElement(
                a.default,
                t['datePicker-demo-2'].previewerProps,
                n.createElement(d, null),
              ),
              n.createElement(
                'div',
                { className: 'markdown' },
                n.createElement(
                  'h3',
                  { id: '\u5171\u540c\u7684-api' },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to: '#\u5171\u540c\u7684-api',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u5171\u540c\u7684 API',
                ),
                n.createElement(
                  'p',
                  null,
                  '\u4ee5\u4e0b API \u4e3a DatePicker\u3001 RangePicker \u5171\u4eab\u7684 API\u3002',
                ),
                n.createElement(
                  m.Z,
                  null,
                  n.createElement(
                    'thead',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('th', null, '\u53c2\u6570'),
                      n.createElement('th', null, '\u8bf4\u660e'),
                      n.createElement('th', null, '\u7c7b\u578b'),
                      n.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                      n.createElement('th', null, '\u7248\u672c'),
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'allowClear'),
                      n.createElement(
                        'td',
                        null,
                        '\u662f\u5426\u663e\u793a\u6e05\u9664\u6309\u94ae',
                      ),
                      n.createElement('td', null, 'boolean'),
                      n.createElement('td', null, 'true'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'autoFocus'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u52a8\u83b7\u53d6\u7126\u70b9',
                      ),
                      n.createElement('td', null, 'boolean'),
                      n.createElement('td', null, 'false'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'bordered'),
                      n.createElement(
                        'td',
                        null,
                        '\u662f\u5426\u6709\u8fb9\u6846',
                      ),
                      n.createElement('td', null, 'boolean'),
                      n.createElement('td', null, 'true'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'className'),
                      n.createElement(
                        'td',
                        null,
                        '\u9009\u62e9\u5668 className',
                      ),
                      n.createElement('td', null, 'string'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'dateRender'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49\u65e5\u671f\u5355\u5143\u683c\u7684\u5185\u5bb9',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(currentDate: moment, today: moment) => React.ReactNode',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'disabled'),
                      n.createElement('td', null, '\u7981\u7528'),
                      n.createElement('td', null, 'boolean'),
                      n.createElement('td', null, 'false'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'disabledDate'),
                      n.createElement(
                        'td',
                        null,
                        '\u4e0d\u53ef\u9009\u62e9\u7684\u65e5\u671f',
                      ),
                      n.createElement(
                        'td',
                        null,
                        '(currentDate: moment) => boolean',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'dropdownClassName'),
                      n.createElement(
                        'td',
                        null,
                        '\u989d\u5916\u7684\u5f39\u51fa\u65e5\u5386 className',
                      ),
                      n.createElement('td', null, 'string'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'getPopupContainer'),
                      n.createElement(
                        'td',
                        null,
                        '\u5b9a\u4e49\u6d6e\u5c42\u7684\u5bb9\u5668\uff0c\u9ed8\u8ba4\u4e3a body \u4e0a\u65b0\u5efa div',
                      ),
                      n.createElement('td', null, 'function(trigger)'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'inputReadOnly'),
                      n.createElement(
                        'td',
                        null,
                        '\u8bbe\u7f6e\u8f93\u5165\u6846\u4e3a\u53ea\u8bfb\uff08\u907f\u514d\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u6253\u5f00\u865a\u62df\u952e\u76d8\uff09',
                      ),
                      n.createElement('td', null, 'boolean'),
                      n.createElement('td', null, 'false'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'locale'),
                      n.createElement(
                        'td',
                        null,
                        '\u56fd\u9645\u5316\u914d\u7f6e',
                      ),
                      n.createElement('td', null, 'object'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          {
                            to:
                              'https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json',
                          },
                          '\u9ed8\u8ba4\u914d\u7f6e',
                        ),
                      ),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'mode'),
                      n.createElement(
                        'td',
                        null,
                        '\u65e5\u671f\u9762\u677f\u7684\u72b6\u6001\uff08',
                        n.createElement(
                          r.AnchorLink,
                          {
                            to:
                              '/docs/react/faq#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-DatePicker/RangePicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%EF%BC%8C%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD/%E6%9C%88%E4%BB%BD%EF%BC%9F',
                          },
                          '\u8bbe\u7f6e\u540e\u65e0\u6cd5\u9009\u62e9\u5e74\u4efd/\u6708\u4efd\uff1f',
                        ),
                        '\uff09',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'time'),
                        ' | ',
                        n.createElement('code', null, 'date'),
                        ' | ',
                        n.createElement('code', null, 'month'),
                        ' | ',
                        n.createElement('code', null, 'year'),
                        ' | ',
                        n.createElement('code', null, 'decade'),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'nextIcon'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49\u4e0b\u4e00\u4e2a\u56fe\u6807',
                      ),
                      n.createElement('td', null, 'ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null, '4.17.0'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'open'),
                      n.createElement(
                        'td',
                        null,
                        '\u63a7\u5236\u5f39\u5c42\u662f\u5426\u5c55\u5f00',
                      ),
                      n.createElement('td', null, 'boolean'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'panelRender'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49\u6e32\u67d3\u9762\u677f',
                      ),
                      n.createElement('td', null, '(panelNode) => ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null, '4.5.0'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'picker'),
                      n.createElement(
                        'td',
                        null,
                        '\u8bbe\u7f6e\u9009\u62e9\u5668\u7c7b\u578b',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'date'),
                        ' | ',
                        n.createElement('code', null, 'week'),
                        ' | ',
                        n.createElement('code', null, 'month'),
                        ' | ',
                        n.createElement('code', null, 'quarter'),
                        ' | ',
                        n.createElement('code', null, 'year'),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'date'),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'quarter'),
                        ': 4.1.0',
                      ),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'placeholder'),
                      n.createElement(
                        'td',
                        null,
                        '\u8f93\u5165\u6846\u63d0\u793a\u6587\u5b57',
                      ),
                      n.createElement('td', null, 'string | [string, string]'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'placement'),
                      n.createElement(
                        'td',
                        null,
                        '\u9009\u62e9\u6846\u5f39\u51fa\u7684\u4f4d\u7f6e',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'bottomLeft'),
                        ' ',
                        n.createElement('code', null, 'bottomRight'),
                        ' ',
                        n.createElement('code', null, 'topLeft'),
                        ' ',
                        n.createElement('code', null, 'topRight'),
                      ),
                      n.createElement('td', null, 'bottomLeft'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'popupStyle'),
                      n.createElement(
                        'td',
                        null,
                        '\u989d\u5916\u7684\u5f39\u51fa\u65e5\u5386\u6837\u5f0f',
                      ),
                      n.createElement('td', null, 'CSSProperties'),
                      n.createElement('td', null, '{', '}'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'prevIcon'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49\u4e0a\u4e00\u4e2a\u56fe\u6807',
                      ),
                      n.createElement('td', null, 'ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null, '4.17.0'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'size'),
                      n.createElement(
                        'td',
                        null,
                        '\u8f93\u5165\u6846\u5927\u5c0f\uff0c',
                        n.createElement('code', null, 'large'),
                        ' \u9ad8\u5ea6\u4e3a 40px\uff0c',
                        n.createElement('code', null, 'small'),
                        ' \u4e3a 24px\uff0c\u9ed8\u8ba4\u662f 32px',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'large'),
                        ' | ',
                        n.createElement('code', null, 'middle'),
                        ' | ',
                        n.createElement('code', null, 'small'),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'status'),
                      n.createElement(
                        'td',
                        null,
                        '\u8bbe\u7f6e\u6821\u9a8c\u72b6\u6001',
                      ),
                      n.createElement('td', null, "'error' | 'warning'"),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null, '4.19.0'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'style'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49\u8f93\u5165\u6846\u6837\u5f0f',
                      ),
                      n.createElement('td', null, 'CSSProperties'),
                      n.createElement('td', null, '{', '}'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'suffixIcon'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49\u7684\u9009\u62e9\u6846\u540e\u7f00\u56fe\u6807',
                      ),
                      n.createElement('td', null, 'ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'superNextIcon'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49 ',
                        n.createElement('code', null, '<<'),
                        ' \u5207\u6362\u56fe\u6807',
                      ),
                      n.createElement('td', null, 'ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null, '4.17.0'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'superPrevIcon'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49 ',
                        n.createElement('code', null, '>>'),
                        ' \u5207\u6362\u56fe\u6807',
                      ),
                      n.createElement('td', null, 'ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null, '4.17.0'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onOpenChange'),
                      n.createElement(
                        'td',
                        null,
                        '\u5f39\u51fa\u65e5\u5386\u548c\u5173\u95ed\u65e5\u5386\u7684\u56de\u8c03',
                      ),
                      n.createElement('td', null, 'function(open)'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onPanelChange'),
                      n.createElement(
                        'td',
                        null,
                        '\u65e5\u5386\u9762\u677f\u5207\u6362\u7684\u56de\u8c03',
                      ),
                      n.createElement('td', null, 'function(value, mode)'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                  ),
                ),
                n.createElement(
                  'h3',
                  { id: '\u5171\u540c\u7684\u65b9\u6cd5' },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to: '#\u5171\u540c\u7684\u65b9\u6cd5',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u5171\u540c\u7684\u65b9\u6cd5',
                ),
                n.createElement(
                  m.Z,
                  null,
                  n.createElement(
                    'thead',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('th', null, '\u540d\u79f0'),
                      n.createElement('th', null, '\u63cf\u8ff0'),
                      n.createElement('th', null, '\u7248\u672c'),
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'blur()'),
                      n.createElement('td', null, '\u79fb\u9664\u7126\u70b9'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'focus()'),
                      n.createElement('td', null, '\u83b7\u53d6\u7126\u70b9'),
                      n.createElement('td', null),
                    ),
                  ),
                ),
                n.createElement(
                  'h3',
                  { id: 'datepicker' },
                  n.createElement(
                    r.AnchorLink,
                    { to: '#datepicker', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'DatePicker',
                ),
                n.createElement(
                  m.Z,
                  null,
                  n.createElement(
                    'thead',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('th', null, '\u53c2\u6570'),
                      n.createElement('th', null, '\u8bf4\u660e'),
                      n.createElement('th', null, '\u7c7b\u578b'),
                      n.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                      n.createElement('th', null, '\u7248\u672c'),
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultPickerValue'),
                      n.createElement(
                        'td',
                        null,
                        '\u9ed8\u8ba4\u9762\u677f\u65e5\u671f',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultValue'),
                      n.createElement(
                        'td',
                        null,
                        '\u9ed8\u8ba4\u65e5\u671f\uff0c\u5982\u679c\u5f00\u59cb\u65f6\u95f4\u6216\u7ed3\u675f\u65f6\u95f4\u4e3a ',
                        n.createElement('code', null, 'null'),
                        ' \u6216\u8005 ',
                        n.createElement('code', null, 'undefined'),
                        '\uff0c\u65e5\u671f\u8303\u56f4\u5c06\u662f\u4e00\u4e2a\u5f00\u533a\u95f4',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'disabledTime'),
                      n.createElement(
                        'td',
                        null,
                        '\u4e0d\u53ef\u9009\u62e9\u7684\u65f6\u95f4',
                      ),
                      n.createElement('td', null, 'function(date)'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'format'),
                      n.createElement(
                        'td',
                        null,
                        '\u8bbe\u7f6e\u65e5\u671f\u683c\u5f0f\uff0c\u4e3a\u6570\u7ec4\u65f6\u652f\u6301\u591a\u683c\u5f0f\u5339\u914d\uff0c\u5c55\u793a\u4ee5\u7b2c\u4e00\u4e2a\u4e3a\u51c6\u3002\u914d\u7f6e\u53c2\u8003 ',
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment.js',
                        ),
                        '\uff0c\u652f\u6301',
                        n.createElement(
                          r.AnchorLink,
                          { to: '#components-date-picker-demo-format' },
                          '\u81ea\u5b9a\u4e49\u683c\u5f0f',
                        ),
                      ),
                      n.createElement(
                        'td',
                        null,
                        'string | (value: moment) => string | (string | (value: moment) => string)[]',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'YYYY-MM-DD'),
                      ),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'renderExtraFooter'),
                      n.createElement(
                        'td',
                        null,
                        '\u5728\u9762\u677f\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u9875\u811a',
                      ),
                      n.createElement('td', null, '(mode) => React.ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'showNow'),
                      n.createElement(
                        'td',
                        null,
                        '\u5f53\u8bbe\u5b9a\u4e86 ',
                        n.createElement('code', null, 'showTime'),
                        ' \u7684\u65f6\u5019\uff0c\u9762\u677f\u662f\u5426\u663e\u793a\u201c\u6b64\u523b\u201d\u6309\u94ae',
                      ),
                      n.createElement('td', null, 'boolean'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null, '4.4.0'),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'showTime'),
                      n.createElement(
                        'td',
                        null,
                        '\u589e\u52a0\u65f6\u95f4\u9009\u62e9\u529f\u80fd',
                      ),
                      n.createElement('td', null, 'Object | boolean'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.AnchorLink,
                          { to: '/components/time-picker/#API' },
                          'TimePicker Options',
                        ),
                      ),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'showTime.defaultValue'),
                      n.createElement(
                        'td',
                        null,
                        '\u8bbe\u7f6e\u7528\u6237\u9009\u62e9\u65e5\u671f\u65f6\u9ed8\u8ba4\u7684\u65f6\u5206\u79d2\uff0c',
                        n.createElement(
                          r.AnchorLink,
                          { to: '#components-date-picker-demo-disabled-date' },
                          '\u4f8b\u5b50',
                        ),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, 'moment()'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'showToday'),
                      n.createElement(
                        'td',
                        null,
                        '\u662f\u5426\u5c55\u793a\u201c\u4eca\u5929\u201d\u6309\u94ae',
                      ),
                      n.createElement('td', null, 'boolean'),
                      n.createElement('td', null, 'true'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'value'),
                      n.createElement('td', null, '\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onChange'),
                      n.createElement(
                        'td',
                        null,
                        '\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(date: moment, dateString: string)',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onOk'),
                      n.createElement(
                        'td',
                        null,
                        '\u70b9\u51fb\u786e\u5b9a\u6309\u94ae\u7684\u56de\u8c03',
                      ),
                      n.createElement('td', null, 'function()'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onPanelChange'),
                      n.createElement(
                        'td',
                        null,
                        '\u65e5\u671f\u9762\u677f\u53d8\u5316\u65f6\u7684\u56de\u8c03',
                      ),
                      n.createElement('td', null, 'function(value, mode)'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                  ),
                ),
                n.createElement(
                  'h3',
                  { id: 'datepickerpickeryear' },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to: '#datepickerpickeryear',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'DatePicker[picker=year]',
                ),
                n.createElement(
                  m.Z,
                  null,
                  n.createElement(
                    'thead',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('th', null, '\u53c2\u6570'),
                      n.createElement('th', null, '\u8bf4\u660e'),
                      n.createElement('th', null, '\u7c7b\u578b'),
                      n.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                      n.createElement('th', null, '\u7248\u672c'),
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultPickerValue'),
                      n.createElement(
                        'td',
                        null,
                        '\u9ed8\u8ba4\u9762\u677f\u65e5\u671f',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultValue'),
                      n.createElement('td', null, '\u9ed8\u8ba4\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'format'),
                      n.createElement(
                        'td',
                        null,
                        '\u5c55\u793a\u7684\u65e5\u671f\u683c\u5f0f\uff0c\u914d\u7f6e\u53c2\u8003 ',
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment.js',
                        ),
                      ),
                      n.createElement('td', null, 'string'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'YYYY'),
                      ),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'renderExtraFooter'),
                      n.createElement(
                        'td',
                        null,
                        '\u5728\u9762\u677f\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u9875\u811a',
                      ),
                      n.createElement('td', null, '() => React.ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'value'),
                      n.createElement('td', null, '\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onChange'),
                      n.createElement(
                        'td',
                        null,
                        '\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03\uff0c\u53d1\u751f\u5728\u7528\u6237\u9009\u62e9\u65f6\u95f4\u65f6',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(date: moment, dateString: string)',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                  ),
                ),
                n.createElement(
                  'h3',
                  { id: 'datepickerpickerquarter' },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to: '#datepickerpickerquarter',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'DatePicker[picker=quarter]',
                ),
                n.createElement(
                  'p',
                  null,
                  n.createElement('code', null, '4.1.0'),
                  ' \u65b0\u589e\u3002',
                ),
                n.createElement(
                  m.Z,
                  null,
                  n.createElement(
                    'thead',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('th', null, '\u53c2\u6570'),
                      n.createElement('th', null, '\u8bf4\u660e'),
                      n.createElement('th', null, '\u7c7b\u578b'),
                      n.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                      n.createElement('th', null, '\u7248\u672c'),
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultPickerValue'),
                      n.createElement(
                        'td',
                        null,
                        '\u9ed8\u8ba4\u9762\u677f\u65e5\u671f',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultValue'),
                      n.createElement('td', null, '\u9ed8\u8ba4\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'format'),
                      n.createElement(
                        'td',
                        null,
                        '\u5c55\u793a\u7684\u65e5\u671f\u683c\u5f0f\uff0c\u914d\u7f6e\u53c2\u8003 ',
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment.js',
                        ),
                      ),
                      n.createElement('td', null, 'string'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'YYYY-\\QQ'),
                      ),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'renderExtraFooter'),
                      n.createElement(
                        'td',
                        null,
                        '\u5728\u9762\u677f\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u9875\u811a',
                      ),
                      n.createElement('td', null, '() => React.ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'value'),
                      n.createElement('td', null, '\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onChange'),
                      n.createElement(
                        'td',
                        null,
                        '\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03\uff0c\u53d1\u751f\u5728\u7528\u6237\u9009\u62e9\u65f6\u95f4\u65f6',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(date: moment, dateString: string)',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                  ),
                ),
                n.createElement(
                  'h3',
                  { id: 'datepickerpickermonth' },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to: '#datepickerpickermonth',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'DatePicker[picker=month]',
                ),
                n.createElement(
                  m.Z,
                  null,
                  n.createElement(
                    'thead',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('th', null, '\u53c2\u6570'),
                      n.createElement('th', null, '\u8bf4\u660e'),
                      n.createElement('th', null, '\u7c7b\u578b'),
                      n.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                      n.createElement('th', null, '\u7248\u672c'),
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultPickerValue'),
                      n.createElement(
                        'td',
                        null,
                        '\u9ed8\u8ba4\u9762\u677f\u65e5\u671f',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultValue'),
                      n.createElement('td', null, '\u9ed8\u8ba4\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'format'),
                      n.createElement(
                        'td',
                        null,
                        '\u5c55\u793a\u7684\u65e5\u671f\u683c\u5f0f\uff0c\u914d\u7f6e\u53c2\u8003 ',
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment.js',
                        ),
                      ),
                      n.createElement('td', null, 'string'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'YYYY-MM'),
                      ),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'monthCellRender'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49\u7684\u6708\u4efd\u5185\u5bb9\u6e32\u67d3\u65b9\u6cd5',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(date, locale): ReactNode',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'renderExtraFooter'),
                      n.createElement(
                        'td',
                        null,
                        '\u5728\u9762\u677f\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u9875\u811a',
                      ),
                      n.createElement('td', null, '() => React.ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'value'),
                      n.createElement('td', null, '\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onChange'),
                      n.createElement(
                        'td',
                        null,
                        '\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03\uff0c\u53d1\u751f\u5728\u7528\u6237\u9009\u62e9\u65f6\u95f4\u65f6',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(date: moment, dateString: string)',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                  ),
                ),
                n.createElement(
                  'h3',
                  { id: 'datepickerpickerweek' },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to: '#datepickerpickerweek',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'DatePicker[picker=week]',
                ),
                n.createElement(
                  m.Z,
                  null,
                  n.createElement(
                    'thead',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('th', null, '\u53c2\u6570'),
                      n.createElement('th', null, '\u8bf4\u660e'),
                      n.createElement('th', null, '\u7c7b\u578b'),
                      n.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                      n.createElement('th', null, '\u7248\u672c'),
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultPickerValue'),
                      n.createElement(
                        'td',
                        null,
                        '\u9ed8\u8ba4\u9762\u677f\u65e5\u671f',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultValue'),
                      n.createElement('td', null, '\u9ed8\u8ba4\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'format'),
                      n.createElement(
                        'td',
                        null,
                        '\u5c55\u793a\u7684\u65e5\u671f\u683c\u5f0f\uff0c\u914d\u7f6e\u53c2\u8003 ',
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment.js',
                        ),
                      ),
                      n.createElement('td', null, 'string'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'YYYY-wo'),
                      ),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'renderExtraFooter'),
                      n.createElement(
                        'td',
                        null,
                        '\u5728\u9762\u677f\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u9875\u811a',
                      ),
                      n.createElement('td', null, '(mode) => React.ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'value'),
                      n.createElement('td', null, '\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onChange'),
                      n.createElement(
                        'td',
                        null,
                        '\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03\uff0c\u53d1\u751f\u5728\u7528\u6237\u9009\u62e9\u65f6\u95f4\u65f6',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(date: moment, dateString: string)',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                  ),
                ),
                n.createElement(
                  'h3',
                  { id: 'rangepicker' },
                  n.createElement(
                    r.AnchorLink,
                    { to: '#rangepicker', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'RangePicker',
                ),
                n.createElement(
                  m.Z,
                  null,
                  n.createElement(
                    'thead',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('th', null, '\u53c2\u6570'),
                      n.createElement('th', null, '\u8bf4\u660e'),
                      n.createElement('th', null, '\u7c7b\u578b'),
                      n.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                      n.createElement('th', null, '\u7248\u672c'),
                    ),
                  ),
                  n.createElement(
                    'tbody',
                    null,
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'allowEmpty'),
                      n.createElement(
                        'td',
                        null,
                        '\u5141\u8bb8\u8d77\u59cb\u9879\u90e8\u5206\u4e3a\u7a7a',
                      ),
                      n.createElement('td', null, '[boolean, boolean]'),
                      n.createElement('td', null, '[false, false]'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'dateRender'),
                      n.createElement(
                        'td',
                        null,
                        '\u81ea\u5b9a\u4e49\u65e5\u671f\u5355\u5143\u683c\u7684\u5185\u5bb9\u3002',
                        n.createElement('code', null, 'info'),
                        ' \u53c2\u6570\u81ea 4.3.0 \u6dfb\u52a0',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(currentDate: moment, today: moment, info: ',
                        '{',
                        ' range: ',
                        n.createElement('code', null, 'start'),
                        ' | ',
                        n.createElement('code', null, 'end'),
                        ' ',
                        '}',
                        ') => React.ReactNode',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultPickerValue'),
                      n.createElement(
                        'td',
                        null,
                        '\u9ed8\u8ba4\u9762\u677f\u65e5\u671f',
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                        '[]',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'defaultValue'),
                      n.createElement('td', null, '\u9ed8\u8ba4\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                        '[]',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'disabled'),
                      n.createElement(
                        'td',
                        null,
                        '\u7981\u7528\u8d77\u59cb\u9879',
                      ),
                      n.createElement('td', null, '[boolean, boolean]'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'disabledTime'),
                      n.createElement(
                        'td',
                        null,
                        '\u4e0d\u53ef\u9009\u62e9\u7684\u65f6\u95f4',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(date: moment, partial: ',
                        n.createElement('code', null, 'start'),
                        ' | ',
                        n.createElement('code', null, 'end'),
                        ')',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'format'),
                      n.createElement(
                        'td',
                        null,
                        '\u5c55\u793a\u7684\u65e5\u671f\u683c\u5f0f',
                      ),
                      n.createElement('td', null, 'string'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, 'YYYY-MM-DD HH:mm:ss'),
                      ),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'ranges'),
                      n.createElement(
                        'td',
                        null,
                        '\u9884\u8bbe\u65f6\u95f4\u8303\u56f4\u5feb\u6377\u9009\u62e9',
                      ),
                      n.createElement(
                        'td',
                        null,
                        '{',
                        ' [range: string]: ',
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                        '[] ',
                        '}',
                        ' | ',
                        '{',
                        ' [range: string]: () => ',
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                        '[] ',
                        '}',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'renderExtraFooter'),
                      n.createElement(
                        'td',
                        null,
                        '\u5728\u9762\u677f\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u9875\u811a',
                      ),
                      n.createElement('td', null, '() => React.ReactNode'),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'separator'),
                      n.createElement(
                        'td',
                        null,
                        '\u8bbe\u7f6e\u5206\u9694\u7b26',
                      ),
                      n.createElement('td', null, 'React.ReactNode'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement('code', null, '<SwapRightOutlined />'),
                      ),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'showTime'),
                      n.createElement(
                        'td',
                        null,
                        '\u589e\u52a0\u65f6\u95f4\u9009\u62e9\u529f\u80fd',
                      ),
                      n.createElement('td', null, 'Object|boolean'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.AnchorLink,
                          { to: '/components/time-picker/#API' },
                          'TimePicker Options',
                        ),
                      ),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'showTime.defaultValue'),
                      n.createElement(
                        'td',
                        null,
                        '\u8bbe\u7f6e\u7528\u6237\u9009\u62e9\u65e5\u671f\u65f6\u9ed8\u8ba4\u7684\u65f6\u5206\u79d2\uff0c',
                        n.createElement(
                          r.AnchorLink,
                          { to: '#components-date-picker-demo-disabled-date' },
                          '\u4f8b\u5b50',
                        ),
                      ),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                        '[]',
                      ),
                      n.createElement('td', null, '[moment(), moment()]'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'value'),
                      n.createElement('td', null, '\u65e5\u671f'),
                      n.createElement(
                        'td',
                        null,
                        n.createElement(
                          r.Link,
                          { to: 'http://momentjs.com/' },
                          'moment',
                        ),
                        '[]',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onCalendarChange'),
                      n.createElement(
                        'td',
                        null,
                        '\u5f85\u9009\u65e5\u671f\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03\u3002',
                        n.createElement('code', null, 'info'),
                        ' \u53c2\u6570\u81ea 4.4.0 \u6dfb\u52a0',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(dates: [moment, moment], dateStrings: [string, string], info: ',
                        '{',
                        ' range:',
                        n.createElement('code', null, 'start'),
                        '|',
                        n.createElement('code', null, 'end'),
                        ' ',
                        '}',
                        ')',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                    n.createElement(
                      'tr',
                      null,
                      n.createElement('td', null, 'onChange'),
                      n.createElement(
                        'td',
                        null,
                        '\u65e5\u671f\u8303\u56f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03',
                      ),
                      n.createElement(
                        'td',
                        null,
                        'function(dates: [moment, moment], dateStrings: [string, string])',
                      ),
                      n.createElement('td', null, '-'),
                      n.createElement('td', null),
                    ),
                  ),
                ),
                n.createElement(
                  'h2',
                  { id: 'faq' },
                  n.createElement(
                    r.AnchorLink,
                    { to: '#faq', 'aria-hidden': 'true', tabIndex: -1 },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'FAQ',
                ),
                n.createElement(
                  'h3',
                  {
                    id:
                      '\u5f53\u6211\u6307\u5b9a\u4e86-datepickerrangepicker-\u7684-mode-\u5c5e\u6027\u540e\u70b9\u51fb\u540e\u65e0\u6cd5\u9009\u62e9\u5e74\u4efd\u6708\u4efd',
                  },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to:
                        '#\u5f53\u6211\u6307\u5b9a\u4e86-datepickerrangepicker-\u7684-mode-\u5c5e\u6027\u540e\u70b9\u51fb\u540e\u65e0\u6cd5\u9009\u62e9\u5e74\u4efd\u6708\u4efd',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u5f53\u6211\u6307\u5b9a\u4e86 DatePicker/RangePicker \u7684 mode \u5c5e\u6027\u540e\uff0c\u70b9\u51fb\u540e\u65e0\u6cd5\u9009\u62e9\u5e74\u4efd/\u6708\u4efd\uff1f',
                ),
                n.createElement(
                  'p',
                  null,
                  '\u8bf7\u53c2\u8003',
                  n.createElement(
                    r.AnchorLink,
                    {
                      to:
                        '/docs/react/faq#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-DatePicker/RangePicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%EF%BC%8C%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD/%E6%9C%88%E4%BB%BD%EF%BC%9F',
                    },
                    '\u5e38\u89c1\u95ee\u7b54',
                  ),
                ),
                n.createElement(
                  'h3',
                  {
                    id:
                      '\u5982\u4f55\u5728-datepicker-\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u65e5\u671f\u5e93\u5982-dayjs-',
                  },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to:
                        '#\u5982\u4f55\u5728-datepicker-\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u65e5\u671f\u5e93\u5982-dayjs-',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u5982\u4f55\u5728 DatePicker \u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u65e5\u671f\u5e93\uff08\u5982 dayjs \uff09\uff1f',
                ),
                n.createElement(
                  'p',
                  null,
                  '\u8bf7\u53c2\u8003',
                  n.createElement(
                    r.AnchorLink,
                    { to: '/docs/react/replace-moment#DatePicker' },
                    '\u300a\u66ff\u6362 Moment.js\u300b',
                  ),
                ),
                n.createElement(
                  'h3',
                  {
                    id:
                      '\u4e3a\u4f55\u5168\u5c40\u4fee\u6539-momentlocale-\u4e0d\u751f\u6548',
                  },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to:
                        '#\u4e3a\u4f55\u5168\u5c40\u4fee\u6539-momentlocale-\u4e0d\u751f\u6548',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4e3a\u4f55\u5168\u5c40\u4fee\u6539 moment.locale \u4e0d\u751f\u6548\uff1f',
                ),
                n.createElement(
                  'p',
                  null,
                  'v4 \u4e2d\uff0cDatePicker \u9ed8\u8ba4 ',
                  n.createElement('code', null, 'locale'),
                  ' \u4e3a ',
                  n.createElement('code', null, 'en'),
                  '\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 DatePicker \u7684 ',
                  n.createElement('code', null, 'locale'),
                  ' \u5c5e\u6027\u6765\u5355\u72ec\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ',
                  n.createElement(
                    r.Link,
                    { to: '/components/config-provider' },
                    'ConfigProvider ',
                    n.createElement('code', null, 'locale'),
                  ),
                  ' \u5c5e\u6027\u6765\u914d\u7f6e\u3002',
                ),
                n.createElement(
                  'h3',
                  {
                    id:
                      '\u5982\u4f55\u4fee\u6539\u5468\u7684\u8d77\u59cb\u65e5',
                  },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to:
                        '#\u5982\u4f55\u4fee\u6539\u5468\u7684\u8d77\u59cb\u65e5',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u5982\u4f55\u4fee\u6539\u5468\u7684\u8d77\u59cb\u65e5\uff1f',
                ),
                n.createElement(
                  'p',
                  null,
                  '\u8bf7\u4f7f\u7528\u6b63\u786e\u7684',
                  n.createElement(
                    r.Link,
                    { to: '/docs/react/i18n' },
                    '\u8bed\u8a00\u5305',
                  ),
                  '\uff08',
                  n.createElement(
                    r.Link,
                    {
                      to:
                        'https://github.com/ant-design/ant-design/issues/5605',
                    },
                    '#5605',
                  ),
                  '\uff09\uff0c\u6216\u8005\u4fee\u6539 moment \u7684 ',
                  n.createElement('code', null, 'locale'),
                  ' \u914d\u7f6e\uff1a',
                  n.createElement(
                    r.Link,
                    { to: 'https://codesandbox.io/s/moment-day-of-week-6dby5' },
                    'https://codesandbox.io/s/moment-day-of-week-6dby5',
                  ),
                ),
                n.createElement(
                  'h3',
                  {
                    id:
                      '\u4e3a\u4f55\u4f7f\u7528-panelrender-\u65f6\u539f\u6765\u9762\u677f\u65e0\u6cd5\u5207\u6362',
                  },
                  n.createElement(
                    r.AnchorLink,
                    {
                      to:
                        '#\u4e3a\u4f55\u4f7f\u7528-panelrender-\u65f6\u539f\u6765\u9762\u677f\u65e0\u6cd5\u5207\u6362',
                      'aria-hidden': 'true',
                      tabIndex: -1,
                    },
                    n.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u4e3a\u4f55\u4f7f\u7528 ',
                  n.createElement('code', null, 'panelRender'),
                  ' \u65f6\uff0c\u539f\u6765\u9762\u677f\u65e0\u6cd5\u5207\u6362\uff1f',
                ),
                n.createElement(
                  'p',
                  null,
                  '\u5f53\u4f60\u901a\u8fc7 ',
                  n.createElement('code', null, 'panelRender'),
                  ' \u52a8\u6001\u6539\u53d8\u5c42\u7ea7\u7ed3\u6784\u65f6\uff0c\u4f1a\u4f7f\u5f97\u539f\u672c\u7684 Panel \u88ab\u5f53\u505a\u65b0\u7684\u8282\u70b9\u5220\u9664\u5e76\u521b\u5efa\u3002\u8fd9\u4f7f\u5f97\u5176\u539f\u672c\u7684\u72b6\u6001\u4f1a\u88ab\u91cd\u7f6e\uff0c\u4fdd\u6301\u7ed3\u6784\u7a33\u5b9a\u5373\u53ef\u3002\u8be6\u60c5\u8bf7\u53c2\u8003 ',
                  n.createElement(
                    r.Link,
                    {
                      to:
                        'https://github.com/ant-design/ant-design/issues/27263',
                    },
                    '#27263',
                  ),
                  '\u3002',
                ),
                n.createElement(c.Z, {
                  code:
                    "moment.locale('en', {\n  // \u6ce8\u610f\u8bf7\u4fee\u6539\u4f60\u6b63\u5728\u4f7f\u7528\u7684 locale \u8bed\u8a00\uff0c\u6bd4\u5982 zh-cn\n  week: {\n    dow: 1,\n  },\n});",
                  lang: 'js',
                }),
                n.createElement(
                  'p',
                  null,
                  'More skills for writing demo: ',
                  n.createElement(
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
        var t = n.useContext(r.context),
          l = t.demos;
        return (
          n.useEffect(() => {
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
          n.createElement(u, { demos: l })
        );
      };
    },
    32851: function(e, t, l) {
      'use strict';
      l.r(t);
      var n = l(67294),
        r = l(55697),
        a = l(37899),
        c = l(96089),
        m = l(65659);
      l(86845);
      function u(e, t) {
        return s(e) || i(e, t) || E(e, t) || d();
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function E(e, t) {
        if (e) {
          if ('string' === typeof e) return o(e, t);
          var l = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === l && e.constructor && (l = e.constructor.name),
            'Map' === l || 'Set' === l
              ? Array.from(e)
              : 'Arguments' === l ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
              ? o(e, t)
              : void 0
          );
        }
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var l = 0, n = new Array(t); l < t; l++) n[l] = e[l];
        return n;
      }
      function i(e, t) {
        var l =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != l) {
          var n,
            r,
            a = [],
            c = !0,
            m = !1;
          try {
            for (l = l.call(e); !(c = (n = l.next()).done); c = !0)
              if ((a.push(n.value), t && a.length === t)) break;
          } catch (u) {
            (m = !0), (r = u);
          } finally {
            try {
              c || null == l['return'] || l['return']();
            } finally {
              if (m) throw r;
            }
          }
          return a;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      function p(e, t) {
        var l,
          n =
            null === (l = e.match(/\.(\w+)$/)) || void 0 === l ? void 0 : l[1];
        return n || (n = t.tsx ? 'tsx' : 'jsx'), n;
      }
      var h = function(e) {
        var t,
          l,
          d,
          E = (0, n.useRef)(),
          o = (0, n.useContext)(c.context),
          i = o.locale,
          s = (0, c.useLocaleProps)(i, e),
          h = (0, c.useDemoUrl)(s.identifier),
          k = s.demoUrl || h,
          f =
            (null === a.m8 || void 0 === a.m8 ? void 0 : a.m8.location.hash) ===
            '#'.concat(s.identifier),
          g = 1 === Object.keys(s.sources).length,
          b = (0, c.useCodeSandbox)(
            (null === (t = s.hideActions) || void 0 === t
            ? void 0
            : t.includes('CSB'))
              ? null
              : s,
          ),
          v = (0, c.useRiddle)(
            (null === (l = s.hideActions) || void 0 === l
            ? void 0
            : l.includes('RIDDLE'))
              ? null
              : s,
          ),
          y = (0, c.useMotions)(s.motions || [], E.current),
          L = u(y, 2),
          A = L[0],
          N = L[1],
          w = (0, c.useCopy)(),
          P = u(w, 2),
          j = P[0],
          x = P[1],
          C = (0, n.useState)(function() {
            return s.sources._ ? '_' : Object.keys(s.sources)[0];
          }),
          R = u(C, 2),
          _ = R[0],
          B = R[1],
          I = (0, n.useState)(p(_, s.sources[_])),
          S = u(I, 2),
          D = S[0],
          Y = S[1],
          O = (0, n.useState)(Boolean(s.defaultShowCode)),
          T = u(O, 2),
          F = T[0],
          M = T[1],
          V = (0, n.useState)(Math.random()),
          q = u(V, 2),
          Z = q[0],
          U = q[1],
          $ = s.sources[_][D] || s.sources[_].content,
          z = (0, c.useTSPlaygroundUrl)(i, $),
          H = (0, n.useRef)(),
          Q = (0, c.usePrefersColor)(),
          J = u(Q, 1),
          W = J[0],
          X = s.actionBarRender,
          G =
            void 0 === X
              ? function(e) {
                  return e;
                }
              : X;
        function K(e) {
          B(e), Y(p(e, s.sources[e]));
        }
        return (
          (0, n.useEffect)(
            function() {
              U(Math.random());
            },
            [W],
          ),
          n.createElement(
            'div',
            {
              style: s.style,
              className: [
                s.className,
                '__dumi-default-previewer',
                f ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: s.identifier,
              'data-debug': s.debug || void 0,
              'data-iframe': s.iframe || void 0,
            },
            s.iframe &&
              n.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            n.createElement(
              'div',
              {
                ref: E,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: s.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    s.compact || (s.iframe && !1 !== s.compact) ? '0' : void 0,
                  background: s.background,
                },
              },
              s.iframe
                ? n.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(s.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: Z,
                    src: k,
                    ref: H,
                  })
                : s.children,
            ),
            n.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': s.title,
              },
              s.title &&
                n.createElement(
                  c.AnchorLink,
                  { to: '#'.concat(s.identifier) },
                  s.title,
                ),
              s.description &&
                n.createElement('div', {
                  dangerouslySetInnerHTML: { __html: s.description },
                }),
            ),
            n.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              G(
                n.createElement(
                  n.Fragment,
                  null,
                  b &&
                    n.createElement('button', {
                      title: 'Open demo on CodeSandbox.io',
                      className: '__dumi-default-icon',
                      role: 'codesandbox',
                      onClick: b,
                    }),
                  v &&
                    n.createElement('button', {
                      title: 'Open demo on Riddle',
                      className: '__dumi-default-icon',
                      role: 'riddle',
                      onClick: v,
                    }),
                  s.motions &&
                    n.createElement('button', {
                      title: 'Execute motions',
                      className: '__dumi-default-icon',
                      role: 'motions',
                      disabled: N,
                      onClick: function() {
                        return A();
                      },
                    }),
                  s.iframe &&
                    n.createElement('button', {
                      title: 'Reload demo iframe page',
                      className: '__dumi-default-icon',
                      role: 'refresh',
                      onClick: function() {
                        return U(Math.random());
                      },
                    }),
                  !(null === (d = s.hideActions) || void 0 === d
                    ? void 0
                    : d.includes('EXTERNAL')) &&
                    n.createElement(
                      c.Link,
                      { target: '_blank', to: k },
                      n.createElement('button', {
                        title: 'Open demo in new tab',
                        className: '__dumi-default-icon',
                        role: 'open-demo',
                        type: 'button',
                      }),
                    ),
                  n.createElement('span', null),
                  n.createElement('button', {
                    title: 'Copy source code',
                    className: '__dumi-default-icon',
                    role: 'copy',
                    'data-status': x,
                    onClick: function() {
                      return j($);
                    },
                  }),
                  'tsx' === D &&
                    F &&
                    n.createElement(
                      c.Link,
                      { target: '_blank', to: z },
                      n.createElement('button', {
                        title: 'Get JSX via TypeScript Playground',
                        className: '__dumi-default-icon',
                        role: 'change-tsx',
                        type: 'button',
                      }),
                    ),
                  n.createElement('button', {
                    title: 'Toggle source code panel',
                    className: '__dumi-default-icon'.concat(
                      F ? ' __dumi-default-btn-expand' : '',
                    ),
                    role: 'source',
                    type: 'button',
                    onClick: function() {
                      return M(!F);
                    },
                  }),
                ),
              ),
            ),
            F &&
              n.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !g &&
                  n.createElement(
                    r.Z,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: _,
                      onChange: K,
                    },
                    Object.keys(s.sources).map(function(e) {
                      return n.createElement(r.J, {
                        tab:
                          '_' === e ? 'index.'.concat(p(e, s.sources[e])) : e,
                        key: e,
                      });
                    }),
                  ),
                n.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  n.createElement(m.Z, { code: $, lang: D, showCopy: !1 }),
                ),
              ),
          )
        );
      };
      t['default'] = h;
    },
    4187: function(e, t, l) {
      'use strict';
      var n = l(67294),
        r = l(97397),
        a = l.n(r);
      l(8036);
      function c(e, t) {
        return o(e) || E(e, t) || u(e, t) || m();
      }
      function m() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function u(e, t) {
        if (e) {
          if ('string' === typeof e) return d(e, t);
          var l = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === l && e.constructor && (l = e.constructor.name),
            'Map' === l || 'Set' === l
              ? Array.from(e)
              : 'Arguments' === l ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
              ? d(e, t)
              : void 0
          );
        }
      }
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var l = 0, n = new Array(t); l < t; l++) n[l] = e[l];
        return n;
      }
      function E(e, t) {
        var l =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != l) {
          var n,
            r,
            a = [],
            c = !0,
            m = !1;
          try {
            for (l = l.call(e); !(c = (n = l.next()).done); c = !0)
              if ((a.push(n.value), t && a.length === t)) break;
          } catch (u) {
            (m = !0), (r = u);
          } finally {
            try {
              c || null == l['return'] || l['return']();
            } finally {
              if (m) throw r;
            }
          }
          return a;
        }
      }
      function o(e) {
        if (Array.isArray(e)) return e;
      }
      var i = function(e) {
        var t = e.children,
          l = (0, n.useRef)(),
          r = (0, n.useState)(!1),
          m = c(r, 2),
          u = m[0],
          d = m[1],
          E = (0, n.useState)(!1),
          o = c(E, 2),
          i = o[0],
          s = o[1];
        return (
          (0, n.useEffect)(function() {
            var e = l.current,
              t = a()(function() {
                d(e.scrollLeft > 0),
                  s(e.scrollLeft < e.scrollWidth - e.offsetWidth);
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
          n.createElement(
            'div',
            { className: '__dumi-default-table' },
            n.createElement(
              'div',
              {
                className: '__dumi-default-table-content',
                ref: l,
                'data-left-folded': u || void 0,
                'data-right-folded': i || void 0,
              },
              n.createElement('table', null, t),
            ),
          )
        );
      };
      t['Z'] = i;
    },
  },
]);
