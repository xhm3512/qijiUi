---
title: Tooltip 文字提示
group:
  title: 数据展示
  order: 4
---

## Grid 珊格

Demo:

```tsx
import React from 'react';
import { QuiTooltip } from 'qiji';
import {Tooltip} from 'antd';

export default () =><QuiTooltip title="First Demo" >
<span style={{padding:'0 10px'}}>tooltip</span>
</QuiTooltip>;
```
## API
属性说明如下：

| 属性      | 说明   | 类型   |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| title      |     提示文字     | `ReactNode` \| `() => ReactNode` | -  |      |

其他api参照：https://www.npmjs.com/package/rc-tooltip
