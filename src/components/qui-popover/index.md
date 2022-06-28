---
title: Popover 气泡卡片
group:
  title: 反馈
  order: 11
---

## Grid 珊格

Demo:

```tsx
import React from 'react';
import { QuiPopover } from 'qiji';
import {Tooltip} from 'antd';

export default () =><QuiPopover
placement='bottomRight'
defaultVisible={true}
 content={
   <div style={{padding:'0 10px'}}>
    <div style={{padding:'0 10px'}}>ww2</div>
     <div style={{padding:'0 10px'}}>ww2</div>
      <div style={{padding:'0 10px'}}>ww2</div>
   </div>
 } >
<span style={{padding:'0 10px'}}>popover</span>
</QuiPopover>;
```
## API
属性说明如下：

| 属性      |  说明   |                 类型                  |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| contennt      |     气泡内容     | `ReactNode` \| `() => ReactNode` | -  |      |

