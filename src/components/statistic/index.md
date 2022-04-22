---
title: Statistic 统计数值
group:
  title: 反馈
  order: 9
---

## Grid 珊格

Demo:

```tsx
import React from 'react';
import { QuiStatistic } from 'qiji';
const onClick = (item: any) => {};
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export default () => (
  <QuiStatistic active={true}>
    {list.map((item: any) => (
      <div className="12" onClick={onClick}>
        {item}
      </div>
    ))}
  </QuiStatistic>
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
