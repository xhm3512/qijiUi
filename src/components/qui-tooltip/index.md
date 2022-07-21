---
title: Tooltip 文字提示
group:
  title: 数据展示
  order: 4
---
# Tooltip文字提示
简单的文字提示气泡框。
## 何时使用
鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 title 提示，提供一个 按钮/文字/操作 的文案解释。

## 代码演示
### 基本使用
```tsx
import React from 'react';
import { QuiTooltip } from 'qiji';
import {Tooltip} from 'antd';

export default () =><QuiTooltip 
title="First Demo" 
// defaultVisible={true}
>
<span style={{padding:'0 10px'}}>tooltip</span>
</QuiTooltip>;
```

### 位置
位置有12个方向
```tsx
import React from 'react';
import { QuiTooltip,QuiButton } from 'qiji';
import {Button} from 'antd';

export default () =>{

const text = <span>prompt text</span>;

const buttonWidth = 70;
  return  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <QuiTooltip placement="topLeft" title={text}>
        <span><QuiButton  type="outline">TL</QuiButton></span>
      </QuiTooltip>
       <QuiTooltip placement="top" title={text}>
        <span><QuiButton  type="outline">Top</QuiButton></span>
      </QuiTooltip>
       <QuiTooltip placement="topRight" title={text}>
        <span><QuiButton  type="outline">TR</QuiButton></span>
      </QuiTooltip>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
       <QuiTooltip placement="leftTop" title={text}>
        <span><QuiButton  type="outline">LT</QuiButton></span>
      </QuiTooltip>
       <QuiTooltip placement="left" title={text}>
        <span><QuiButton  type="outline">Left</QuiButton></span>
      </QuiTooltip>
       <QuiTooltip placement="leftBottom" title={text}>
        <span><QuiButton  type="outline">LB</QuiButton></span>
      </QuiTooltip>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
       <QuiTooltip placement="rightTop" title={text}>
        <span><QuiButton  type="outline">RT</QuiButton></span>
      </QuiTooltip>
       <QuiTooltip placement="right" title={text}>
        <span><QuiButton  type="outline">Right</QuiButton></span>
      </QuiTooltip>
       <QuiTooltip placement="rightBottom" title={text}>
        <span><QuiButton  type="outline">RB</QuiButton></span>
      </QuiTooltip>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
       <QuiTooltip placement="bottomLeft" title={text}>
        <span><QuiButton  type="outline">BL</QuiButton></span>
      </QuiTooltip>
       <QuiTooltip placement="bottom" title={text}>
        <span><QuiButton  type="outline">Bottom</QuiButton></span>
      </QuiTooltip>
       <QuiTooltip placement="bottomRight" title={text}>
        <span><QuiButton  type="outline">BR</QuiButton></span>
      </QuiTooltip>
    </div>
  </div>
};
```




## API
属性说明如下：

| 属性      | 说明   | 类型   |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| title      |     提示文字     | `ReactNode` \| `() => ReactNode` | -  |      |

其他api参照：https://www.npmjs.com/package/rc-tooltip
