---
title: Modal 对话框
group:
  title: 反馈
  order: 5
---

## Grid 珊格

### 基本使用:

```tsx
import React,{useState} from 'react';
import { QuiModal } from 'qiji';
import {Button} from 'antd'

export default () => {
  const [visible,setvVisible]=useState(false);
  const onCancel=()=>{
    setvVisible(false)
  }
  const showModal=()=>{
    setvVisible(true)
  }
  return <>
  <Button onClick={showModal}> click</Button>
  <QuiModal
    onCancel={onCancel}
   visible={visible}
   >
   <p>content</p>
   </QuiModal>
 </>
};
```
### 自定义宽高:

```tsx
import React,{useState} from 'react';
import { QuiModal } from 'qiji';
import {Button} from 'antd'

export default () => {
  const [visible,setvVisible]=useState(false);
  const onCancel=()=>{
    setvVisible(false)
  }
  const showModal=()=>{
    setvVisible(true)
  }
  return <>
  <Button onClick={showModal}> click</Button>
  <QuiModal
    onCancel={onCancel}
  style={{width:424,height:88}}
  centered={true}
   visible={visible}
   >
   <p>content</p>
   </QuiModal>
 </>
};
```

### 自定义位置:

```tsx
import React,{useState} from 'react';
import { QuiModal } from 'qiji';
import {Button} from 'antd'

export default () => {
  const [visible,setvVisible]=useState(false);
  const onCancel=()=>{
    setvVisible(false)
  }
  const showModal=()=>{
    setvVisible(true)
  }
  return <>
  <Button onClick={showModal}> click</Button>
  <QuiModal
    onCancel={onCancel}
  style={{top:20}}
  // centered={true}
   visible={visible}
   >
   <p>content</p>
   </QuiModal>
 </>
};
```
## API
属性说明如下：

| 属性      | 说明   | 类型   |  默认值  | 版本 |
| --------- | :---------: | :-----------------------------------: | :------: | ---: |
| mask      |     是否展示遮罩     | `boolean` | false  |      |
| centered      |     垂直居中展示 Modal     | `boolean` | false  |      |
| style      |     可用于设置浮层的样式，调整浮层位置等 Modal     | `CSSProperties` | -  |      |
| onCancel      |     点击遮罩层或右上角叉或取消按钮的回调     | `function(e)` | -  |      |

其他api参照：https://www.npmjs.com/package/rc-dialog

