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
  <QuiStatistic active={true} currentActive={5}>
    {list.map((item: any) => (
      <div className="12" key={item} onClick={onClick}>
        {item}
      </div>
    ))}
  </QuiStatistic>
);
```
## API

#### Statistic

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| active | 是否需要点击高亮 | string | `false` |  
| onClick | 是否需要点击高亮 | string | `(type: string) => void` |  
| wrapClassName | 对话框外层容器的类名 | string | `.` |  
| children | 子元素 | string | `.` |  
| currentActive | 高亮元素 | string | `''` |  
