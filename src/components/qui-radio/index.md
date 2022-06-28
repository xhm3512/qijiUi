---
title: Radio 单选框
group:
  title: 数据录入
  order: 9
---

##  Radio 单选框

Demo:

```tsx
import React from 'react';
import { QuiRadio } from 'qiji';
const {QuiGroup}=QuiRadio;
export default () => {
  const onChange=(e,checked)=>{
  }
  return <QuiGroup value='1' >
       <QuiRadio 
      style={{minWidth:80}}
   
      onChange={onChange}
      value='1' >1</QuiRadio>
      <QuiRadio 
      style={{minWidth:80}}
   
      // disabled
      onChange={onChange}
      value='2' >1</QuiRadio>
       <QuiRadio 
      style={{minWidth:80}}
   
      // disabled
      onChange={onChange}
      value='3' >1</QuiRadio>

  </QuiGroup>

};
```

