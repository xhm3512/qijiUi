---
title: Input 输入框
group:
  title: 数据录入
  order: 3
---

# Input 输入框
## 何时使用
- 需要用户输入表单域内容时。

- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。
## 代码演示
### Input:

```tsx
import React,{useRef} from 'react';
import { QuiInput } from 'qiji';


const {QuiSearch}=QuiInput
export default () => {
   const inputRef = useRef<InputRef>(null);
   const onFinish=(val)=>{
     console.log(val)
   }
  return  <QuiInput
    ref={inputRef}
    onChange={onFinish}
    // className='tt' 
    allowClear={true}
    // loading={true}
    // //  textErr='有特殊字符'
    //  defaultValue='的方法'
    placeholder='这里是描述'
    //  disabled
    />
};
```
### Search:

```tsx
import React,{useRef} from 'react';
import { QuiInput } from 'qiji';


const {QuiSearch}=QuiInput
export default () => {
   const inputRef = useRef<InputRef>(null);
   const onFinish=(val)=>{
     console.log(val)
   }
  return  <QuiSearch
    ref={inputRef}
    onChange={onFinish}
    // className='tt' 
    allowClear={true}
    // loading={true}
    // //  textErr='有特殊字符'
    //  defaultValue='的方法'
    placeholder='这里是描述'
    //  disabled
    />
};
```

## API
参照：https://www.npmjs.com/package/rc-select

