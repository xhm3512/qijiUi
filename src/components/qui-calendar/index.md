---
title: Calendar日历
group:
  title: 数据展示
  order: 10
---

## Input 输入框

Demo:

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

