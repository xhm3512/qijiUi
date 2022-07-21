---
title: Popover 气泡卡片
group:
  title: 数据展示
  order: 4
---

# Popover气泡卡片

## 何时使用
鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 title 提示，提供一个 按钮/文字/操作 的文案解释。
## 代码演示
### 基础用法:

```tsx
import React from 'react';
import { QuiPopover,QuiButton } from 'qiji';

export default () =><QuiPopover
// arrowPointAtCenter
placement='bottomRight'
// defaultVisible={true}
 content={
   <div style={{padding:'0 10px',width:'70px'}}>
    <div style={{padding:'0 10px'}}>list1</div>
    <div style={{padding:'0 10px'}}>list2</div>
    <div style={{padding:'0 10px'}}>list3</div>
   </div>
 } >
 <span> <QuiButton type="primary">Hover me</QuiButton></span>
</QuiPopover>;
```
### 三种触发方式:

```tsx
import React from 'react';
import { QuiPopover,QuiButton } from 'qiji';

export default () =>{
  return <>
  <QuiPopover
placement='bottomRight'
trigger="hover"
 content={
   <div style={{padding:'0 10px',width:'70px'}}>
    <div style={{padding:'0 10px'}}>list1</div>
    <div style={{padding:'0 10px'}}>list2</div>
    <div style={{padding:'0 10px'}}>list3</div>
   </div>
 } >
 <span> <QuiButton type="primary">Hover me</QuiButton></span>
</QuiPopover>
  <QuiPopover
placement='bottomRight'
trigger="focus"
 content={
   <div style={{padding:'0 10px',width:'70px'}}>
    <div style={{padding:'0 10px'}}>list1</div>
    <div style={{padding:'0 10px'}}>list2</div>
    <div style={{padding:'0 10px'}}>list3</div>
   </div>
 } >
 <span> <QuiButton type="primary">Focus me</QuiButton></span>
</QuiPopover>
 <QuiPopover
placement='bottomRight'
trigger="click"
 content={
   <div style={{padding:'0 10px',width:'70px'}}>
    <div style={{padding:'0 10px'}}>list1</div>
    <div style={{padding:'0 10px'}}>list2</div>
    <div style={{padding:'0 10px'}}>list3</div>
   </div>
 } >
 <span> <QuiButton type="primary">Click me</QuiButton></span>
</QuiPopover>
  </>
};
```

### 位置-位置有十二个方向:
```tsx
import React from 'react';
import { QuiPopover,QuiButton } from 'qiji';
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

export default () =>  (
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <QuiPopover placement="topLeft" title={text} content={content} trigger="click">
        <QuiButton type="outline">TL</QuiButton>
      </QuiPopover>
      <QuiPopover placement="top" title={text} content={content} trigger="click">
        <QuiButton type="outline">Top</QuiButton>
      </QuiPopover>
      <QuiPopover placement="topRight" title={text} content={content} trigger="click">
        <QuiButton type="outline">TR</QuiButton>
      </QuiPopover>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <QuiPopover placement="leftTop" title={text} content={content} trigger="click">
        <QuiButton type="outline">LT</QuiButton>
      </QuiPopover>
      <QuiPopover placement="left" title={text} content={content} trigger="click">
        <QuiButton type="outline">Left</QuiButton>
      </QuiPopover>
      <QuiPopover placement="leftBottom" title={text} content={content} trigger="click">
        <QuiButton type="outline">LB</QuiButton>
      </QuiPopover>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <QuiPopover placement="rightTop" title={text} content={content} trigger="click">
        <QuiButton type="outline">RT</QuiButton>
      </QuiPopover>
      <QuiPopover placement="right" title={text} content={content} trigger="click">
        <QuiButton type="outline">Right</QuiButton>
      </QuiPopover>
      <QuiPopover placement="rightBottom" title={text} content={content} trigger="click">
        <QuiButton type="outline">RB</QuiButton>
      </QuiPopover>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <QuiPopover placement="bottomLeft" title={text} content={content} trigger="click">
        <QuiButton type="outline">BL</QuiButton>
      </QuiPopover>
      <QuiPopover placement="bottom" title={text} content={content} trigger="click">
        <QuiButton type="outline">Bottom</QuiButton>
      </QuiPopover>
      <QuiPopover placement="bottomRight" title={text} content={content} trigger="click">
        <QuiButton type="outline">BR</QuiButton>
      </QuiPopover>
    </div>
  </div>
);
```

### 从浮层关闭-使用 visible 属性控制浮层显示:
```tsx
import { Button, Popover } from 'antd';
import React, { useState } from 'react';
import { QuiPopover,QuiButton } from 'qiji';
export default () => {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  return (
    <QuiPopover
    trigger="click"
    placement='bottomRight'
    visible={visible}
    onVisibleChange={handleVisibleChange}
     content={<a onClick={hide}>Close</a>}
     >
    <QuiButton type="primary">Hover me</QuiButton>
    </QuiPopover>
  );
};
```
## API
属性说明如下：

| 属性      |  说明   |                 类型                  |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| contennt      |     气泡内容     | `ReactNode` \| `() => ReactNode` | -  |      |

