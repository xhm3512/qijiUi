---
title: Popover 气泡卡片
group:
  title: 数据展示
  order: 4
---

## Grid 珊格

### 基础用法:

```tsx
import React from 'react';
import { QuiPopover } from 'qiji';
import {Row,Tooltip} from 'antd';

export default () =><QuiPopover
// arrowPointAtCenter
placement='bottomRight'
// defaultVisible={true}
 content={
   <div style={{padding:'0 10px',width:'703px'}}>
    <div style={{padding:'0 10px'}}>ww2</div>
     <div style={{padding:'0 10px'}}>ww2</div>
      <div style={{padding:'0 10px'}}>ww2</div>
   </div>
 } >
<Row justify='end'>popoverpopoverpopoverpopover</Row>
</QuiPopover>;
```
## API
属性说明如下：

| 属性      |  说明   |                 类型                  |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| contennt      |     气泡内容     | `ReactNode` \| `() => ReactNode` | -  |      |

