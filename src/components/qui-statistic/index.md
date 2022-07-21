---
title: Statistic 统计数值
group:
  title: 数据展示
  order: 4
---

## Statistic 统计数值
展示统计数值。

## 何时使用
当需要突出某个或某组数字时。

当需要展示带描述的统计类数据时使用。

## 代码演示

### 基本使用

```tsx
import React from 'react';
import { QuiStatistic } from 'qiji';
const onClick = (item: any) => {};
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export default () => (
  <QuiStatistic active={true}>
    {list.map((item: any) => (
      <div className="12" key={item} onClick={onClick}>
        {item}
      </div>
    ))}
  </QuiStatistic>
);
```

