---
title: Modal 对话框
group:
  title: 反馈
  order: 5
---

# Modal对话框
模态对话框。

## 何时使用
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法。
## 代码演示

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

