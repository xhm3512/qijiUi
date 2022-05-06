---
title: QuiTooltip 文字提示
group:
  title: 反馈
  order: 9
---

## Grid 珊格

Demo:

```tsx
import React from 'react';
import { QuiToolTip } from 'qiji';
const GG = () => {
  return (
    <div>
      <div>tool</div>
      <div>tool</div>
      <div>tool</div>
      <div>tool</div>
    </div>
  );
};
export default () => (
  <QuiToolTip
    placement="bottom"
    title="First Demo"
    // trigger={['click']}
    title={<GG />}
  >
    <a>hover</a>
  </QuiToolTip>
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
