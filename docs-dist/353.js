(self['webpackChunkqiji'] = self['webpackChunkqiji'] || []).push([
  [353],
  {
    65353: function(t, e, n) {
      'use strict';
      function r(t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          r(t, e)
        );
      }
      function o(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && r(t, e);
      }
      n.r(e),
        n.d(e, {
          default: function() {
            return o;
          },
        });
    },
  },
]);
