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

| 参数  | 说明     | 类型                         | 默认值 |
| ----- | -------- | ---------------------------- | ------ |
| title | 提示文字 | ReactNode \| () => ReactNode | -      |

### 共同的 API

以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 该值将合并到 placement 的配置中，设置参考 [rc-tooltip](https://github.com/react-component/tooltip) | object | - |  |
| arrowPointAtCenter | 箭头是否指向目标元素中心 | boolean | false |  |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | true |  |
| color | 背景颜色 | string | - | 4.3.0 |
| defaultVisible | 默认是否显隐 | boolean | false |  |
| destroyTooltipOnHide | 关闭后是否销毁 Tooltip，当 `keepParent` 为 `false` 时销毁父容器 | boolean \| { keepParent?: boolean } | false |  |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | function(triggerNode) | () => document.body |  |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0.1 |  |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |  |
| overlayClassName | 卡片类名 | string | - |  |
| overlayStyle | 卡片样式 | object | - |  |
| overlayInnerStyle | 卡片内容区域的样式对象 | object | - |  |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | `top` |  |
| trigger | 触发行为，可选 `hover` \| `focus` \| `click` \| `contextMenu`，可使用数组设置多个触发行为 | string \| string\[] | `hover` |  |
| visible | 用于手动控制浮层显隐 | boolean | false |  |
| zIndex | 设置 Tooltip 的 `z-index` | number | - |  |
| onVisibleChange | 显示隐藏的回调 | (visible) => void | - |  |

## 注意

请确保 `Tooltip` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。


其他api参照：https://www.npmjs.com/package/rc-tooltip
